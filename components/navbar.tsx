"use client"

import { useState } from "react"
import { Menu, X, Download } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

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
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto max-w-5xl">
        <div className="flex h-14 items-center justify-between px-6 glass-navbar rounded-full">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="font-heading text-xl font-bold"
          >
            <span className="text-amber-400">Kubilay</span>
            <span className="text-white">Yavuz</span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-6 text-sm text-white/90 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="font-body hover:text-amber-400 transition-colors duration-200"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <button
              onClick={handleDownloadCV}
              className="glass-button-primary font-heading text-sm font-semibold px-6 py-2 rounded-lg flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Resume
            </button>
          </div>

          {/* Mobile Toggle */}
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
        <div className="md:hidden mt-2">
          <div className="container mx-auto max-w-5xl px-4">
            <div className="glass-navbar rounded-2xl px-6 py-4">
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
                    className="glass-button-primary w-full font-heading text-sm font-semibold px-5 py-2.5 rounded-xl flex items-center justify-center gap-2"
                  >
                    <Download className="h-4 w-4" />
                    Resume
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
