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
  title: "Kubilay Yavuz | Portfolio",
  description: "Professional portfolio of Kubilay Yavuz - Data Scientist, Project Manager, Consultant",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Debug image to verify it's loading correctly */}
      <div className="fixed top-0 right-0 p-2 z-50 hidden">
        <img src="/images/kubilay-profile.png" alt="Debug" className="w-16 h-16 rounded-full border-2 border-red-500" />
      </div>

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
  )
}
