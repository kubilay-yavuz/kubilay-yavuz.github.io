"use client"

import { motion } from "framer-motion"
import { Brain, Rocket, Layers, GraduationCap, Award } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  }

  const highlights = [
    {
      icon: Brain,
      title: "Production AI Systems",
      desc: "LLM workflows, agentic pipelines, computer vision — deployed end-to-end, not just notebooks.",
      color: "from-cyan-500/20 to-cyan-500/5",
      border: "border-cyan-500/20",
      iconColor: "text-cyan-400",
    },
    {
      icon: Rocket,
      title: "Real Business Impact",
      desc: "118% margin improvement, 70% hour reduction, 20% pick-pack efficiency gains — at McKinsey, Getir, Infarm.",
      color: "from-violet-500/20 to-violet-500/5",
      border: "border-violet-500/20",
      iconColor: "text-violet-400",
    },
    {
      icon: Layers,
      title: "Full-Stack AI Delivery",
      desc: "From FastAPI backends and Celery workers to Next.js dashboards — I own the full stack.",
      color: "from-blue-500/20 to-blue-500/5",
      border: "border-blue-500/20",
      iconColor: "text-blue-400",
    },
    {
      icon: Award,
      title: "10+ Hackathon Awards",
      desc: "ING, SAP, Turkish Airlines, Euroleague — proven record of building fast under pressure.",
      color: "from-emerald-500/20 to-emerald-500/5",
      border: "border-emerald-500/20",
      iconColor: "text-emerald-400",
    },
  ]

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="gradient-orb gradient-orb-accent w-96 h-96 -top-48 -right-48" />
      <div className="gradient-orb gradient-orb-primary w-80 h-80 bottom-0 -left-40" />

      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-cyan-400 text-sm font-medium font-heading mb-4 border border-cyan-400/20">
            About Me
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">Who I Am</h2>
          <div className="accent-line" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="font-heading text-2xl font-bold mb-5 text-white">
              Senior Data Scientist building production AI
            </h3>
            <p className="text-slate-400 mb-5 leading-relaxed font-body">
              I&apos;m a{" "}
              <span className="text-white font-medium">Senior Data Scientist at McKinsey & Company</span> based in
              London. I specialise in deploying LLM-powered applications, agentic workflows, and machine learning systems
              end-to-end — with a strong focus on real-world delivery and client impact.
            </p>
            <p className="text-slate-400 mb-5 leading-relaxed font-body">
              Beyond consulting, I co-founded{" "}
              <span className="text-cyan-400 font-medium">QApture Ops</span> — a production AI platform for automated
              mobile game QA using multimodal agentic AI (OpenCV, YOLO, PaddleOCR, GPT-4). I also co-founded{" "}
              <span className="text-violet-400 font-medium">Eminence Games</span>, publishing mobile games and apps on
              iOS/Android.
            </p>
            <p className="text-slate-400 leading-relaxed font-body">
              I hold a BSc in Industrial Engineering from{" "}
              <span className="text-white font-medium">Bogazici University</span>, ranked in the{" "}
              <span className="text-cyan-400 font-medium">top 0.01%</span> nationally. I combine mathematical rigour
              with engineering pragmatism to ship things that work.
            </p>

            {/* Education card */}
            <div className="mt-8 glass-card rounded-2xl p-5 border border-white/10">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/20">
                  <GraduationCap className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-white">Bogazici University</p>
                  <p className="text-slate-400 text-sm font-body">BSc Industrial Engineering · 2015–2020</p>
                  <p className="text-cyan-400 text-sm font-body mt-1">Top 0.01% · National University Entrance Exam</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                variants={fadeIn}
              >
                <div className={`glass-card rounded-2xl p-5 border ${item.border} h-full cursor-default`}>
                  <div
                    className={`p-2.5 rounded-xl bg-gradient-to-br ${item.color} border ${item.border} w-fit mb-4`}
                  >
                    <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                  </div>
                  <h4 className="font-heading font-semibold text-white mb-2 text-sm">{item.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed font-body">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
