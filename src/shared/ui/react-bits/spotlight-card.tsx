import React, { useCallback } from "react";
import { motion, useMotionTemplate, useMotionValue, useReducedMotion } from "motion/react";
import { cn } from "@/shared/lib/utils";

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  /**
   * Classes CSS adicionais para o contêiner do card.
   */
  className?: string;
  /**
   * Cor ou CSS Variable do feixe de luz (spotlight).
   * @default "var(--cyan-accent)"
   */
  spotlightColor?: string;
  /**
   * Raio do foco de luz em pixels.
   * @default 320
   */
  spotlightSize?: number;
  /**
   * Opacidade máxima do brilho sobre o conteúdo (0 a 1).
   * @default 0.15
   */
  spotlightOpacity?: number;
}

/**
 * SpotlightCard
 *
 * Card interativo inspirado no React Bits que projeta um raio de luz (spotlight)
 * seguindo a posição do ponteiro do mouse através do evento `onMouseMove`.
 *
 * Otimizações e Acessibilidade:
 * - Utiliza `MotionValue` do `motion/react` para manipular coordenadas sem causar
 *   re-renders no React durante a movimentação do cursor a 60fps+.
 * - Respeita rigorosamente `useReducedMotion()`: quando ativo, desativa os listeners
 *   de rastreamento e oculta a camada de iluminação dinâmica.
 */
export function SpotlightCard({
  children,
  className,
  spotlightColor = "var(--cyan-accent)",
  spotlightSize = 320,
  spotlightOpacity = 0.15,
  onMouseMove,
  onMouseEnter,
  onMouseLeave,
  ...props
}: SpotlightCardProps) {
  const shouldReduceMotion = useReducedMotion();

  // MotionValues mantêm as coordenadas sem disparar ciclos de reconciliação no React
  const mouseX = useMotionValue<number>(-1000);
  const mouseY = useMotionValue<number>(-1000);
  const opacity = useMotionValue<number>(0);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion) return;

      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
      opacity.set(spotlightOpacity);

      onMouseMove?.(e);
    },
    [shouldReduceMotion, spotlightOpacity, mouseX, mouseY, opacity, onMouseMove]
  );

  const handleMouseEnter = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion) return;
      opacity.set(spotlightOpacity);
      onMouseEnter?.(e);
    },
    [shouldReduceMotion, spotlightOpacity, opacity, onMouseEnter]
  );

  const handleMouseLeave = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (shouldReduceMotion) return;
      opacity.set(0);
      onMouseLeave?.(e);
    },
    [shouldReduceMotion, opacity, onMouseLeave]
  );

  // Template CSS dinâmico com gradiente radial centrado no cursor
  const background = useMotionTemplate`radial-gradient(${spotlightSize}px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 80%)`;

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-border/50 bg-card/60 p-6 text-card-foreground shadow-sm backdrop-blur-md transition-colors hover:border-[var(--cyan-accent)]/40",
        className
      )}
      {...props}
    >
      {/* Camada do raio de luz dinâmico (desativada quando useReducedMotion for ativo) */}
      {!shouldReduceMotion && (
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-xl transition-opacity duration-300"
          style={{
            background,
            opacity,
          }}
        />
      )}

      {/* Conteúdo do card */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
