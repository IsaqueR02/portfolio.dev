import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import {
  ExternalLink,
  Sparkles,
  Cpu,
  Database,
  ShieldCheck,
  TrendingUp,
  Workflow,
} from "lucide-react"
import { SiGithub } from "react-icons/si"
import { FaYoutube } from "react-icons/fa"
import { Button } from "@/shared/ui/button"
import { Badge } from "@/shared/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/shared/ui/tabs"
import { fadeInUp } from "@/constants/animations"
import { ProjectDialog } from "./project-dialog"
import { SpotlightCard } from "@/shared/ui/react-bits"

export function KorpCard() {
  const [activeTab, setActiveTab] = useState<"overview" | "architecture" | "resilience">("overview")
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <SpotlightCard className="p-3 sm:p-6">
      <motion.div
        id="korp-card"
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
                Microsserviços .NET 8
              </Badge>
              <Badge variant="secondary">Angular 17+ Standalone</Badge>
              <Badge variant="violet">Resiliência HTTP 503</Badge>
              <Badge variant="green">Demo em Vídeo</Badge>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              KorpERP — Desafio Técnico Full Stack KORP
            </h3>
            <p className="text-xs font-mono text-cyan-accent mt-1">
              EstoqueService (Porta 7252) + FaturamentoService (Porta 7264) + SPA Angular (Porta 4200)
            </p>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap items-center gap-2">
            <ProjectDialog
              badge="Arquitetura Microsserviços"
              secondaryBadge=".NET 8 + Angular"
              title="KorpERP: Deep Dive Arquitetural & Resiliência"
              description="Documentação técnica sobre a orquestração entre microsserviços, integridade fiscal e Angular Standalone."
              triggerVariant="secondary"
            >
              <div className="p-4 rounded-lg bg-muted/40 border border-border">
                <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Cpu className="size-4 text-cyan-accent" />
                  Visão de Engenharia
                </h4>
                <p className="leading-relaxed">
                  Arquitetura distribuída composta por dois microsserviços backend independentes em <strong>.NET 8</strong> e uma SPA em <strong>Angular 17+ Standalone</strong>. Separação rigorosa de responsabilidades entre o domínio de controle de estoque e o faturamento contábil/fiscal.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-muted/40 border border-border">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <ShieldCheck className="size-4 text-cyan-accent" />
                    Resiliência e Contingência
                  </h4>
                  <ul className="space-y-1.5 list-disc list-inside">
                    <li>Interceptação de HttpRequestException no fechamento da NF</li>
                    <li>Preservação da NF no status &quot;Aberta&quot; se o estoque falhar</li>
                    <li>Retorno padronizado HTTP 503 (Service Unavailable)</li>
                    <li>Prevenção garantida contra faturamento sem baixa</li>
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-muted/40 border border-border">
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Database className="size-4 text-cyan-accent" />
                    Backend &amp; Frontend
                  </h4>
                  <ul className="space-y-1.5 list-disc list-inside">
                    <li>Entity Framework Core com SQL Server</li>
                    <li>IHttpClientFactory para conexões HTTP resilientes</li>
                    <li>Angular Standalone com injeção via inject()</li>
                    <li>provideHttpClient(withFetch()) e RxJS Observables</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-lg border border-cyan-accent/20 bg-cyan-accent-subtle flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--cyan-badge-foreground)]">
                  Vídeo demonstrativo gravado no YouTube
                </span>
                <a
                  href="https://youtu.be/6zZkjyMyxnM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-cyan-accent hover:underline flex items-center gap-1"
                >
                  Assistir no YouTube <ExternalLink className="size-3" />
                </a>
              </div>
            </ProjectDialog>

            <Button variant="outline" size="sm" asChild>
              <a
                href="https://github.com/IsaqueR02/Korp_Teste_Isaque"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub size={18} />
                GitHub
              </a>
            </Button>

            <Button variant="scifi" size="sm" asChild>
              <a
                href="https://youtu.be/6zZkjyMyxnM"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="size-4 text-red-500 mr-1" />
                Assistir Vídeo Demo
              </a>
            </Button>
          </div>
        </div>

        {/* Interactive Multi-View Tabs (Visão Geral, Arquitetura / Fluxo, Resiliência & Métricas) */}
        <Tabs
          value={activeTab}
          onValueChange={(value: string) => {
            if (value === "overview" || value === "architecture" || value === "resilience") {
              setActiveTab(value)
            }
          }}
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-1 h-auto sm:max-w-md">
            <TabsTrigger value="overview" id="korp-tab-overview" aria-controls="korp-panel-overview">
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="architecture" id="korp-tab-architecture" aria-controls="korp-panel-architecture">
              Arquitetura <br />/ Microsserviços
            </TabsTrigger>
            <TabsTrigger value="resilience" id="korp-tab-resilience" aria-controls="korp-panel-resilience">
              Resiliência <br />&amp; Contingência
            </TabsTrigger>
          </TabsList>

          <AnimatePresence mode="wait" initial={false}>
            {activeTab === "overview" && (
              <motion.section
                key="overview"
                id="korp-panel-overview"
                role="tabpanel"
                aria-labelledby="korp-tab-overview"
                tabIndex={0}
                variants={fadeInUp}
                initial={shouldReduceMotion ? "reduced" : "hidden"}
                animate={shouldReduceMotion ? "reduced" : "visible"}
                exit={shouldReduceMotion ? "reduced" : "hidden"}
                className="mt-4 space-y-4 outline-none w-full opacity-100"
              >
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  O <strong>KorpERP</strong> é uma solução corporativa distribuída desenvolvida seguindo estrita separação de responsabilidades. O <strong>EstoqueService</strong> (porta 7252) gerencia produtos e saldos, enquanto o <strong>FaturamentoService</strong> (porta 7264) controla o ciclo de vida de Notas Fiscais e orquestra a baixa contábil de estoque no fechamento. A interface em <strong>Angular 17+</strong> consome as APIs de forma desacoplada e reativa.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                  <div className="p-3 rounded-lg bg-muted/40 border border-border/60">
                    <div className="text-xs font-mono text-[var(--cyan-badge-foreground)] font-semibold mb-1">
                      Microsserviços .NET 8
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Serviços independentes em ASP.NET Core Web API com Entity Framework Core e SQL Server.
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/40 border border-border/60">
                    <div className="text-xs font-mono text-[var(--cyan-badge-foreground)] font-semibold mb-1">
                      Frontend SPA Angular
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Arquitetura modular em Standalone Components, função moderna inject() e Observables RxJS.
                    </div>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/40 border border-border/60">
                    <div className="text-xs font-mono text-[var(--cyan-badge-foreground)] font-semibold mb-1">
                      Integridade Fiscal
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Baixa síncrona com fallback HTTP 503 para garantir que nenhuma NF feche sem saldo ou serviço.
                    </div>
                  </div>
                </div>
              </motion.section>
            )}

            {activeTab === "architecture" && (
              <motion.section
                key="architecture"
                id="korp-panel-architecture"
                role="tabpanel"
                aria-labelledby="korp-tab-architecture"
                tabIndex={0}
                variants={fadeInUp}
                initial={shouldReduceMotion ? "reduced" : "hidden"}
                animate={shouldReduceMotion ? "reduced" : "visible"}
                exit={shouldReduceMotion ? "reduced" : "hidden"}
                className="mt-4 space-y-4 outline-none"
              >
                <div className="p-4 rounded-lg bg-muted/30 border border-border/80">
                  <div className="flex items-center gap-2 font-mono text-xs text-[var(--cyan-badge-foreground)] font-semibold mb-2">
                    <Workflow className="size-4" />
                    <span>Orquestração e Padrões Modernos</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
                    A comunicação entre <strong>FaturamentoService</strong> e <strong>EstoqueService</strong> é gerenciada de maneira eficiente via <strong>IHttpClientFactory</strong>. No frontend Angular, adota-se <code>provideHttpClient(withFetch())</code>, ciclo de vida <code>ngOnInit</code> para carregamento reativo de tabelas e injeção de dependência via função <code>inject()</code> (Angular 14+), tornando os componentes desacoplados.
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    <span className="px-2.5 py-1 rounded bg-background border border-border text-foreground">
                      • .NET 8 Web API
                    </span>
                    <span className="px-2.5 py-1 rounded bg-background border border-border text-foreground">
                      • EstoqueService :7252
                    </span>
                    <span className="px-2.5 py-1 rounded bg-background border border-border text-foreground">
                      • FaturamentoService :7264
                    </span>
                    <span className="px-2.5 py-1 rounded bg-background border border-border text-foreground">
                      • IHttpClientFactory
                    </span>
                    <span className="px-2.5 py-1 rounded bg-background border border-border text-foreground">
                      • Angular Standalone
                    </span>
                    <span className="px-2.5 py-1 rounded bg-background border border-border text-foreground">
                      • SQL Server &amp; EF Core
                    </span>
                  </div>
                </div>
              </motion.section>
            )}

            {activeTab === "resilience" && (
              <motion.section
                key="resilience"
                id="korp-panel-resilience"
                role="tabpanel"
                aria-labelledby="korp-tab-resilience"
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
                    <span>Cenários de Contingência e Tolerância a Falhas</span>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-3">
                    Ao tentar fechar uma Nota Fiscal com o serviço de estoque indisponível, o sistema intercepta a falha de rede (<code>HttpRequestException</code>), preserva a nota com status <strong>&quot;Aberta&quot;</strong> para evitar inconsistências fiscais e responde com <strong>HTTP 503 (Service Unavailable)</strong>, com feedback visual claro no frontend.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <div className="p-2.5 rounded bg-background/60 border border-border">
                      <div className="font-mono font-bold text-[var(--cyan-badge-foreground)]">HTTP 503</div>
                      <div className="text-muted-foreground text-[11px]">Tratamento de Indisponibilidade</div>
                    </div>
                    <div className="p-2.5 rounded bg-background/60 border border-border">
                      <div className="font-mono font-bold text-[var(--green-badge-foreground)]">Status Aberta</div>
                      <div className="text-muted-foreground text-[11px]">Integridade Contábil Garantida</div>
                    </div>
                    <div className="p-2.5 rounded bg-background/60 border border-border">
                      <div className="font-mono font-bold text-[var(--violet-badge-foreground)]">100% Validado</div>
                      <div className="text-muted-foreground text-[11px]">Demonstrado em Vídeo Demo</div>
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
