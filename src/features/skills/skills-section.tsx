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
    title: "Backend & Linguagens",
    subtitle: "Core de Engenharia",
    description:
      "Desenvolvimento de serviços escaláveis com foco em alto throughput, tipagem estrita, concorrência e processamento de baixa latência.",
    icon: Server,
    badgeVariant: "cyan",
    skills: [
      { name: "C# / .NET 9", highlight: true },
      { name: "ASP.NET Core Web API", highlight: true },
      { name: "C++ 20 (Algoritmos)", highlight: true },
      { name: "Entity Framework Core" },
      { name: "Dapper (High Performance)" },
      { name: "MediatR (CQRS)" },
      { name: "Minimal APIs" },
      { name: "gRPC & Protobuf" },
      { name: "LINQ & Async/Await" },
      { name: "Middlewares Customizados" },
    ],
  },
  {
    title: "Arquitetura & Boas Práticas",
    subtitle: "Design de Software",
    description:
      "Padrões estruturais para garantia de desacoplamento, testabilidade contínua e facilidade de manutenção em sistemas corporativos.",
    icon: ShieldCheck,
    badgeVariant: "violet",
    skills: [
      { name: "Clean Architecture", highlight: true },
      { name: "Domain-Driven Design (DDD)", highlight: true },
      { name: "Microsserviços" },
      { name: "Princípios SOLID" },
      { name: "Design Patterns GoF" },
      { name: "Testes Unitários (xUnit)" },
      { name: "Testes de Integração" },
      { name: "Autenticação JWT & RBAC" },
      { name: "Event-Driven Architecture" },
      { name: "Concorrência & ACID" },
    ],
  },
  {
    title: "Frontend & Ecossistema Web",
    subtitle: "Interfaces de Alta Fidelidade",
    description:
      "Aplicações web modernas desenhadas para manter 60 FPS estáveis, acessibilidade nativa e componentização limpa.",
    icon: Layout,
    badgeVariant: "cyan",
    skills: [
      { name: "React 19", highlight: true },
      { name: "TypeScript (Strict Mode)", highlight: true },
      { name: "Vite / Next.js" },
      { name: "Tailwind CSS v4" },
      { name: "Acessibilidade (WCAG 2.1 AA)", highlight: true },
      { name: "HTML5 Semântico & ARIA" },
      { name: "Design Systems & Tokens" },
      { name: "Microinterações de GPU" },
      { name: "Gestão de Estado & Hooks" },
      { name: "Performance Web (Core Vitals)" },
    ],
  },
  {
    title: "Banco de Dados, Cloud & DevOps",
    subtitle: "Infraestrutura & Persistência",
    description:
      "Modelagem relacional e chave-valor com estratégias de cache, conteinerização e automação de deploys contínuos.",
    icon: Database,
    badgeVariant: "secondary",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "SQL Server" },
      { name: "Redis (Cache Distribuído)", highlight: true },
      { name: "Docker & Docker Compose", highlight: true },
      { name: "Git & GitHub Actions (CI/CD)" },
      { name: "Linux Server Environment" },
      { name: "Migrations Versionadas" },
      { name: "Modelagem Relacional" },
      { name: "Índices & Query Tuning" },
      { name: "Observabilidade & Logs" },
    ],
  },
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
          <span>Competências & Domínios</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
          Stack Tecnológica & Engenharia
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mt-2">
          Organização por domínios técnicos reais de atuação. Sem métricas arbitrárias ou porcentagens abstratas: cada tecnologia reflete experiência prática em produção e arquitetura.
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

              {/* Grid de Badges Semânticos (Zero métricas arbitrárias / Zero barras) */}
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
