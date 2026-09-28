import { Terminal } from "lucide-react"

export function HeroBadge() {
  return (
    <div className="flex flex-col items-center">
      {/* Availability Status Badge */}
      <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border border-green-status/30 bg-green-accent-subtle text-[var(--green-badge-foreground)] text-xs font-mono select-none">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-status opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-status"></span>
        </span>
        <span>Disponível para novos desafios & projetos</span>
      </div>

      {/* Main Name & Identity */}
      <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
        <Terminal className="size-3.5 text-cyan-accent" />
        <span>Isaque Zulato • Software Engineer</span>
      </div>
    </div>
  )
}
