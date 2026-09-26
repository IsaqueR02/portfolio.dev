import { Navbar } from "@/features/navbar/navbar"
import { HeroSection } from "@/features/hero/hero-section"
import { ProjectsSection } from "@/features/projects/projects-section"
import { ContactSection } from "@/features/contact/contact-section"

export function App() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-cyan-500/20 selection:text-cyan-300">
      <Navbar />
      <main className="flex-1 flex flex-col">
        <HeroSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App