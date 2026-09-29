import {
  ExternalLink,
  Layers,
  ChevronRight,
  Zap,
} from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { SiGithub } from "react-icons/si"
import { Button } from "@/shared/ui/button"
import { Badge } from "@/shared/ui/badge"
import { AdaptyCard } from "./adapty-card"
import { ProjectDialog } from "./project-dialog"

export function ProjectsSection() {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-cyan-500 dark:text-cyan-400 uppercase mb-2">
          <Layers className="size-3.5" />
          <span>Portfólio de Engenharia</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
          Vitrine de Projetos em Destaque
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mt-2">
          Aplicações desenhadas com foco em robustez arquitetural, escalabilidade, inteligência artificial e alto padrão de código.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* ========================================================================= */}
        {/* DESTAQUE 1: ADAPTY CARD */}
        {/* ========================================================================= */}
        <AdaptyCard />

        {/* ========================================================================= */}
        {/* DESTAQUE 2 & 3: GRID COM OS OUTROS DOIS CARDS */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* DESTAQUE 2: PROJETO SETORIAL */}
          <motion.article
            className="scifi-glow-card flex flex-col justify-between rounded-2xl border border-border/80 bg-card/80 backdrop-blur-md p-6 sm:p-7"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="cyan">API REST</Badge>
                <Badge variant="secondary">C# / .NET</Badge>
                <Badge variant="secondary">PostgreSQL</Badge>
                <Badge variant="secondary">Docker</Badge>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                Sistema de Gestão & Operações Setoriais
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Plataforma de alta disponibilidade para controle de operações, gestão financeira e rastreabilidade transacional. Desenvolvido com C# no backend e PostgreSQL, aplicando controle rigoroso de concorrência e emissão automatizada de relatórios.
              </p>

              <div className="space-y-2 mb-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <ChevronRight className="size-3.5 text-cyan-500 dark:text-cyan-400" />
                  <span>Autenticação e autorização via JWT & RBAC</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="size-3.5 text-cyan-500 dark:text-cyan-400" />
                  <span>Pipeline de CI/CD automatizado com testes de integração</span>
                </div>
                <div className="flex items-center gap-2">
                  <ChevronRight className="size-3.5 text-cyan-500 dark:text-cyan-400" />
                  <span>Modelagem relacional normalizada com migrations controladas</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border/60">
              <ProjectDialog
                badge="Arquitetura Setorial"
                title="Sistema de Gestão Operacional em C# / .NET"
                description="Visão técnica sobre segurança transacional, escalabilidade e banco de dados."
                triggerVariant="outline"
              >
                <p>
                  Desenvolvido com foco no tratamento rigoroso de integridade de dados e auditoria em tempo real. O backend adota o padrão Repository com Entity Framework Core e Dapper em pontos críticos de leitura para máxima taxa de vazão (throughput).
                </p>
                <div className="p-3 rounded-lg bg-muted/40 border border-border">
                  <h5 className="font-semibold text-foreground mb-1">Destaques Técnicos:</h5>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Transações atômicas com ACID garantido</li>
                    <li>Log estruturado com Serilog e observabilidade</li>
                    <li>Tratamento global de exceções via Middlewares customizados</li>
                  </ul>
                </div>
              </ProjectDialog>

              <Button variant="secondary" size="sm" asChild>
                <a
                  href="https://github.com/IsaqueR02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub size={18} />
                  GitHub
                </a>
              </Button>

              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/IsaqueR02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="size-3.5" />
                  Demonstração
                </a>
              </Button>
            </div>
          </motion.article>

          {/* DESTAQUE 3: ALGORITMOS / C++ */}
          <motion.article
            className="scifi-glow-card flex flex-col justify-between rounded-2xl border border-border/80 bg-card/80 backdrop-blur-md p-6 sm:p-7"
            whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
            transition={{ duration: 0.2 }}
          >
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="cyan">C++ 20</Badge>
                <Badge variant="cyan">Algoritmos</Badge>
                <Badge variant="secondary">Alta Performance</Badge>
                <Badge variant="secondary">Low-Level</Badge>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                Core Engine de Algoritmos & Estruturas C++
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Coleção de algoritmos de alta eficiência, estruturas de dados otimizadas para localidade de cache e benchmarks de complexidade computacional desenvolvidos em C++ moderno.
              </p>

              <div className="space-y-2 mb-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Zap className="size-3.5 text-cyan-500 dark:text-cyan-400" />
                  <span>Gerenciamento manual e seguro de memória com Smart Pointers</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="size-3.5 text-cyan-500 dark:text-cyan-400" />
                  <span>Implementação de grafos, árvores balanceadas e sorting O(n log n)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="size-3.5 text-cyan-500 dark:text-cyan-400" />
                  <span>Testes unitários e benchmarks de throughput em nanossegundos</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border/60">
              <Button variant="link" size="sm" asChild>
                <a
                  href="https://github.com/IsaqueR02"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub size={18} />
                  Link Direto GitHub
                </a>
              </Button>

              <ProjectDialog
                badge="C++ 20 Performance"
                title="Estruturas de Baixo Nível & Benchmarks"
                description="Análise de complexidade assintótica e otimização de registradores/cache."
                triggerText="Benchmark & Análise"
                triggerVariant="outline"
              >
                <p>
                  Módulo projetado para explorar o hardware com máxima fidelidade. Inclui custom allocators, bitwise operations e computação concorrente com threads nativas.
                </p>
                <div className="p-3 rounded-lg bg-muted/40 border border-border">
                  <h5 className="font-semibold text-foreground mb-1">Métricas Chave:</h5>
                  <ul className="list-disc list-inside space-y-1 text-xs font-mono">
                    <li>Latência de inserção: O(1) amortizado</li>
                    <li>Zero dynamic allocations em hot paths críticos</li>
                    <li>Compilação com flags de otimização -O3 e LTO</li>
                  </ul>
                </div>
              </ProjectDialog>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
