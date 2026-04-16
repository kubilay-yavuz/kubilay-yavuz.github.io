"use client"

import { useState, useEffect } from "react"
import { Menu, X, Download } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const handleDownloadCV = (e: React.MouseEvent) => {
    e.preventDefault()
    const link = document.createElement("a")
    link.href = "/Kubilay_Yavuz_CV.pdf"
    link.download = "Kubilay_Yavuz_CV.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Experience", href: "experience" },
    { name: "Tech Stack", href: "tech-stack" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled ? "glass-navbar" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="font-heading text-xl font-bold"
          >
            <span className="text-cyan-400">Kubilay</span>
            <span className="text-white">Yavuz</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="font-body text-sm text-slate-400 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
            <button
              onClick={handleDownloadCV}
              className="glass-button-primary font-heading text-sm font-semibold text-white px-5 py-2 rounded-xl flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Resume
            </button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden glass p-2 rounded-xl text-slate-300 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden glass-navbar border-t border-white/8">
          <div className="container mx-auto px-6 py-4">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="font-body text-sm text-slate-400 hover:text-white transition-colors py-2.5 text-left px-2 rounded-lg hover:bg-white/5"
                >
                  {link.name}
                </button>
              ))}
              <div className="pt-2">
                <button
                  onClick={handleDownloadCV}
                  className="glass-button-primary w-full font-heading text-sm font-semibold text-white px-5 py-2.5 rounded-xl flex items-center justify-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  Resume
                </button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
