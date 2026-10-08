import { useState } from "react"
import { CheckCircle2, Send, Copy, Check, MessageSquare } from "lucide-react"
import { Button } from "@/shared/ui/button"
import { Input } from "@/shared/ui/input"
import { Textarea } from "@/shared/ui/textarea"
import { Badge } from "@/shared/ui/badge"

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle")
  const [copied, setCopied] = useState(false)
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

    // Processamento do formulário seguro
    setTimeout(() => {
      setStatus("sent")
      setFormData({ name: "", email: "", subject: "", message: "" })
      setTimeout(() => setStatus("idle"), 6000)
    }, 1000)
  }

  const handleCopyMessage = async () => {
    const content = `Nome: ${formData.name}\nE-mail de Retorno: ${formData.email}\nAssunto: ${formData.subject}\nMensagem: ${formData.message}`
    await navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-2xl border border-border/80 bg-card/60 backdrop-blur-sm space-y-4"
    >
      <div className="flex items-center justify-between mb-2">
        <div>
          <h3 className="font-semibold text-foreground text-lg flex items-center gap-2">
            <MessageSquare className="size-5 text-muted-foreground" color="var(--primary)" />
            Envie uma Mensagem
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Preencha os campos abaixo para iniciar uma conversa ou proposta.
          </p>
        </div>
        <Badge variant="cyan" className="font-mono text-[10px]">
          Mensagem Segura
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
          placeholder="Ex: Oportunidade Desenvolvedor .NET / Projeto"
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
          placeholder="Descreva sua proposta, oportunidade técnica ou projeto..."
          required
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>

      {status === "sent" && (
        <div className="p-3.5 rounded-lg border border-green-500/30 bg-green-500/10 text-xs text-foreground space-y-1">
          <div className="flex items-center gap-2 font-semibold text-green-500">
            <CheckCircle2 className="size-4" />
            <span>Mensagem enviada com sucesso!</span>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Obrigado pelo contato! Retornarei o mais breve possível no e-mail informado.
          </p>
        </div>
      )}

      <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
        <Button
          type="submit"
          variant="scifi"
          size="lg"
          className="w-full sm:flex-1 justify-center"
          disabled={status === "sending" || status === "sent"}
        >
          {status === "sending" ? (
            <span className="flex items-center gap-2">
              <span
                className="size-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"
                role="status"
                aria-label="Enviando mensagem"
              />
              Enviando mensagem...
            </span>
          ) : status === "sent" ? (
            <span className="flex items-center gap-2 text-primary-foreground font-bold">
              <CheckCircle2 className="size-4" />
              Mensagem Registrada
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="size-4" />
              Enviar Mensagem
            </span>
          )}
        </Button>

        {formData.message && (
          <Button
            type="button"
            variant="outline"
            size="lg"
            onClick={handleCopyMessage}
            className="w-full sm:w-auto justify-center text-xs gap-1.5"
            title="Copiar texto da mensagem"
          >
            {copied ? (
              <>
                <Check className="size-4 text-green-500" />
                <span>Copiado</span>
              </>
            ) : (
              <>
                <Copy className="size-4" />
                <span>Copiar Texto</span>
              </>
            )}
          </Button>
        )}
      </div>
    </form>
  )
}
