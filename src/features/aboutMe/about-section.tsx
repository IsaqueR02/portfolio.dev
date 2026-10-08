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
  Building2,
  GraduationCap,
  HeartHandshake,
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
    title: "Backend .NET & Microsserviços",
    subtitle: "APIs RESTful Resilientes",
    description:
      "Construção de microsserviços e APIs com C# e .NET 8, comunicação via IHttpClientFactory com tolerância a falhas (ex: fallback HTTP 503), Entity Framework Core e SQL Server.",
    tags: ["C#", ".NET 8", "ASP.NET Core", "Microsserviços", "Resiliência HTTP"],
    accentColor: "cyan",
  },
  {
    icon: Layers,
    title: "Clean Architecture & Padrões",
    subtitle: "Estruturação Desacoplada",
    description:
      "Implementação prática de Clean Architecture, princípios SOLID, padrões Repository e DTOs, garantindo código altamente testável, escalável e de fácil manutenção.",
    tags: ["Clean Architecture", "SOLID", "Repository Pattern", "DTOs", "POO"],
    accentColor: "violet",
  },
  {
    icon: Workflow,
    title: "Frontend Reativo & Acessibilidade",
    subtitle: "Angular Standalone & React",
    description:
      "Criação de SPAs modernas em Angular 17+ (com inject e RxJS) e React / TypeScript, priorizando UX intuitiva e acessibilidade para pessoas com neurodivergências (TEA/TDAH).",
    tags: ["Angular 17+", "React", "TypeScript", "RxJS", "Acessibilidade"],
    accentColor: "cyan",
  },
  {
    icon: Brain,
    title: "Qualidade, DevOps & IA Generativa",
    subtitle: "Produtividade de Engenharia",
    description:
      "Adoção de TDD e testes unitários, CI/CD no Azure DevOps e Bitbucket, e integração fluida de ferramentas de IA generativa (Gemini, Claude, GPT) para otimização de código.",
    tags: ["Azure DevOps", "TDD", "Docker", "IA Generativa", "Scrum / Kanban"],
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
          <span>Perfil & Trajetória Técnica</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
          Posicionamento Profissional & Experiência
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mt-2">
          Desenvolvedor de Software focado no ecossistema .NET, C++ e desenvolvimento Fullstack moderno, combinando rigor técnico, empatia e experiência corporativa.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Bloco de Manifesto / Trajetória Real */}
        <motion.div
          variants={fadeInUp}
          initial={shouldReduceMotion ? "reduced" : "hidden"}
          whileInView={shouldReduceMotion ? "reduced" : "visible"}
          viewport={{ once: true, amount: 0.2 }}
          className="lg:col-span-5 p-6 sm:p-8 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm space-y-6"
        >
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="cyan" className="font-semibold">
              <Sparkles className="size-3 mr-1" />
              Desenvolvedor .NET & C++
            </Badge>
            <Badge variant="secondary" className="font-mono text-xs">
              Full Stack
            </Badge>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
            Engenharia de software com foco em resiliência, boas práticas e impacto real.
          </h3>

          <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
            <p>
              Sou <strong>Isaque Roberto Zulato Henriques</strong>, graduando em <strong>Sistemas de Informação</strong> pelo Centro Universitário Una Contagem e com formação técnica em Informática pela <strong>FUNEC Riacho</strong>.
            </p>
            <p>
              Minha experiência profissional inclui passagem pela <strong>CI&T Software</strong> (Programa Next Gen 2025), onde atuei no desenvolvimento de APIs RESTful com Spring Boot e microsserviços em NestJS / TypeScript para clientes de grande porte como o <strong>Hospital Albert Einstein</strong>, sob metodologias ágeis (Scrum/Kanban), TDD e esteiras de CI/CD no Azure DevOps.
            </p>
            <p>
              Anteriormente, atuei em suporte técnico N1/N2 na <strong>Prefeitura Municipal de Contagem</strong> atendendo mais de 200 usuários ativos (com índice de satisfação acima de 95% via GLPI), desenvolvendo sólida capacidade de diagnóstico de problemas e gestão de infraestrutura de rede.
            </p>
          </div>

          {/* Destaque Afirmativo PCD */}
          <div className="p-3.5 rounded-xl border border-cyan-500/20 bg-cyan-500/5 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-semibold text-cyan-500 dark:text-cyan-400">
              <HeartHandshake className="size-4 shrink-0" />
              <span>Vaga Afirmativa / PCD (TEA & TDAH)</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Profissional neurodivergente (CID-10 F84 / CID-11 6A02). Canalizo o hiperfoco em análise minuciosa de código, atenção a requisitos críticos e no design de sistemas verdadeiramente acessíveis e centrados nas pessoas.
            </p>
          </div>

          <div className="pt-2 border-t border-border/60 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
              Trajetória & Fundamentos
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Building2 className="size-3.5 text-cyan-accent" />
                <span>CI&T (Spring Boot & NestJS)</span>
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <GraduationCap className="size-3.5 text-cyan-accent" />
                <span>Sistemas de Info (Una)</span>
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Code className="size-3.5 text-cyan-accent" />
                <span>Clean Code & TDD</span>
              </div>
              <div className="flex items-center gap-2 text-foreground font-medium">
                <Shield className="size-3.5 text-cyan-accent" />
                <span>Resiliência & Concorrência</span>
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
