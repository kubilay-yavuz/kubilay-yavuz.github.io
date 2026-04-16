"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { toast } from "@/components/ui/use-toast"
import { MapPin, Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch("https://formspree.io/f/f.kubilay.yavuz@gmail.com", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        })
        form.reset()
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      value: "London, United Kingdom",
      link: null,
      iconColor: "text-amber-400",
      iconBg: "from-amber-500/20 to-amber-500/5",
      border: "border-amber-500/20",
    },
    {
      icon: Mail,
      title: "Email",
      value: "f.kubilay.yavuz@gmail.com",
      link: "mailto:f.kubilay.yavuz@gmail.com",
      iconColor: "text-orange-400",
      iconBg: "from-orange-500/20 to-orange-500/5",
      border: "border-orange-500/20",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+44 7551 109127",
      link: "tel:+447551109127",
      iconColor: "text-amber-300",
      iconBg: "from-amber-500/15 to-amber-500/5",
      border: "border-amber-500/15",
    },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="gradient-orb gradient-orb-primary w-96 h-96 -top-48 -right-48" />
      <div className="gradient-orb gradient-orb-accent w-72 h-72 bottom-20 -left-36" />

      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-amber-400 text-sm font-medium font-heading mb-4 border border-amber-400/20">
            Contact
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <div className="accent-line" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
            className="lg:col-span-2"
          >
            <div className="glass-card rounded-2xl p-6 border border-white/10">
              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="_subject" value="Contact request from portfolio website" />

                <div className="space-y-1.5">
                  <label htmlFor="name" className="font-heading text-sm font-medium text-slate-300">
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="glass-input w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 font-body outline-none focus:border-amber-400/40 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email" className="font-heading text-sm font-medium text-slate-300">
                    Your Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="glass-input w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 font-body outline-none focus:border-amber-400/40 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="font-heading text-sm font-medium text-slate-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="I'd like to discuss a project..."
                    rows={6}
                    required
                    className="glass-input w-full rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 font-body outline-none focus:border-amber-400/40 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="glass-button-primary w-full font-heading font-semibold text-white px-8 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact info sidebar */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            variants={fadeIn}
          >
            <div className="space-y-4">
              {contactInfo.map((info) => (
                <div key={info.title} className={`glass-card rounded-2xl p-5 border ${info.border}`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-br ${info.iconBg} border ${info.border}`}>
                      <info.icon className={`h-5 w-5 ${info.iconColor}`} />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-white text-sm mb-1">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-slate-400 hover:text-white transition-colors font-body text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-slate-400 font-body text-sm">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {/* Social links */}
              <div className="glass-card rounded-2xl p-5 border border-white/10">
                <h4 className="font-heading font-semibold text-white mb-4 text-sm">Connect With Me</h4>
                <div className="flex flex-col gap-3">
                  <a
                    href="https://linkedin.com/in/f-kubilay-yavuz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass px-4 py-2.5 rounded-xl flex items-center gap-3 text-sm text-slate-300 hover:text-white hover:border-white/25 transition-all duration-300 font-body"
                  >
                    <Linkedin className="h-4 w-4 text-amber-400" />
                    linkedin.com/in/f-kubilay-yavuz
                  </a>
                  <a
                    href="https://github.com/kubilay-yavuz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass px-4 py-2.5 rounded-xl flex items-center gap-3 text-sm text-slate-300 hover:text-white hover:border-white/25 transition-all duration-300 font-body"
                  >
                    <Github className="h-4 w-4 text-orange-400" />
                    github.com/kubilay-yavuz
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
