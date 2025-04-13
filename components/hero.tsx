"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Download } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [text, setText] = useState("") // Start with empty string

  useEffect(() => {
    const titles = ["Data Scientist", "Project Manager", "Consultant"]
    let currentTitleIndex = 0
    let currentCharIndex = 0
    let isDeleting = false
    let typingSpeed = 80 // faster typing speed

    const typeWriter = () => {
      const currentTitle = titles[currentTitleIndex]

      if (isDeleting) {
        // Deleting text
        setText(currentTitle.substring(0, currentCharIndex - 1))
        currentCharIndex--
        typingSpeed = 50 // faster deletion
      } else {
        // Typing text
        setText(currentTitle.substring(0, currentCharIndex + 1))
        currentCharIndex++
        typingSpeed = 80
      }

      // If finished typing the word
      if (!isDeleting && currentCharIndex === currentTitle.length) {
        isDeleting = true
        typingSpeed = 800 // pause at the end of the word
      }

      // If finished deleting the word
      if (isDeleting && currentCharIndex === 0) {
        isDeleting = false
        currentTitleIndex = (currentTitleIndex + 1) % titles.length
      }

      setTimeout(typeWriter, typingSpeed)
    }

    const timerId = setTimeout(typeWriter, 500) // Initial delay

    return () => clearTimeout(timerId)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const handleDownloadCV = (e) => {
    // Create a temporary link element
    const link = document.createElement("a")
    link.href = "/Kubilay_Yavuz_CV.pdf"
    link.download = "Kubilay_Yavuz_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      {/* Profile image positioned on the right side */}
      <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background z-10"></div>
        <img
          src="/images/kubilay-profile.png"
          alt="Kubilay Yavuz"
          className="absolute right-0 h-full w-full object-cover object-right opacity-40"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Kubilay Yavuz</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground mb-6">
              <span className="text-foreground">{text}</span>
              <span className="animate-blink">|</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-xl">
              I leverage data science and optimization techniques to solve complex business problems and drive
              meaningful results. With expertise in machine learning, geospatial analysis, and pricing optimization, I
              help organizations make data-driven decisions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="group" onClick={() => scrollToSection("projects")}>
                View My Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" onClick={handleDownloadCV} className="flex items-center">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>

            <div className="flex gap-6">
              <Button variant="ghost" className="flex items-center gap-2 px-4" asChild>
                <a href="https://github.com/kubilay-yavuz" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span>GitHub</span>
                </a>
              </Button>
              <Button variant="ghost" className="flex items-center gap-2 px-4" asChild>
                <a href="https://linkedin.com/in/f-kubilay-yavuz" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span>LinkedIn</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <button onClick={() => scrollToSection("about")} className="animate-bounce">
          <ArrowRight className="h-6 w-6 transform rotate-90" />
        </button>
      </div>
    </section>
  )
}
