import { ArrowDown, Mail, Play, Sparkles, CheckCircle2 } from "lucide-react"
import { SiGithub } from "react-icons/si";
import { motion, useReducedMotion } from "motion/react"
import { staggerContainer, staggerItem } from "@/constants/animations"
import { Button } from "@/shared/ui/button"
import { Badge } from "@/shared/ui/badge"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/ui/tooltip"
import { HeroBadge } from "./hero-badge"
import { DecryptedText, ParticlesBackground, TiltedCard } from "@/shared/ui/react-bits";

const techStack = [
  { name: "C# / .NET 8 & 9", variant: "cyan" as const, desc: "Microsserviços, Minimal APIs, EF Core & alta performance" },
  { name: "ASP.NET Core", variant: "secondary" as const, desc: "APIs RESTful, IHttpClientFactory & resiliência HTTP 503" },
  { name: "Angular 17+ Standalone", variant: "cyan" as const, desc: "Injeção com inject(), RxJS reativo & Standalone Components" },
  { name: "C++ (Algoritmos)", variant: "secondary" as const, desc: "Lógica avançada, análise comparativa DIO/Santander" },
  { name: "React & TypeScript", variant: "secondary" as const, desc: "Interfaces reativas, CI&T Next Gen & Adapty_Flipcards" },
  { name: "SQL Server & MySQL", variant: "secondary" as const, desc: "Modelagem relacional corporativa, KorpERP e Doctopus" },
  { name: "Docker & Azure DevOps", variant: "violet" as const, desc: "Integração contínua (CI/CD), conteinerização e TDD" },
  { name: "IA Generativa & Agentes", variant: "violet" as const, desc: "Prompt Engineering COSTAR, Gemini, Claude, GPT & automação" },
]

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion() ?? false

  const scrollTo = (id: string) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-4 py-16 sm:py-24"
    >
      <ParticlesBackground className="z-10 overflow-hidden rounded-xl" />
      {/* Subtle background ambient radial gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <div className="h-[350px] w-[550px] rounded-full bg-[var(--cyan-glow)] blur-[120px]" />
        <div className="h-[250px] w-[350px] rounded-full bg-blue-600/10 blur-[100px] dark:bg-blue-600/15" />
      </div>

      <motion.div
        className="max-w-4xl mx-auto flex flex-col items-center"
        variants={staggerContainer}
        initial={shouldReduceMotion ? "reduced" : "hidden"}
        animate={shouldReduceMotion ? "reduced" : "visible"}
      >
        {/* Dynamic Status Badges */}
        <motion.div variants={staggerItem}>
          <HeroBadge />
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={staggerItem} className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-foreground max-w-3xl leading-[1.15] mb-5">
          <DecryptedText text="Desenvolvedor .NET & C#" speed={100} animateOn="view" className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan-accent)] via-sky-400 to-primary forced-colors:text-foreground" /> | Full Stack
        </motion.h1>

        {/* Subheadline */}
        <motion.p variants={staggerItem} className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-8">
          Engenharia de software focada em microsserviços resilientes com .NET 8, Clean Architecture, SPAs em Angular 17+ e React, e desenvolvimento desktop com WPF. Experiência corporativa na CI&amp;T e projetos de alto impacto como KorpERP e Doctopus.
        </motion.p>

        {/* Quick Action CTAs */}
        <motion.div variants={staggerItem} className="flex flex-wrap items-center justify-center gap-3 w-full max-w-xl mb-12">
          <Button
            variant="scifi"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => scrollTo("#projetos")}
          >
            <Sparkles className="size-4" />
            <span>Ver Projetos</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            asChild
          >
            <a
              href="https://github.com/IsaqueR02"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="size-4" />
              <span>GitHub</span>
            </a>
          </Button>

          <Button
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => scrollTo("#projetos")}
          >
            <Play className="size-4 text-cyan-accent" />
            <span>Demonstração</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
            onClick={() => scrollTo("#contato")}
          >
            <Mail className="size-4" />
            <span>Entrar em Contato</span>
          </Button>
        </motion.div>

        {/* Quick Tech Highlights Badge Grid com Tooltips shadcn/ui */}
        <motion.div variants={staggerItem} className="w-full max-w-3xl pt-8 border-t border-border/50">
          <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground mb-4">
            Especialidades & Core Stack
          </div>
          <TooltipProvider delayDuration={150}>
            <div className="flex flex-wrap justify-center items-center gap-2">
              {techStack.map((tech) => (
                <Tooltip key={tech.name}>
                  <TooltipTrigger className="cursor-help">
                    <Badge variant={tech.variant}>
                      {tech.name}
                    </Badge>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tech.desc}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </TooltipProvider>
        </motion.div>

        {/* Quick Capability Highlights */}
        <motion.div variants={staggerItem} className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl mt-6 text-left">
          <div className="p-3.5 rounded-lg border border-border/60 bg-card/40 backdrop-blur-sm">
            <TiltedCard>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-accent font-semibold mb-1">
              <CheckCircle2 className="size-3.5" />
              <span>Backend Robusto</span>
            </div>
            <p className="text-xs text-muted-foreground">
              APIs RESTful de baixa latência, CQRS, processamento assíncrono e segurança com JWT.
            </p>
            </TiltedCard>
          </div>

          <div className="p-3.5 rounded-lg border border-border/60 bg-card/40 backdrop-blur-sm">
          <TiltedCard>
            <div className="flex items-center gap-2 font-mono text-xs text-violet-accent font-semibold mb-1">
              <CheckCircle2 className="size-3.5" />
              <span>IA & Automação</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Pipelines de Inteligência Artificial aplicada, LLMs e adaptação dinâmica de interfaces.
            </p>
            </TiltedCard>
          </div>

          <div className="p-3.5 rounded-lg border border-border/60 bg-card/40 backdrop-blur-sm">
          <TiltedCard>
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-accent font-semibold mb-1">
              <CheckCircle2 className="size-3.5" />
              <span>Frontend Moderno</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Interfaces em React + TypeScript, componentes acessíveis e design responsivo refinado.
            </p>
          </TiltedCard>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          type="button"
          onClick={() => scrollTo("#projetos")}
          aria-label="Rolar para projetos"
          variants={staggerItem}
          whileHover={shouldReduceMotion ? undefined : { y: -2 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          className="mt-12 text-muted-foreground hover:text-[var(--cyan-accent)] transition-colors p-2 animate-bounce motion-reduce:animate-none cursor-pointer"
        >
          <ArrowDown className="size-5" />
        </motion.button>
      </motion.div>
    </section>
  )
}
