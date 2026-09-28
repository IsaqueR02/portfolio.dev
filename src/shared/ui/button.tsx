import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/shared/lib/utils"
import { Slot } from "radix-ui"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,transform] outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/50 active:not-aria-[haspopup]:brightness-95 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-sm transition-[color,background-color,border-color,box-shadow,transform] focus-visible:ring-ring",
        secondary:
          "border border-border/80 bg-secondary text-secondary-foreground hover:bg-muted/80 hover:text-foreground transition-[color,background-color,border-color,box-shadow,transform]",
        outline:
          "border border-border/80 bg-background/50 hover:bg-secondary/60 hover:text-foreground aria-expanded:bg-secondary transition-[color,background-color,border-color,box-shadow,transform]",
        ghost:
          "hover:bg-secondary/60 hover:text-foreground aria-expanded:bg-secondary transition-[color,background-color,border-color,box-shadow,transform]",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
        scifi:
          "bg-[var(--cyan-accent)] text-[var(--scifi-foreground)] font-semibold hover:bg-[color-mix(in_srgb,var(--cyan-accent)_90%,transparent)] shadow-[0_0_14px_var(--brand-glow-shadow)] hover:shadow-[0_0_20px_var(--brand-glow-shadow)] border border-[color-mix(in_srgb,var(--cyan-accent)_60%,transparent)] transition-[color,background-color,border-color,box-shadow,transform]",
        neon:
          "border-[color-mix(in_srgb,var(--cyan-accent)_40%,transparent)] bg-cyan-accent-subtle text-[var(--cyan-badge-foreground)] hover:bg-[color-mix(in_srgb,var(--cyan-accent)_20%,transparent)] hover:border-[color-mix(in_srgb,var(--cyan-accent)_70%,transparent)] transition-[color,background-color,border-color,box-shadow,transform]",
      },
      size: {
        default:
          "h-9 gap-2 px-4 py-2",
        xs:
          "h-6 gap-1 rounded-md px-2 text-xs in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        sm:
          "h-8 gap-1.5 rounded-md px-3 text-xs font-medium in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3.5",
        lg:
          "h-10 gap-2 rounded-lg px-5 text-sm font-semibold",
        icon:
          "size-9",
        "icon-sm":
          "size-7 rounded-md",
        "icon-lg":
          "size-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
