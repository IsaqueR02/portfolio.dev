import {
  Layers,
  Heart,
  Activity,
  ShieldCheck
} from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { SiGithub } from "react-icons/si"
import { Button } from "@/shared/ui/button"
import { Badge } from "@/shared/ui/badge"
import { AdaptyCard } from "./adapty-card"
import { KorpCard } from "./korp-card"
import { ProjectDialog } from "./project-dialog"

export function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-500 dark:text-cyan-400 uppercase mb-2">
          <Layers className="size-3.5" />
          <span>Portfólio de Engenharia Real</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
          Projetos &amp; Aplicações em Destaque
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mt-2">
          Sistemas arquitetados e desenvolvidos na prática, abrangendo acessibilidade cognitiva, microsserviços distribuídos em .NET e aplicações desktop voltadas à saúde.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* ========================================================================= */}
        {/* 1. ADAPTY (ACESSIBILIDADE COGNITIVA & IA) */}
        {/* ========================================================================= */}
        <AdaptyCard />

        {/* ========================================================================= */}
        {/* 2. KORPERP (MICROSSERVIÇOS .NET 8 & ANGULAR 17+) */}
        {/* ========================================================================= */}
        <KorpCard />

        {/* ========================================================================= */}
        {/* 3. DOCTOPUS (GESTÃO INTERDISCIPLINAR CLÍNICA - C# / WPF / MYSQL) */}
        {/* ========================================================================= */}
        <motion.article
          className="scifi-glow-card flex flex-col justify-between rounded-2xl border border-border/80 bg-card/80 backdrop-blur-md p-6 sm:p-8"
          whileHover={shouldReduceMotion ? undefined : { scale: 1.005 }}
          transition={{ duration: 0.2 }}
        >
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="cyan">Desktop C# / .NET</Badge>
              <Badge variant="secondary">WPF &amp; XAML</Badge>
              <Badge variant="secondary">MySQL (EF Core)</Badge>
              <Badge variant="violet">Acolhimento Sensorial</Badge>
              <Badge variant="green">LiveCharts</Badge>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Doctopus — Gestão Interdisciplinar para Clínicas
                </h3>
                <p className="text-xs font-mono text-cyan-500 dark:text-cyan-400 mt-1">
                  Atendimento Integrado &amp; Acolhimento a Pacientes Neurodivergentes (TEA / TDAH)
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 shrink-0">
                <ProjectDialog
                  badge="Desktop .NET"
                  secondaryBadge="WPF + MySQL"
                  title="Doctopus: Prontuário Interdisciplinar Humanizado"
                  description="Detalhes da arquitetura de dados e módulo sensorial para fonoaudiólogos, psicólogos e terapeutas ocupacionais."
                  triggerVariant="secondary"
                  triggerText="Detalhes da Arquitetura"
                >
                  <p className="text-xs sm:text-sm">
                    O diferencial do <strong>Doctopus</strong> é centralizar a evolução do paciente sob múltiplos olhares terapêuticos sem segregação de informação, permitindo identificar gatilhos sensoriais e registrar notas evolutivas de engajamento a cada sessão.
                  </p>

                  <div className="p-3 rounded-lg bg-muted/40 border border-border">
                    <h5 className="font-semibold text-foreground mb-1 text-xs uppercase tracking-wider">
                      Tecnologias &amp; Bibliotecas:
                    </h5>
                    <ul className="list-disc list-inside space-y-1 text-xs">
                      <li>Linguagem C# com .NET e arquitetura Desktop</li>
                      <li>XAML estilizado com MaterialDesignInXamlToolkit</li>
                      <li>Banco de dados relacional MySQL gerenciado via EF Core Migrations</li>
                      <li>Visualização de métricas por gráficos reativos com LiveCharts.Wpf</li>
                    </ul>
                  </div>
                </ProjectDialog>

                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/IsaqueR02/Doctopus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5"
                  >
                    <SiGithub size={16} />
                    <span>Repositório GitHub</span>
                  </a>
                </Button>
              </div>
            </div>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Aplicação Desktop desenvolvida em <strong>C# (.NET 6/8)</strong> e <strong>WPF</strong> com persistência em <strong>MySQL</strong> via Entity Framework Core. O sistema conecta fonoaudiólogos, psicólogos e terapeutas ocupacionais em um prontuário interdisciplinar unificado, incluindo cadastro sensorial (interesses, restrições e hiperfocos), notas de participação (1 a 5) e gráficos de acompanhamento em tempo real com <strong>LiveCharts</strong>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <Heart className="size-3.5 text-cyan-500 shrink-0" />
                <span>Perfil sensorial humanizado (TEA/TDAH)</span>
              </div>
              <div className="flex items-center gap-2">
                <Activity className="size-3.5 text-cyan-500 shrink-0" />
                <span>Evolução clínica gráfica com LiveCharts</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="size-3.5 text-cyan-500 shrink-0" />
                <span>UI em MaterialDesignInXamlToolkit</span>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}
