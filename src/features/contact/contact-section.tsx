import {
  Mail,
  FileText,
  MapPin,
  Clock,
  Sparkles,
  MessageSquare,
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
          Disponível para projetos desafiadores, engenharia de software .NET, desenvolvimento fullstack ou consultoria técnica.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Contact Info & Links */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm space-y-6">
            <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
              <Sparkles className="size-4 text-cyan-accent" />
              Canais Diretos
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <div className="size-9 rounded-lg bg-cyan-accent-subtle border border-cyan-accent/20 flex items-center justify-center text-cyan-accent shrink-0">
                  <Mail className="size-4" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">E-mail Profissional</div>
                  <a
                    href="mailto:isaque.r.zulato@outlook.com"
                    className="font-medium text-foreground hover:text-[var(--cyan-accent)] transition-colors"
                  >
                    isaque.dev@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-9 rounded-lg bg-cyan-accent-subtle border border-cyan-accent/20 flex items-center justify-center text-cyan-accent shrink-0">
                  <MapPin className="size-4" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Localização</div>
                  <div className="font-medium text-foreground">Brasil • Disponibilidade Remota Global</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="size-9 rounded-lg bg-cyan-accent-subtle border border-cyan-accent/20 flex items-center justify-center text-cyan-accent shrink-0">
                  <Clock className="size-4" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Status de Resposta</div>
                  <div className="font-medium text-foreground">Tempo médio de retorno &lt; 24h</div>
                </div>
              </div>
            </div>

            {/* Direct Social Links */}
            <div className="pt-4 border-t border-border/60 flex flex-col gap-2.5">
              <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Conexões
              </div>
              <div className="flex flex-wrap gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://www.github.com/IsaqueR02"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <SiGithub size={18} />
                    GitHub
                  </a>
                </Button>

                <Button variant="outline" size="sm" asChild>
                  <a
                    href="https://www.linkedin.com/in/isaquezulato-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={18} />
                    LinkedIn
                  </a>
                </Button>

                <Button variant="scifi" size="sm" asChild>
                  <a href="#hero">
                    <FileText className="size-3.5" />
                    Currículo PDF
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
