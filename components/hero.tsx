"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Github, Linkedin, Download, Mail } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [text, setText] = useState("")

  useEffect(() => {
    const titles = ["Senior Data Scientist", "AI Systems Builder", "Agentic Workflow Engineer", "Co-founder @ QApture"]
    let currentTitleIndex = 0
    let currentCharIndex = 0
    let isDeleting = false
    let typingSpeed = 80

    const typeWriter = () => {
      const currentTitle = titles[currentTitleIndex]
      if (isDeleting) {
        setText(currentTitle.substring(0, currentCharIndex - 1))
        currentCharIndex--
        typingSpeed = 40
      } else {
        setText(currentTitle.substring(0, currentCharIndex + 1))
        currentCharIndex++
        typingSpeed = 80
      }
      if (!isDeleting && currentCharIndex === currentTitle.length) {
        isDeleting = true
        typingSpeed = 1800
      }
      if (isDeleting && currentCharIndex === 0) {
        isDeleting = false
        currentTitleIndex = (currentTitleIndex + 1) % titles.length
      }
      setTimeout(typeWriter, typingSpeed)
    }

    const timerId = setTimeout(typeWriter, 500)
    return () => clearTimeout(timerId)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      window.scrollTo({ top: element.getBoundingClientRect().top + window.pageYOffset, behavior: "smooth" })
    }
  }

  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/Kubilay_Yavuz_CV.pdf"
    link.download = "Kubilay_Yavuz_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Section orbs */}
      <div className="gradient-orb gradient-orb-primary w-[600px] h-[600px] -top-32 -left-64" />
      <div className="gradient-orb gradient-orb-accent w-[400px] h-[400px] bottom-20 right-1/4" />

      {/* Profile image */}
      <div className="absolute right-0 top-0 h-full w-2/5 overflow-hidden hidden lg:block pointer-events-none">
        <div
          className="absolute inset-0 z-10"
          style={{ background: "linear-gradient(to right, #050816 0%, rgba(5,8,22,0.4) 40%, transparent 100%)" }}
        />
        <img
          src="/images/kubilay-profile.png"
          alt="Kubilay Yavuz"
          className="absolute right-0 h-full w-full object-cover object-top opacity-35"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-12">
        <div className="max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-sm text-cyan-400 font-medium border border-cyan-400/20"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Available for opportunities · London, UK
            </motion.div>

            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4 leading-tight tracking-tight">
              Hi, I&apos;m{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 glow-text">
                Kubilay Yavuz
              </span>
            </h1>

            <h2 className="font-heading text-xl md:text-2xl font-medium text-slate-300 mb-6 h-8">
              <span className="text-white">{text}</span>
              <span className="animate-blink text-cyan-400">|</span>
            </h2>

            <p className="text-base md:text-lg text-slate-400 mb-10 max-w-xl leading-relaxed font-body">
              Building production AI systems and agentic workflows. Deployed LLM-powered applications end-to-end at
              <span className="text-white font-medium"> McKinsey & Company</span>, with strong focus on real-world
              delivery and measurable client impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => scrollToSection("projects")}
                className="glass-button-primary text-white font-semibold px-8 py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer font-heading"
              >
                View My Work
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={handleDownloadCV}
                className="glass text-white font-semibold px-8 py-3 rounded-xl flex items-center justify-center gap-2 cursor-pointer hover:border-white/25 transition-all duration-300 font-heading"
              >
                <Download className="h-4 w-4" />
                Download CV
              </button>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/kubilay-yavuz"
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm text-slate-300 hover:text-white hover:border-white/25 transition-all duration-300 cursor-pointer font-body"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/f-kubilay-yavuz"
                target="_blank"
                rel="noopener noreferrer"
                className="glass px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm text-slate-300 hover:text-white hover:border-white/25 transition-all duration-300 cursor-pointer font-body"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href="mailto:f.kubilay.yavuz@gmail.com"
                className="glass px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm text-slate-300 hover:text-white hover:border-white/25 transition-all duration-300 cursor-pointer font-body"
              >
                <Mail className="h-4 w-4" />
                Email
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-xs text-slate-500 font-body tracking-widest uppercase">Scroll</span>
        <button onClick={() => scrollToSection("about")} className="scroll-indicator cursor-pointer">
          <ArrowRight className="h-5 w-5 text-slate-500 rotate-90" />
        </button>
      </div>
    </section>
  )
}
