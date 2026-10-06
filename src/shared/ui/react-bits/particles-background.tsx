import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/shared/lib/utils";

export interface ParticlesBackgroundProps {
  /**
   * Quantidade de partículas geradas no canvas.
   * @default 40
   */
  particleCount?: number;
  /**
   * Fator multiplicador da velocidade das partículas.
   * @default 0.5
   */
  particleSpeed?: number;
  /**
   * Cor ou CSS Variable aplicada às partículas e linhas de conexão.
   * Aceita valores hex, rgba ou CSS variables como "var(--cyan-accent)".
   * @default "var(--cyan-accent)"
   */
  particleColor?: string;
  /**
   * Classes adicionais para customização do container do canvas.
   */
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
  baseAlpha: number;
  glowSize: number;
  moveParticlesOnHover?: boolean;
  particleHoverFactor?: number;
}

/**
 * Resolve valores de variáveis CSS para strings válidas no contexto 2D do Canvas.
 * Caso o valor seja "var(--nome-variavel)", busca o valor computado no DOM.
 */
function resolveCssColor(element: HTMLElement, colorValue: string): string {
  if (colorValue.startsWith("var(")) {
    const varName = colorValue.replace(/^var\(\s*|\s*\)$/g, "").trim();
    const computed = getComputedStyle(element).getPropertyValue(varName).trim();
    return computed || "#0ea5e9";
  }
  return colorValue;
}

/**
 * ParticlesBackground
 *
 * Renderiza um canvas de partículas interativo em tons sci-fi (Tamed Sci-Fi),
 * com otimização completa de renderização, suporte a DPR (Device Pixel Ratio)
 * e respeito estrito a useReducedMotion (pausando o loop requestAnimationFrame
 * e zerando consumo de GPU/CPU).
 */
export function ParticlesBackground({
  particleCount = 40,
  particleSpeed = 0.5,
  particleColor = "var(--cyan-accent)",
  className,
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Resolução da cor semântica do tema Tamed Sci-Fi
    const resolvedColor = resolveCssColor(canvas, particleColor);

    // Ajusta dimensões do canvas mantendo proporção e densidade de pixels (Retina / High DPI)
    const resizeCanvas = () => {
      const parent = canvas.parentElement;
      width = parent ? parent.clientWidth : window.innerWidth;
      height = parent ? parent.clientHeight : window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2); // Limita a 2 para equilibrar nitidez e performance

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resizeCanvas();

    // Inicialização do conjunto de partículas com propriedades aleatórias
    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const baseAlpha = Math.random() * 0.45 + 0.25;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * particleSpeed,
        vy: (Math.random() - 0.5) * particleSpeed,
        radius: Math.random() * 1.5 + 1.2,
        alpha: baseAlpha,
        baseAlpha,
        glowSize: Math.random() * 6 + 4,
      };
    });

    const maxConnectionDistance = 110;
    const maxConnectionDistanceSq = maxConnectionDistance * maxConnectionDistance;

    // Renderiza um quadro (desenho de partículas e conexões de rede sci-fi)
    const renderFrame = (updatePosition: boolean) => {
      ctx.clearRect(0, 0, width, height);

      // Desenha conexões entre partículas próximas (efeito constelação sci-fi)
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distSq = dx * dx + dy * dy;

          if (distSq < maxConnectionDistanceSq) {
            const distance = Math.sqrt(distSq);
            const connectionAlpha = (1 - distance / maxConnectionDistance) * 0.18;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = resolvedColor;
            ctx.globalAlpha = connectionAlpha;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Desenha cada partícula com brilho suave sci-fi
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (updatePosition) {
          p.x += p.vx;
          p.y += p.vy;

          // Rebatimento suave nas bordas do container
          if (p.x < 0) {
            p.x = 0;
            p.vx *= -1;
          } else if (p.x > width) {
            p.x = width;
            p.vx *= -1;
          }

          if (p.y < 0) {
            p.y = 0;
            p.vy *= -1;
          } else if (p.y > height) {
            p.y = height;
            p.vy *= -1;
          }
        }

        // Núcleo da partícula
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = resolvedColor;
        ctx.globalAlpha = p.alpha;
        ctx.shadowColor = resolvedColor;
        ctx.shadowBlur = p.glowSize;
        ctx.fill();
      }

      // Reseta sombras para não degradar a performance das próximas operações
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    };

    /**
     * CONDICIONAL DE ACESSIBILIDADE (useReducedMotion):
     * Se o usuário configurou preferência por movimento reduzido no sistema operacional,
     * renderizamos apenas um único quadro estático. O loop requestAnimationFrame NÃO é iniciado,
     * eliminando 100% do processamento contínuo de CPU/GPU.
     */
    if (shouldReduceMotion) {
      renderFrame(false);
      return () => {
        // Sem loop ativo para cancelar, preservando apenas a limpeza de listeners
      };
    }

    // Loop contínuo de animação via requestAnimationFrame
    const animate = () => {
      renderFrame(true);
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    // Observer para redimensionamento responsivo do container pai
    let resizeObserver: ResizeObserver | null = null;
    if (canvas.parentElement && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(() => {
        resizeCanvas();
        if (shouldReduceMotion) {
          renderFrame(false);
        }
      });
      resizeObserver.observe(canvas.parentElement);
    } else {
      window.addEventListener("resize", resizeCanvas);
    }

    // Limpeza rigorosa no desmonte para evitar memory leaks
    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
      if (resizeObserver) {
        resizeObserver.disconnect();
      } else {
        window.removeEventListener("resize", resizeCanvas);
      }
    };
  }, [particleCount, particleSpeed, particleColor, shouldReduceMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn(
        "absolute inset-0 -z-10 pointer-events-none block h-full w-full",
        className
      )}
    />
  );
}
