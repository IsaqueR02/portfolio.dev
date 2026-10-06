import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/shared/lib/utils";

export interface DecryptedTextProps {
  /**
   * Texto que será revelado pelo efeito de descriptografia.
   */
  text: string;
  /**
   * Intervalo em milissegundos entre cada ciclo de embaralhamento.
   * @default 50
   */
  speed?: number;
  /**
   * Quantidade máxima de iterações aleatórias antes da revelação final.
   * @default 10
   */
  maxIterations?: number;
  /**
   * Se true, decifra sequencialmente da esquerda para a direita.
   * Se false, embaralha todos os caracteres simultaneamente até o limite de iterações.
   * @default true
   */
  sequential?: boolean;
  /**
   * Classes adicionais aplicadas aos caracteres ou texto decifrado.
   */
  className?: string;
  /**
   * Classes adicionais aplicadas ao contêiner pai.
   */
  parentClassName?: string;
  /**
   * Gatilho de início da animação:
   * - "view": inicia automaticamente quando o elemento entra na viewport.
   * - "hover": inicia quando o usuário passa o cursor sobre o elemento.
   * @default "view"
   */
  animateOn?: "hover" | "view";
}

/**
 * Alfabeto sci-fi / hacker com caracteres especiais e glifos tecnológicos.
 */
const SCI_FI_GLYPHS = "!@#$%^&*()_+-=[]{}|;:,.<>?~0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

/**
 * Retorna um caractere aleatório do alfabeto sci-fi.
 */
function getRandomGlyph(): string {
  const randomIndex = Math.floor(Math.random() * SCI_FI_GLYPHS.length);
  return SCI_FI_GLYPHS[randomIndex];
}

/**
 * DecryptedText
 *
 * Componente de texto animado inspirado no React Bits que simula a decodificação
 * gradual de texto com caracteres sci-fi/hacker.
 *
 * Acessibilidade (WCAG 2.1 AA):
 * - Disponibiliza o texto integral para leitores de tela via elemento com classe "sr-only".
 * - Oculta a representação visual em mutação com "aria-hidden".
 * - Respeita rigorosamente `useReducedMotion()`: desativa qualquer embaralhamento
 *   e exibe diretamente o texto semântico final.
 */
export function DecryptedText({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = true,
  className,
  parentClassName,
  animateOn = "view",
}: DecryptedTextProps) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const [displayText, setDisplayText] = useState<string>(text);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const [hasAnimated, setHasAnimated] = useState<boolean>(false);
  const intervalRef = useRef<number | null>(null);

  // Limpa o timer ativo para evitar vazamentos de memória
  const clearActiveInterval = useCallback(() => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  /**
   * Executa a lógica de decodificação do texto
   */
  const triggerDecryption = useCallback(() => {
    /**
     * CONDICIONAL DE ACESSIBILIDADE (useReducedMotion):
     * Se o usuário ativou preferência por movimento reduzido nas configurações do sistema,
     * ignoramos completamente os loops de iteração e exibimos o texto original imediatamente.
     */
    if (shouldReduceMotion) {
      setDisplayText(text);
      setIsAnimating(false);
      return;
    }

    clearActiveInterval();
    setIsAnimating(true);

    const length = text.length;
    let iteration = 0;

    if (sequential) {
      let revealedCount = 0;

      intervalRef.current = window.setInterval(() => {
        setDisplayText(() => {
          const resultChars: string[] = [];

          for (let i = 0; i < length; i++) {
            const originalChar = text[i];

            // Preserva espaços e quebras de linha para manter a diagramação intacta
            if (originalChar === " " || originalChar === "\n") {
              resultChars.push(originalChar);
              continue;
            }

            if (i < revealedCount) {
              resultChars.push(originalChar);
            } else {
              resultChars.push(getRandomGlyph());
            }
          }

          return resultChars.join("");
        });

        iteration++;

        // Avança a posição revelada proporcionalmente a maxIterations
        const step = Math.max(1, Math.floor(length / maxIterations));
        revealedCount = Math.min(length, revealedCount + step);

        if (revealedCount >= length) {
          clearActiveInterval();
          setDisplayText(text);
          setIsAnimating(false);
          setHasAnimated(true);
        }
      }, speed);
    } else {
      // Modo não-sequencial: todos os caracteres embaralham simultaneamente
      intervalRef.current = window.setInterval(() => {
        iteration++;

        if (iteration >= maxIterations) {
          clearActiveInterval();
          setDisplayText(text);
          setIsAnimating(false);
          setHasAnimated(true);
          return;
        }

        setDisplayText(() => {
          return text
            .split("")
            .map((char) => {
              if (char === " " || char === "\n") return char;
              // Revela gradualmente caracteres conforme iteração avança
              const shouldReveal = Math.random() < iteration / maxIterations;
              return shouldReveal ? char : getRandomGlyph();
            })
            .join("");
        });
      }, speed);
    }
  }, [clearActiveInterval, maxIterations, sequential, shouldReduceMotion, speed, text]);

  // Gatilho baseado em entrada na viewport (animateOn === "view")
  useEffect(() => {
    if (animateOn === "view" && isInView && !hasAnimated) {
      triggerDecryption();
    }
  }, [animateOn, isInView, hasAnimated, triggerDecryption]);

  // Disparo manual no hover
  const handleMouseEnter = () => {
    if (animateOn === "hover" && !isAnimating) {
      triggerDecryption();
    }
  };

  // Sincroniza se a prop `text` for alterada externamente
  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayText(text);
      return;
    }
    setDisplayText(text);
  }, [text, shouldReduceMotion]);

  // Limpeza na desmontagem do componente
  useEffect(() => {
    return () => {
      clearActiveInterval();
    };
  }, [clearActiveInterval]);

  /**
   * Se movimento reduzido estiver ativado, renderiza o texto final puro
   * sem manipulação de spans dinâmicos ou elementos intermediários.
   */
  if (shouldReduceMotion) {
    return (
      <span
        ref={containerRef}
        className={cn("inline-block", parentClassName)}
      >
        <span className={className}>{text}</span>
      </span>
    );
  }

  return (
    <motion.span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      className={cn("inline-block cursor-default select-none", parentClassName)}
    >
      {/* Texto semântico limpo exclusivamente para leitores de tela (WCAG 2.1 AA) */}
      <span className="sr-only">{text}</span>

      {/* Exibição visual com os glifos sci-fi / hacker em mutação */}
      <span aria-hidden="true" className={className}>
        {displayText}
      </span>
    </motion.span>
  );
}
