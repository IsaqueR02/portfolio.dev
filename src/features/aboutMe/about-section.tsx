import { memo } from "react"
import { motion, useReducedMotion } from "motion/react"
import {
  Code,
  Layers,
  Cpu,
  Brain,
  Shield,
  Workflow,
  Sparkles,
  Terminal,
} from "lucide-react"
import { fadeInUp, staggerContainer, staggerItem } from "@/constants/animations"
import { Badge } from "@/shared/ui/badge"

interface PillarItem {
  icon: typeof Cpu
  title: string
  subtitle: string
  description: string
  tags: string[]
  accentColor: "cyan" | "violet"
}

const engineeringPillars: PillarItem[] = [
  {
    icon: Cpu,
    title: "Backend Robusto & .NET 9",
    subtitle: "APIs RESTful de Baixa Latência",
    description:
      "Construção de serviços de alta disponibilidade com ASP.NET Core 9, Minimal APIs, processamento concorrente e pipelines desacoplados com MediatR e CQRS.",
    tags: ["C#", ".NET 9", "ASP.NET Core", "CQRS", "REST APIs"],
    accentColor: "cyan",
  },
  {
    icon: Layers,
    title: "Arquitetura & DDD",
    subtitle: "Clean Architecture & Domínio Rico",
    description:
      "Isolamento rigoroso de regras de negócio, modelagem de domínio centrada no problema (Domain-Driven Design), desacoplamento de persistência e manutenibilidade a longo prazo.",
    tags: ["Clean Architecture", "DDD", "SOLID", "Entity Framework", "Dapper"],
    accentColor: "violet",
  },
  {
    icon: Brain,
    title: "IA Aplicada & Agentes",
    subtitle: "Integração Inteligente e Escalável",
    description:
      "Conexão de LLMs e serviços cognitivos a pipelines corporativos, processamento assíncrono sem bloqueio de I/O e interfaces autoadaptativas orientadas a acessibilidade.",
    tags: ["OpenAI API", "LLMs", "Agentes Cognitivos", "Pipelines Assíncronos"],
    accentColor: "cyan",
  },
  {
    icon: Workflow,
    title: "Fullstack Moderno & Qualidade",
    subtitle: "Ecossistema React 19 & DevOps",
    description:
      "Frontends ultrarrápidos em React 19 e TypeScript, aliados a pipelines de CI/CD automatizados, conteinerização com Docker e observabilidade contínua.",
    tags: ["React 19", "TypeScript", "Tailwind CSS", "Docker", "CI/CD"],
    accentColor: "violet",
  },
]

export const AboutSection = memo(function AboutSection() {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <section
      id="sobre"
      aria-label="Sobre o Engenheiro de Software"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-border/60"
    >
      <div className="flex flex-col items-center text-center mb-14">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[var(--cyan-badge-foreground)] uppercase mb-2">
          <Terminal className="size-3.5 text-cyan-accent" />
          <span>Perfil & Engenharia</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
          Posicionamento Profissional & Arquitetura
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mt-2">
          Soluções de ponta a ponta estruturadas para resolver problemas reais com excelência técnica, clareza de domínio e código limpo.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Bloco de Manifesto / Filosofia de Engenharia */}
        <motion.div
          variants={fadeInUp}
          initial={shouldReduceMotion ? "reduced" : "hidden"}
          whileInView={shouldReduceMotion ? "reduced" : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm space-y-6"
        >
          <div className="flex items-center gap-2">
            <Badge variant="cyan" className="font-semibold">
              <Sparkles className="size-3 mr-1" />
              Engenharia Orientada a Domínio
            </Badge>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
            Construindo sistemas preparados para escalar sem surpresas em produção.
          </h3>

          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Minha atuação é centrada na engenharia de software voltada ao ecossistema <strong>.NET / C#</strong> e desenvolvimento <strong>Fullstack moderno</strong>. Acredito que arquitetura não é sobre abstrações excessivas, mas sobre desenhar sistemas previsíveis, testáveis e fáceis de evoluir.
            </p>
            <p>
              No backend, aplico rigorosamente <strong>Clean Architecture</strong> e <strong>Domain-Driven Design (DDD)</strong>, isolando a regra de negócio das camadas de infraestrutura e persistência. Minhas soluções utilizam <strong>ASP.NET Core 9</strong>, mensageria e bancos relacionais com índices refinados.
            </p>
            <p>
              Na camada de cliente, integro ecossistemas modernos com <strong>React 19</strong> e <strong>TypeScript</strong> em modo estrito, garantindo acessibilidade (WCAG 2.1 AA) e renderização a 60 FPS contínuos, sem poluição de efeitos desnecessários.
            </p>
          </div>

          <div className="pt-4 border-t border-border/60 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Princípios Práticos de Trabalho
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Shield className="size-3.5 text-cyan-accent" />
                <span>Zero Métricas Arbitrárias</span>
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Code className="size-3.5 text-cyan-accent" />
                <span>Clean Code & SOLID</span>
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Workflow className="size-3.5 text-cyan-accent" />
                <span>Testabilidade Contínua</span>
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Cpu className="size-3.5 text-cyan-accent" />
                <span>Otimização para GPU & I/O</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grid de 4 Pilares Técnicos */}
        <motion.div
          variants={staggerContainer}
          initial={shouldReduceMotion ? "reduced" : "hidden"}
          whileInView={shouldReduceMotion ? "reduced" : "visible"}
          viewport={{ once: true, amount: 0.15 }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {engineeringPillars.map((pillar) => {
            const Icon = pillar.icon
            const isCyan = pillar.accentColor === "cyan"

            return (
              <motion.article
                key={pillar.title}
                variants={staggerItem}
                className="flex flex-col justify-between p-5 sm:p-6 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm transition-colors hover:border-[var(--cyan-accent)]/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`size-10 rounded-xl flex items-center justify-center border ${
                        isCyan
                          ? "bg-cyan-accent-subtle border-cyan-accent/20 text-cyan-accent"
                          : "bg-violet-accent-subtle border-violet-accent/20 text-violet-accent"
                      }`}
                    >
                      <Icon className="size-5" />
                    </div>
                    <Badge variant={isCyan ? "cyan" : "violet"}>
                      {pillar.subtitle}
                    </Badge>
                  </div>

                  <h4 className="text-base font-bold text-foreground mb-2">
                    {pillar.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border/60">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-muted/60 text-muted-foreground border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
})
