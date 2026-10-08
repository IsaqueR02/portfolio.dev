import {
  MapPin,
  Clock,
  Sparkles,
  MessageSquare,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react"
import { SiGithub } from "react-icons/si"
import { FaLinkedin } from "react-icons/fa"
import { Button } from "@/shared/ui/button"
import { ContactForm } from "./contact-form"

export function ContactSection() {
  return (
    <section id="contato" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto border-t border-border/60">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[var(--cyan-badge-foreground)] uppercase mb-2">
          <MessageSquare className="size-3.5" />
          <span>Vamos Conversar</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-foreground">
          Entre em Contato
        </h2>
        <p className="text-sm sm:text-base text-muted-foreground max-w-xl mt-2">
          Disponível para oportunidades em desenvolvimento .NET, C++, Fullstack ou suporte técnico. Envie sua mensagem pelo formulário ou conecte-se nas redes profissionais.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info & Links */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm space-y-6">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Sparkles className="size-4 text-cyan-accent" />
              Canais Oficiais
            </h3>

            <div className="space-y-4 text-sm">
              {/* Comunicação Segura */}
              <div className="flex items-start gap-3">
                <div className="size-9 rounded-lg bg-cyan-accent-subtle border border-cyan-accent/20 flex items-center justify-center text-cyan-accent shrink-0">
                  <ShieldCheck className="size-4" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Comunicação Segura</div>
                  <div className="font-medium text-foreground">Mensagem Direta via Formulário</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Envie os detalhes da vaga ou projeto pelo formulário ao lado
                  </div>
                </div>
              </div>

              {/* Localização */}
              <div className="flex items-start gap-3">
                <div className="size-9 rounded-lg bg-cyan-accent-subtle border border-cyan-accent/20 flex items-center justify-center text-cyan-accent shrink-0">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Localização &amp; Modelo</div>
                  <div className="font-medium text-foreground">Contagem - MG, Brasil</div>
                  <div className="text-xs text-muted-foreground mt-0.5">
                    Disponível para Remoto • Híbrido • Presencial
                  </div>
                </div>
              </div>

              {/* Tempo de Resposta */}
              <div className="flex items-start gap-3">
                <div className="size-9 rounded-lg bg-cyan-accent-subtle border border-cyan-accent/20 flex items-center justify-center text-cyan-accent shrink-0">
                  <Clock className="size-4" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Status de Resposta</div>
                  <div className="font-medium text-foreground">Retorno em &lt; 24h</div>
                </div>
              </div>

              {/* Inclusão / PCD */}
              <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/60">
                <HeartHandshake className="size-4 text-cyan-500 shrink-0 mt-0.5" />
                <div className="text-xs text-muted-foreground">
                  <strong className="text-foreground">Vaga Afirmativa / PCD:</strong> CID-10 F84 / CID-11 6A02 (TEA &amp; TDAH). Aberto a oportunidades Júnior, Trainee, Suporte N2 e QA.
                </div>
              </div>
            </div>

            {/* Direct Social Links */}
            <div className="pt-4 border-t border-border/60 flex flex-col gap-2.5">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Perfis Profissionais
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://www.linkedin.com/in/isaquezulato-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5"
                  >
                    <FaLinkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </Button>

                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://github.com/IsaqueR02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5"
                  >
                    <SiGithub size={16} />
                    <span>GitHub</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
