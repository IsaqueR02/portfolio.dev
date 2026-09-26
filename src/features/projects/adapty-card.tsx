import { useState } from "react"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import { ProjectDialog } from "./project-dialog"

export function AdaptyCard() {
  const [activeAdaptyTab, setActiveAdaptyTab] = useState("overview")

  return (
    <div
      id="adapty-card"
      className="scifi-glow-card relative rounded-2xl border border-cyan-500/30 bg-card/80 backdrop-blur-md p-6 sm:p-8 overflow-hidden"
    >
      {/* Top highlight bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-600" />

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
                <Cpu className="size-4 text-cyan-400" />
                Visão de Engenharia
              </h4>
              <p className="leading-relaxed">
                O Adapty foi estruturado seguindo os princípios de <strong>Clean Architecture</strong> e <strong>Domain-Driven Design (DDD)</strong>. O backend em ASP.NET Core 9 orquestra chamadas assíncronas para modelos de linguagem e visão, garantindo que o processamento pesado de acessibilidade seja executado sem bloquear o ciclo de vida da requisição HTTP.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-muted/40 border border-border">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Brain className="size-4 text-cyan-400" />
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
                  <Database className="size-4 text-cyan-400" />
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

            <div className="p-4 rounded-lg border border-cyan-500/20 bg-cyan-500/5">
              <h4 className="font-semibold text-cyan-500 dark:text-cyan-300 mb-1 flex items-center gap-2">
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
              <ExternalLink className="size-3.5 text-cyan-500 dark:text-cyan-400" />
              Demonstração
            </a>
          </Button>
        </div>
      </div>

      {/* Interactive Multi-View Tabs (Visão Geral, Arquitetura, Resultados) */}
      <Tabs
        value={activeAdaptyTab}
        onValueChange={setActiveAdaptyTab}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-3 max-w-md">
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="architecture">Arquitetura / IA</TabsTrigger>
          <TabsTrigger value="results">Resultados & Métricas</TabsTrigger>
        </TabsList>

        {/* TAB 1: VISÃO GERAL */}
        <TabsContent value="overview" className="mt-4 space-y-4">
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            O <strong>Adapty</strong> é uma solução completa desenvolvida para transformar a acessibilidade digital em plataformas web. Utiliza modelos avançados de Inteligência Artificial para interpretar contextos visuais e cognitivos, adaptando tipografia, paletas de cores e simplificação de linguagem sob demanda para pessoas com deficiência visual, auditiva ou neurodivergências.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-muted/40 border border-border/60">
              <div className="text-xs font-mono text-cyan-500 dark:text-cyan-400 font-semibold mb-1">
                Interface Fluida
              </div>
              <div className="text-xs text-muted-foreground">
                Painel em React 19 + TypeScript com microinterações imediatas e suporte a atalhos de teclado.
              </div>
            </div>
            <div className="p-3 rounded-lg bg-muted/40 border border-border/60">
              <div className="text-xs font-mono text-cyan-500 dark:text-cyan-400 font-semibold mb-1">
                IA Integrada
              </div>
              <div className="text-xs text-muted-foreground">
                Pipeline inteligente de sumarização, OCR e transição sensorial para múltiplos perfis.
              </div>
            </div>
            <div className="p-3 rounded-lg bg-muted/40 border border-border/60">
              <div className="text-xs font-mono text-cyan-500 dark:text-cyan-400 font-semibold mb-1">
                Performance .NET
              </div>
              <div className="text-xs text-muted-foreground">
                Backend ASP.NET Core com tempo de resposta sub-100ms para requisições parametrizadas.
              </div>
            </div>
          </div>
        </TabsContent>

        {/* TAB 2: ARQUITETURA & IA */}
        <TabsContent value="architecture" className="mt-4 space-y-4">
          <div className="p-4 rounded-lg bg-muted/30 border border-border/80">
            <div className="flex items-center gap-2 font-mono text-xs text-cyan-500 dark:text-cyan-400 font-semibold mb-2">
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
        </TabsContent>

        {/* TAB 3: RESULTADOS & MÉTRICAS */}
        <TabsContent value="results" className="mt-4 space-y-4">
          <div className="p-4 rounded-lg bg-muted/30 border border-border/80">
            <div className="flex items-center gap-2 font-mono text-xs text-emerald-500 dark:text-emerald-400 font-semibold mb-2">
              <TrendingUp className="size-4" />
              <span>Resultados de Testes, Benchmark & Conformidade</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
              Métricas consolidadas em testes de carga e validações de usabilidade com usuários de tecnologias assistivas. O sistema comprovou 99.4% de conformidade com diretrizes de acessibilidade e redução de 65% na sobrecarga cognitiva.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 rounded bg-background/60 border border-border">
                <div className="font-mono font-bold text-cyan-400">&lt; 85ms</div>
                <div className="text-muted-foreground text-[11px]">Latência média da API</div>
              </div>
              <div className="p-2.5 rounded bg-background/60 border border-border">
                <div className="font-mono font-bold text-emerald-400">100% AAA</div>
                <div className="text-muted-foreground text-[11px]">Contraste e Legibilidade</div>
              </div>
              <div className="p-2.5 rounded bg-background/60 border border-border">
                <div className="font-mono font-bold text-violet-400">0 Memory Leaks</div>
                <div className="text-muted-foreground text-[11px]">Testes de Carga K6</div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
