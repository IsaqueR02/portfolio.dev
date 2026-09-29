import * as React from "react"
import { Eye } from "lucide-react"
import { motion, useReducedMotion } from "motion/react"
import { buttonVariants } from "@/shared/ui/button"
import { Badge } from "@/shared/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/ui/dialog"

export interface ProjectDialogProps {
  badge: string
  secondaryBadge?: string
  title: string
  description: string
  triggerText?: string
  children: React.ReactNode
  triggerVariant?: "default" | "secondary" | "outline" | "ghost" | "link" | "scifi"
  triggerSize?: "default" | "sm" | "lg" | "icon"
  maxWidth?: string
}

export function ProjectDialog({
  badge,
  secondaryBadge,
  title,
  description,
  triggerText = "Detalhes Rápidos",
  children,
  triggerVariant = "outline",
  triggerSize = "sm",
  maxWidth = "max-w-3xl",
}: ProjectDialogProps) {
  const shouldReduceMotion = useReducedMotion() ?? false

  return (
    <Dialog>
      <DialogTrigger asChild>
        <motion.button
          type="button"
          whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          whileFocus={shouldReduceMotion ? undefined : { scale: 1.01 }}
          transition={{ duration: 0.15 }}
          className={buttonVariants({ variant: triggerVariant, size: triggerSize })}
        >
          <Eye className="size-3.5" />
          {triggerText}
        </motion.button>
      </DialogTrigger>
      <DialogContent className={`${maxWidth} max-h-[85vh] overflow-y-auto`}>
        <DialogHeader>
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary">{badge}</Badge>
            {secondaryBadge && <Badge variant="secondary">{secondaryBadge}</Badge>}
          </div>
          <DialogTitle className="text-xl sm:text-2xl pt-2">
            {title}
          </DialogTitle>
          <DialogDescription>
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 pt-2 text-sm text-muted-foreground">
          {children}
        </div>
      </DialogContent>
    </Dialog>
  )
}
