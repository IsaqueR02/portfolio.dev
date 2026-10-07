import { memo } from "react"
import { HeroSection } from "../hero/hero-section"
import { ProjectsSection } from "../projects/projects-section"
import { AboutSection } from "../aboutMe/about-section"
import { SkillsSection } from "../skills/skills-section"
import { ContactSection } from "../contact/contact-section"

/**
 * HomePage
 *
 * Container principal que orquestra as 5 seções sequenciais da Home Page
 * do portfólio de Desenvolvedor de Software .NET / Fullstack:
 *
 * 1. HeroSection: Apresentação principal com ParticlesBackground e DecryptedText.
 * 2. ProjectsSection: Vitrine de projetos com Adapty e SpotlightCard.
 * 3. AboutSection: Posicionamento profissional em Clean Architecture, DDD e IA aplicada.
 * 4. SkillsSection: Domínios técnicos organizados por badges sem métricas arbitrárias.
 * 5. ContactSection: Canais diretos (GitHub, LinkedIn, E-mail direto e Currículo PDF) e formulário.
 */
export const HomePage = memo(function HomePage() {
  return (
    <main className="flex-1 flex flex-col">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Projetos em Destaque */}
      <ProjectsSection />

      {/* 3. About / Posicionamento */}
      <AboutSection />

      {/* 4. Stack / Skills */}
      <SkillsSection />

      {/* 5. Contact / Canais Diretos */}
      <ContactSection />
    </main>
  )
})

export default HomePage
