import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Textarea } from "@/shared/ui/textarea"
import { Badge } from "@/shared/ui/badge"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setStatus("sending")
    // Simulação de envio com UX responsiva
    setTimeout(() => {
      setStatus("sent")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setStatus("idle"), 5000)
    }, 1000)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm space-y-4"
    >
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-foreground text-lg">
          Envie uma Mensagem
        </h3>
        <Badge variant="cyan" className="font-mono text-[10px]">
          API Ready
        </Badge>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <label
            htmlFor="contact-name"
            className="text-xs font-medium text-muted-foreground"
          >
            Seu Nome *
          </label>
          <Input
            id="contact-name"
            type="text"
            placeholder="Ex: Carlos Silva"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />
        </div>

        <div className="space-y-1.5">
          <label
            htmlFor="contact-email"
            className="text-xs font-medium text-muted-foreground"
          >
            Seu E-mail *
          </label>
          <Input
            id="contact-email"
            type="email"
            placeholder="Ex: carlos@empresa.com"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="contact-subject"
          className="text-xs font-medium text-muted-foreground"
        >
          Assunto
        </label>
        <Input
          id="contact-subject"
          type="text"
          placeholder="Ex: Proposta de Projeto / Oportunidade .NET"
          value={formData.subject}
          onChange={(e) =>
            setFormData({ ...formData, subject: e.target.value })
          }
        />
      </div>

      <div className="space-y-1.5">
        <label
          htmlFor="contact-message"
          className="text-xs font-medium text-muted-foreground"
        >
          Mensagem *
        </label>
        <Textarea
          id="contact-message"
          rows={4}
          placeholder="Descreva seu projeto, desafio técnico ou objetivo..."
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="scifi"
          size="lg"
          className="w-full justify-center"
          disabled={status === "sending" || status === "sent"}
        >
          {status === "sending" ? (
            <span className="flex items-center gap-2">
              <span className="size-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
              Enviando...
            </span>
          ) : status === "sent" ? (
            <span className="flex items-center gap-2 text-slate-950 font-bold">
              <CheckCircle2 className="size-4" />
              Mensagem Enviada com Sucesso!
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="size-4" />
              Enviar Mensagem
            </span>
          )}
        </Button>
      </div>
    </form>
  )
}
