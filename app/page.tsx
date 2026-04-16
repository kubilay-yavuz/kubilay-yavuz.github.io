import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import Experience from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Kubilay Yavuz | Senior Data Scientist & AI Builder",
  description:
    "Senior Data Scientist building production AI systems and agentic workflows. LLM applications, computer vision, and end-to-end ML deployment.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Aurora background */}
      <div className="aurora-bg">
        <div className="aurora-orb-3" />
      </div>

<div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <TechStack />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}
