import React, { useCallback } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/shared/lib/utils";

export interface TiltedCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /**
   * Classes CSS adicionais aplicadas ao contêiner interno com perspectiva 3D.
   */
  className?: string;
  /**
   * Classes CSS aplicadas ao wrapper externo.
   */
  containerClassName?: string;
  /**
   * Ângulo máximo de rotação em graus para os eixos X e Y.
   * Limitado intencionalmente para preservar legibilidade e estética sóbria.
   * @default 8
   */
  maxRotation?: number;
  /**
   * Distância de perspectiva em pixels para o efeito tridimensional.
   * @default 1000
   */
  perspective?: number;
  /**
   * Fator de escala ao passar o cursor sobre o card.
   * @default 1.02
   */
  scaleOnHover?: number;
  /**
   * Se verdadeiro, exibe um reflexo de luz sutil (glare) sobre o card.
   * @default true
   */
  showGlare?: boolean;
}

/**
 * TiltedCard
 *
 * Card com inclinação 3D interativa inspirado no React Bits.
 *
 * Otimizações e Acessibilidade:
 * - Limita rigorosamente a rotação máxima (padrão: 8°, recomendado no máximo 8° a 10°)
 *   garantindo que o conteúdo permaneça plano, nítido e profissional.
 * - Amortecimento físico via molas (`useSpring`) para transições suaves a 60fps.
 * - Respeita integralmente `useReducedMotion()`: desativa os cálculos de inclinação,
 *   escala e brilho, mantendo o card perfeitamente estático e acessível.
 */
export function TiltedCard({
  children,
  className,
  containerClassName,
  maxRotation = 8,
  perspective = 1000,
  showGlare = true,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
  ...props
}: TiltedCardProps) {
  const shouldReduceMotion = useReducedMotion();

  // Garante que o limite sugerido de 8° a 10° seja preservado
  const clampedMaxRotation = Math.min(Math.max(maxRotation, 0), 12);

  // Posição normalizada do mouse relativa ao centro do card [-0.5 a 0.5]
  const mouseX = useMotionValue<number>(0);
  const mouseY = useMotionValue<number>(0);

  // Molas para interpolação suave da inclinação física
  const springConfig = { damping: 22, stiffness: 260 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Mapeamento da posição do cursor para os ângulos de rotação 3D
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [clampedMaxRotation, -clampedMaxRotation]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-clampedMaxRotation, clampedMaxRotation]);

  // Efeito de reflexo de luz (glare) sci-fi acompanhando o ângulo
  const glareX = useTransform(smoothX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(smoothY, [-0.5, 0.5], ["0%", "100%"]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, var(--cyan-glow), transparent 65%)`;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion) return;

      const rect = e.currentTarget.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      if (width === 0 || height === 0) return;

      // Coordenadas relativas centralizadas de -0.5 a 0.5
      const relativeX = (e.clientX - rect.left) / width - 0.5;
      const relativeY = (e.clientY - rect.top) / height - 0.5;

      mouseX.set(relativeX);
      mouseY.set(relativeY);

      onMouseMove?.(e);
    },
    [shouldReduceMotion, mouseX, mouseY, onMouseMove]
  );
  /**
   * CONDICIONAL DE ACESSIBILIDADE (useReducedMotion):
   * Se o usuário configurou preferência por movimento reduzido no SO,
   * renderizamos o card sem transformações 3D ou event listeners de inclinação.
   */
  if (shouldReduceMotion) {
    return (
      <div
        className={cn(
          "rounded-xl border border-border/50 bg-card/60 p-6 text-card-foreground shadow-sm backdrop-blur-md",
          containerClassName,
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }

  return (
    <div
      style={{ perspective: `${perspective}px` }}
      className={cn("relative inline-block w-full", containerClassName)}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        transition={{ duration: 0.1 }}
        whileHover={{ scale: 1.02 }}
        
        className={cn(
          "relative overflow-hidden rounded-xl border border-border/50 bg-card/60 p-6 text-card-foreground shadow-sm backdrop-blur-md transition-colors hover:border-[var(--cyan-accent)]/40",
          className
        )}
      >
        {/* Reflexo dinâmico de luz sci-fi (glare) */}
        {showGlare && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background: glareBackground,
            }}
          />
        )}

        {/* Conteúdo com leve elevação 3D para sensação tátil */}
        <div style={{ transform: "translateZ(18px)" }} className="relative z-10">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
