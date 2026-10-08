import { memo } from "react"
import { motion, useReducedMotion } from "motion/react"
import {
  Server,
  Layout,
  Database,
  ShieldCheck,
  Check,
} from "lucide-react"
import { staggerContainer, staggerItem } from "@/constants/animations"
import { Badge } from "@/shared/ui/badge"

interface SkillItem {
  name: string
  highlight?: boolean
}

interface SkillCategory {
  title: string
  subtitle: string
  description: string
  icon: typeof Server
  badgeVariant: "cyan" | "violet" | "secondary"
  skills: SkillItem[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Back-End & Linguagens",
    subtitle: "Core de Engenharia & APIs",
    description:
      "Desenvolvimento de microsserviços e APIs RESTful escaláveis em C# (.NET 8/9), além de experiência prática corporativa com Java (Spring Boot) e NestJS.",
    icon: Server,
    badgeVariant: "cyan",
    skills: [
      { name: "C# / .NET 8 & 9", highlight: true },
      { name: "ASP.NET Core Web API", highlight: true },
      { name: "C++ (Algoritmos)", highlight: true },
      { name: "Java (Spring Boot)", highlight: true },
      { name: "NestJS (TypeScript)", highlight: true },
      { name: "Entity Framework Core", highlight: true },
      { name: "Programação Orientada a Objetos (POO)" },
      { name: "Repository & DTOs" },
      { name: "IHttpClientFactory & Resiliência" },
      { name: "Python & PHP" },
    ],
  },
  {
    title: "Front-End & Interfaces",
    subtitle: "Aplicações Reativas & Desktop",
    description:
      "Construção de SPAs modernas em Angular 17+ Standalone e React, somadas a aplicações desktop em WPF (XAML) com foco em acessibilidade e neurodiversidade.",
    icon: Layout,
    badgeVariant: "cyan",
    skills: [
      { name: "Angular 17+ Standalone", highlight: true },
      { name: "React & TypeScript", highlight: true },
      { name: "RxJS & Programação Reativa", highlight: true },
      { name: "WPF / XAML (Desktop C#)", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "Acessibilidade (WCAG 2.1 AA)", highlight: true },
      { name: "LiveCharts & Gráficos" },
      { name: "Material Design (WPF)" },
      { name: "HTML5 Semântico & ARIA" },
      { name: "Gestão de Estado & Hooks" },
      { name: "Performance Web (Core Vitals)" },      
      { name: "Figma (Prototipação)" },
    ],
  },
  {
    title: "Bancos de Dados & Infraestrutura",
    subtitle: "Persistência, Nuvem & DevOps",
    description:
      "Modelagem e integridade relacional em SQL Server, PostgreSQL e MySQL, associadas a pipelines de integração contínua (CI/CD) e suporte corporativo.",
    icon: Database,
    badgeVariant: "secondary",
    skills: [
      { name: "SQL Server", highlight: true },
      { name: "PostgreSQL & Supabase", highlight: true },
      { name: "MySQL (EF Core)", highlight: true },
      { name: "Docker & Containers", highlight: true },
      { name: "Azure DevOps (CI/CD)", highlight: true },
      { name: "Git, GitHub & Bitbucket", highlight: true },
      { name: "Migrations Versionadas" },
      { name: "Workflow Automation (n8n)", highlight: true },
      { name: "Modelagem Relacional" },
      { name: "Índices & Query Tuning" },
      { name: "Observabilidade & Logs" },
      { name: "Linux Server" },
      { name: "GLPI (Suporte N1/N2)" },
      { name: "Excel Avançado & Dashboards" },
    ],
  },
  {
    title: "Metodologias, Qualidade & IA",
    subtitle: "Práticas Ágeis & Inovação",
    description:
      "Adoção de Clean Code, TDD e arquiteturas desacopladas em squads Scrum/Kanban, somados ao uso diário de IA generativa para aceleração de software.",
    icon: ShieldCheck,
    badgeVariant: "violet",
    skills: [
      { name: "Clean Code & SOLID", highlight: true },
      { name: "TDD & Testes Unitários", highlight: true },
      { name: "Microsserviços & Resiliência (HTTP 503)", highlight: true },
      { name: "Domain-Driven Design (DDD)", highlight: true },
      { name: "IA Generativa (Gemini, Claude, GPT)", highlight: true },
      { name: "Scrum & Kanban (Ágil)" },
      { name: "Engenharia de Prompt COSTAR" },
      { name: "Aspire Leaders (Harvard - Liderança)" },
      { name: "Automação com n8n" },
      { name: "Gestão de Incidentes & SLAs" },
      { name: "Resolução Analítica de Problemas" },
    ],
  }
]

export const SkillsSection = memo(function SkillsSection() {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <section
      id="skills"
      aria-label="Stack Tecnológica e Habilidades"
      className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-border/60"
    >
      <div className="flex flex-col items-center text-center mb-14">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[var(--cyan-badge-foreground)] uppercase mb-2">
          <Server className="size-3.5 text-cyan-accent" />
          <span>Competências & Domínios Técnicos</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
          Stack Tecnológica & Domínios Reais
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mt-2">
          Habilidades comprovadas em projetos práticos, experiências corporativas e certificações. Sem barras arbitrárias ou porcentagens irreais: foco no que é aplicado em produção.
        </p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial={shouldReduceMotion ? "reduced" : "hidden"}
        whileInView={shouldReduceMotion ? "reduced" : "visible"}
        viewport={{ once: true, amount: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skillCategories.map((category) => {
          const Icon = category.icon

          return (
            <motion.div
              key={category.title}
              variants={staggerItem}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm transition-colors hover:border-[var(--cyan-accent)]/50"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-cyan-accent-subtle border border-cyan-accent/20 flex items-center justify-center text-cyan-accent shrink-0">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-foreground text-lg leading-tight">
                        {category.title}
                      </h3>
                      <span className="text-xs text-muted-foreground font-mono">
                        {category.subtitle}
                      </span>
                    </div>
                  </div>
                  <Badge variant={category.badgeVariant}>
                    Domínio Prático
                  </Badge>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-6">
                  {category.description}
                </p>
              </div>

              {/* Grid de Badges Semânticos */}
              <div className="pt-4 border-t border-border/60">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-colors ${
                        skill.highlight
                          ? "bg-cyan-accent-subtle border border-cyan-accent/30 text-[var(--cyan-badge-foreground)] font-semibold"
                          : "bg-muted/60 border border-border/60 text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      <Check className="size-3 text-cyan-accent shrink-0" />
                      <span>{skill.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
})
