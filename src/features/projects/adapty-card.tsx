import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import {
  ExternalLink,
  Sparkles,
  Cpu,
  Brain,
  //Workflow,
  //CheckCircle2,
  Database,
  ShieldCheck,
  TrendingUp,
} from "lucide-react"
import { SiGithub } from "react-icons/si"
import { Button } from "@/shared/ui/button"
import { Badge } from "@/shared/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import { fadeInUp } from "@/constants/animations"
import { ProjectDialog } from "./project-dialog"
import { SpotlightCard } from "@/shared/ui/react-bits"

export function AdaptyCard() {
  const [activeAdaptyTab, setActiveAdaptyTab] = useState<"overview" | "architecture" | "results">("overview")
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <SpotlightCard className="p-3 sm:p-6">
    <motion.div
      id="adapty-card"
      className="scifi-glow-card relative z-10 rounded-2xl border border-cyan-accent/30 bg-card/80 backdrop-blur-md p-4 sm:p-8"
      whileHover={shouldReduceMotion ? undefined : { scale: 1.01 }}
      transition={{ duration: 0.2 }}
    >
      {/* Top highlight bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-accent via-cyan-accent to-primary" />
      {/* Header & Badges */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <Badge variant="cyan" className="font-semibold">
              <Sparkles className="size-3 mr-1" />
              Destaque Principal
            </Badge>
            <Badge variant="secondary">Fullstack .NET</Badge>
            <Badge variant="violet">IA Agente</Badge>
            <Badge variant="green">Demo Online</Badge>
          </div>
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
            Adapty — Plataforma de Acessibilidade Cognitiva & IA
          </h3>
        </div>

        {/* Quick Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <ProjectDialog
            badge="Adapty v1.0"
            secondaryBadge="Fullstack .NET + IA"
            title="Adapty: Deep Dive Arquitetural & Regras de Negócio"
            description="Documentação técnica do pipeline de adaptação sensorial e infraestrutura distribuída."
            triggerVariant="secondary"
          >
            <div className="p-4 rounded-lg bg-muted/40 border border-border">
              <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Cpu className="size-4 text-cyan-accent" />
                Visão de Engenharia
              </h4>
              <p className="leading-relaxed">
                O Adapty foi estruturado seguindo os princípios de <strong>Clean Architecture</strong> e <strong>Domain-Driven Design (DDD)</strong>. O backend em ASP.NET Core 9 orquestra chamadas assíncronas para modelos de linguagem e visão, garantindo que o processamento pesado de acessibilidade seja executado sem bloquear o ciclo de vida da requisição HTTP.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted/40 border border-border">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Brain className="size-4 text-cyan-accent" />
                  Pipeline de IA
                </h4>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>Sumarização adaptativa para dislexia e TDAH</li>
                  <li>Geração de legendas e audiodescrições</li>
                  <li>Agentes autônomos para auditoria de contraste</li>
                  <li>Normalização semântica de DOM em tempo real</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-muted/40 border border-border">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Database className="size-4 text-cyan-accent" />
                  Armazenamento & Performance
                </h4>
                <ul className="space-y-1.5 list-disc list-inside">
                  <li>PostgreSQL com índices otimizados</li>
                  <li>Entity Framework Core com queries compiladas</li>
                  <li>Cache distribuído com Redis para respostas de IA</li>
                  <li>Controle de concorrência com MediatR CQRS</li>
                </ul>
              </div>
            </div>

            <div className="p-4 rounded-lg border border-cyan-accent/20 bg-cyan-accent-subtle">
              <h4 className="font-semibold text-[var(--cyan-badge-foreground)] mb-1 flex items-center gap-2">
                <ShieldCheck className="size-4" />
                Padrões e Conformidade
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Em conformidade com a <strong>WCAG 2.2 Nível AAA</strong>, o sistema gera dinamicamente folhas de estilo de alto contraste e descritores acessíveis para leitores de tela NVDA e JAWS.
              </p>
            </div>
          </ProjectDialog>

          <Button variant="outline" size="sm" asChild>
            <a
              href="https://github.com/IsaqueR02/Adapty"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub size={18} />
              GitHub
            </a>
          </Button>

          <Button variant="secondary" size="sm" asChild>
            <a
              href="https://adapty.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="size-3.5 text-cyan-accent" />
              Demonstração
            </a>
          </Button>
        </div>
      </div>

      {/* Interactive Multi-View Tabs (Visão Geral, Arquitetura, Resultados) */}
      <Tabs
        value={activeAdaptyTab}
        onValueChange={(value: string) => {
          if (value === "overview" || value === "architecture" || value === "results") {
            setActiveAdaptyTab(value)
          }
        }}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-1 h-auto sm:max-w-md">
          <TabsTrigger value="overview" id="adapty-tab-overview" aria-controls="adapty-panel-overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="architecture" id="adapty-tab-architecture" aria-controls="adapty-panel-architecture">Arquitetura <br />/ IA</TabsTrigger>
          <TabsTrigger value="results" id="adapty-tab-results" aria-controls="adapty-panel-results">Resultados <br /> & Métricas</TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait" initial={false}>
          {activeAdaptyTab === "overview" && (
            <motion.section
              key="overview"
              id="adapty-panel-overview"
              role="tabpanel"
              aria-labelledby="adapty-tab-overview"
              tabIndex={0}
              variants={fadeInUp}
              initial={shouldReduceMotion ? "reduced" : "hidden"}
              animate={shouldReduceMotion ? "reduced" : "visible"}
              exit={shouldReduceMotion ? "reduced" : "hidden"}
              className="mt-4 space-y-4 outline-none w-full opacity-100"
            >
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            O <strong>Adapty</strong> é uma solução completa desenvolvida para transformar a acessibilidade digital em plataformas web. Utiliza modelos avançados de Inteligência Artificial para interpretar contextos visuais e cognitivos, adaptando tipografia, paletas de cores e simplificação de linguagem sob demanda para pessoas com deficiência visual, auditiva ou neurodivergências.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-muted/40 border border-border/60">
              <div className="text-xs font-mono text-[var(--cyan-badge-foreground)] font-semibold mb-1">
                Interface Fluida
              </div>
              <div className="text-xs text-muted-foreground">
                Painel em React 19 + TypeScript com microinterações imediatas e suporte a atalhos de teclado.
              </div>
            </div>
            <div className="p-3 rounded-lg bg-muted/40 border border-border/60">
              <div className="text-xs font-mono text-[var(--cyan-badge-foreground)] font-semibold mb-1">
                IA Integrada
              </div>
              <div className="text-xs text-muted-foreground">
                Pipeline inteligente de sumarização, OCR e transição sensorial para múltiplos perfis.
              </div>
            </div>
            <div className="p-3 rounded-lg bg-muted/40 border border-border/60">
              <div className="text-xs font-mono text-[var(--cyan-badge-foreground)] font-semibold mb-1">
                Performance .NET
              </div>
              <div className="text-xs text-muted-foreground">
                Backend ASP.NET Core com tempo de resposta sub-100ms para requisições parametrizadas.
              </div>
            </div>
          </div>
            </motion.section>
          )}

          {activeAdaptyTab === "architecture" && (
            <motion.section
              key="architecture"
              id="adapty-panel-architecture"
              role="tabpanel"
              aria-labelledby="adapty-tab-architecture"
              tabIndex={0}
              variants={fadeInUp}
              initial={shouldReduceMotion ? "reduced" : "hidden"}
              animate={shouldReduceMotion ? "reduced" : "visible"}
              exit={shouldReduceMotion ? "reduced" : "hidden"}
              className="mt-4 space-y-4 outline-none"
            >
          <div className="p-4 rounded-lg bg-muted/30 border border-border/80">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--cyan-badge-foreground)] font-semibold mb-2">
              <Cpu className="size-4" />
              <span>Camadas da Clean Architecture no .NET 9</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
              Divisão em <strong>Domain</strong> (entidades, value objects e regras puras), <strong>Application</strong> (comandos/queries CQRS via MediatR, validações FluentValidation), <strong>Infrastructure</strong> (EF Core, PostgreSQL, integração com SDKs de IA e Redis) e <strong>Presentation</strong> (ASP.NET Web API com Minimal APIs tipadas).
            </p>
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-background border border-border text-foreground">
                • MediatR CQRS
              </span>
              <span className="px-2.5 py-1 rounded bg-background border border-border text-foreground">
                • EF Core 9
              </span>
              <span className="px-2.5 py-1 rounded bg-background border border-border text-foreground">
                • OpenAI / Local LLM Pipeline
              </span>
              <span className="px-2.5 py-1 rounded bg-background border border-border text-foreground">
                • Redis Cache
              </span>
              <span className="px-2.5 py-1 rounded bg-background border border-border text-foreground">
                • Docker Containerized
              </span>
            </div>
          </div>
            </motion.section>
          )}

          {activeAdaptyTab === "results" && (
            <motion.section
              key="results"
              id="adapty-panel-results"
              role="tabpanel"
              aria-labelledby="adapty-tab-results"
              tabIndex={0}
              variants={fadeInUp}
              initial={shouldReduceMotion ? "reduced" : "hidden"}
              animate={shouldReduceMotion ? "reduced" : "visible"}
              exit={shouldReduceMotion ? "reduced" : "hidden"}
              className="mt-4 space-y-4 outline-none"
            >
          <div className="p-4 rounded-lg bg-muted/30 border border-border/80">
            <div className="flex items-center gap-2 font-mono text-xs text-[var(--green-badge-foreground)] font-semibold mb-2">
              <TrendingUp className="size-4" />
              <span>Resultados de Testes, Benchmark & Conformidade</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
              Métricas consolidadas em testes de carga e validações de usabilidade com usuários de tecnologias assistivas. O sistema comprovou 99.4% de conformidade com diretrizes de acessibilidade e redução de 65% na sobrecarga cognitiva.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 rounded bg-background/60 border border-border">
                <div className="font-mono font-bold text-[var(--cyan-badge-foreground)]">&lt; 85ms</div>
                <div className="text-muted-foreground text-[11px]">Latência média da API</div>
              </div>
              <div className="p-2.5 rounded bg-background/60 border border-border">
                <div className="font-mono font-bold text-[var(--green-badge-foreground)]">100% AAA</div>
                <div className="text-muted-foreground text-[11px]">Contraste e Legibilidade</div>
              </div>
              <div className="p-2.5 rounded bg-background/60 border border-border">
                <div className="font-mono font-bold text-[var(--violet-badge-foreground)]">0 Memory Leaks</div>
                <div className="text-muted-foreground text-[11px]">Testes de Carga K6</div>
              </div>
            </div>
          </div>
            </motion.section>
          )}
        </AnimatePresence>
      </Tabs>
    </motion.div>
    </SpotlightCard>
  )
}
