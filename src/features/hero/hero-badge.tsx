import { Terminal } from "lucide-react"

export function HeroBadge() {
  return (
    <div className="flex flex-col items-center">
      {/* Availability Status Badge */}
      <div className="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono select-none">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span>Disponível para novos desafios & projetos</span>
      </div>

      {/* Main Name & Identity */}
      <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-muted-foreground uppercase mb-2">
        <Terminal className="size-3.5 text-cyan-500 dark:text-cyan-400" />
        <span>Isaque Zulato • Software Engineer</span>
      </div>
    </div>
  )
}
