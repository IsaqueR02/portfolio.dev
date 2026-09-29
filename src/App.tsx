import { lazy, Suspense } from "react"
import { Navbar } from "@/features/navbar/navbar"
import { HeroSection } from "@/features/hero/hero-section"
import { ContactSection } from "@/features/contact/contact-section"

const ProjectsSection = lazy(() =>
  import("@/features/projects/projects-section").then(({ ProjectsSection }) => ({
    default: ProjectsSection,
  }))
)

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <Suspense
          fallback={
            <section
              id="projetos"
              aria-busy="true"
              aria-label="Carregando projetos"
              className="mx-auto flex min-h-[40vh] w-full max-w-6xl items-center justify-center px-4 py-20 sm:px-6"
            >
              <p role="status" aria-live="polite" className="text-sm text-muted-foreground">
                Carregando projetos...
              </p>
            </section>
          }
        >
          <ProjectsSection />
        </Suspense>
        <ContactSection />
      </main>
    </div>
  )
}

export default App