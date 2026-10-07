import * as React from "react"
import { Menu, FileText, Code2, Terminal, Briefcase, Mail } from "lucide-react"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { fadeIn } from "@/constants/animations"
import { Button } from "@/shared/ui/button"
import { ThemeToggle } from "@/features/theme/theme-toggle"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/shared/ui/sheet"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const shouldReduceMotion = useReducedMotion() ?? false

  const navLinks = [
    { name: "Início", href: "#hero", icon: Terminal },
    { name: "Projetos", href: "#projetos", icon: Briefcase },
    { name: "Sobre", href: "#sobre", icon: Code2 },
    { name: "Skills", href: "#skills", icon: FileText },
    { name: "Contato", href: "#contato", icon: Mail },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md transition-all">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2.5 font-mono text-sm tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md p-1"
        >
          <div className="flex size-8 items-center justify-center rounded-lg bg-cyan-accent-subtle border border-cyan-accent/30 text-cyan-accent group-hover:border-cyan-accent group-hover:shadow-[0_0_12px_var(--brand-glow-shadow)] transition-all">
            <Code2 className="size-4 text-cyan-accent" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-foreground flex items-center gap-1.5">
              ISAQUE<span className="text-cyan-accent">.DEV</span>
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3.5 py-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right side actions (Theme toggle + Resume CTA + Mobile hamburger) */}
        <div className="flex items-center gap-2.5">
          <ThemeToggle />

          <Button
            variant="scifi"
            size="sm"
            className="hidden sm:inline-flex"
            asChild
          >
            <a href="#hero">
              <FileText className="size-3.5" />
              <span>Currículo</span>
            </a>
          </Button>

          {/* Mobile Menu Drawer */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Abrir menu de navegação"
                >
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <AnimatePresence mode="wait">
                  {isOpen && (
                    <motion.div
                      key="mobile-navigation"
                      variants={fadeIn}
                      initial={shouldReduceMotion ? "reduced" : "hidden"}
                      animate={shouldReduceMotion ? "reduced" : "visible"}
                      exit={shouldReduceMotion ? "reduced" : "hidden"}
                      className="flex flex-col gap-4"
                    >
                      <SheetHeader className="text-left pb-4 border-b border-border/60">
                        <SheetTitle className="font-mono text-base flex items-center gap-2">
                          <Code2 className="size-4 text-cyan-accent" />
                          <span>Navegação</span>
                        </SheetTitle>
                      </SheetHeader>
                      <div className="flex flex-col gap-2 pt-2">
                        {navLinks.map((link) => {
                          const Icon = link.icon
                          return (
                            <button
                              key={link.name}
                              onClick={() => handleNavClick(link.href)}
                              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted hover:text-[var(--cyan-accent)] transition-colors text-left"
                            >
                              <Icon className="size-4 text-muted-foreground" />
                              <span>{link.name}</span>
                            </button>
                          )
                        })}
                        <div className="pt-4 mt-2 border-t border-border/60">
                          <Button
                            variant="scifi"
                            className="w-full justify-center"
                            asChild
                            onClick={() => setIsOpen(false)}
                          >
                            <a href="#hero">
                              <FileText className="size-4 mr-2" />
                              Baixar Currículo
                            </a>
                          </Button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
