"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, MapPin, Calendar } from "lucide-react"

export default function Experience() {
  const [expanded, setExpanded] = useState<number | null>(0)

  const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  }

  const experiences = [
    {
      id: 0,
      company: "McKinsey & Company",
      position: "Senior Data Scientist",
      period: "Feb 2022 – Present",
      location: "London, United Kingdom",
      color: "from-amber-500/20 to-amber-500/5",
      border: "border-amber-500/20",
      dot: "bg-amber-400",
      achievements: [
        "Built an LLM workflow to interpret legacy property deeds and store structured outputs in PostgreSQL. Led 2 engineers to deliver backend and appraiser dashboard.",
        "Led end-to-end data platform migration for 2 clients — medallion architecture, Power BI dashboards for business users. Led team of 4 engineers through development and deployment.",
        "Built elasticity-based pricing engine transitioned to production — contributing to 118% quarterly realised margin improvement.",
        "Led geospatial analytics, footprint optimisation, M&A opportunity modelling, and mixed-integer optimisation for cost reduction across retail and PE clients.",
      ],
      stack: ["Python", "SQL", "PySpark", "Databricks", "Azure", "Power BI", "LLMs", "PostgreSQL", "Operations Research"],
    },
    {
      id: 1,
      company: "INFARM",
      position: "Data Analyst",
      period: "Jul 2021 – Feb 2022",
      location: "Berlin, Germany",
      color: "from-orange-500/20 to-orange-500/5",
      border: "border-orange-500/20",
      dot: "bg-orange-400",
      achievements: [
        "Designed and built 5 centralised dashboards for account managers — standardised manual work using Python, SQL, Airflow. Human hours spent decreased by ~70%.",
        "Architected end-to-end CRM data migration pipeline from Zoho to Salesforce across 5 countries. Built Flask-based frontend eliminating 3 days of manual reconciliation per cycle.",
      ],
      stack: ["Python", "SQL", "Airflow", "Looker", "Flask", "Salesforce"],
    },
    {
      id: 2,
      company: "GETIR",
      position: "Data Scientist",
      period: "Feb 2020 – Jul 2021",
      location: "Istanbul, Turkey",
      color: "from-amber-500/15 to-amber-500/5",
      border: "border-amber-500/15",
      dot: "bg-amber-300",
      achievements: [
        "Built end-to-end ML campaign optimisation project. Published 3 Tableau dashboards, hours reduced from 30 to ~6, ~17pp increase in client engagement.",
        "Developed and productionised ensemble pricing engine combining ML, operations research, and Bayesian models across 32+ product categories via internal APIs.",
        "Built warehouse optimisation system using mixed-integer programming and TSP routing, applied across 7 warehouses — reduced pick-and-pack time by ~20%.",
      ],
      stack: ["Python", "SQL", "Amazon Redshift", "AWS", "Tableau", "LightGBM", "Operations Research"],
    },
  ]

  const entrepreneurial = [
    {
      title: "QApture Ops",
      role: "Co-founder",
      period: "2025 – Present",
      desc: "Production AI platform for automated QA testing of mobile games. Multimodal agentic workflow using OpenCV/YOLO, PaddleOCR, GPT-4/Gemini on Android/iOS. FastAPI + Celery + Supabase + Docker on GCP. Built the customer-facing Next.js dashboard.",
      tags: ["FastAPI", "Celery", "OpenCV", "YOLO", "PaddleOCR", "GPT-4", "Next.js", "Supabase", "GCP", "Docker"],
      color: "from-amber-500/15 to-transparent",
      border: "border-amber-500/20",
    },
    {
      title: "Eminence Games",
      role: "Co-founder",
      period: "2024 – Present",
      desc: "Designed and published multiple mobile games and apps on iOS/Android. Responsible for gameplay systems, analytics, and economy design.",
      tags: ["Unity", "C#", "iOS", "Android", "Game Design"],
      color: "from-orange-500/15 to-transparent",
      border: "border-orange-500/20",
    },
    {
      title: "TripSorter",
      role: "Builder",
      period: "2024",
      desc: "AI-powered travel planning app generating dynamic, multi-day itineraries using LLM agentic workflows with external tools for routing, weather, and local logistics.",
      tags: ["React Native", "Supabase", "LLM Agents", "Python"],
      color: "from-amber-500/15 to-transparent",
      border: "border-amber-500/15",
    },
  ]

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="gradient-orb gradient-orb-accent w-80 h-80 top-40 -right-40" />
      <div className="gradient-orb gradient-orb-primary w-72 h-72 bottom-20 -left-36" />

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
            Experience
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">Professional Experience</h2>
          <div className="accent-line" />
        </motion.div>

        {/* Professional Experience */}
        <div className="space-y-4 mb-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <div className={`glass-card rounded-2xl border ${exp.border} overflow-hidden`}>
                <button
                  className="w-full p-6 flex items-start justify-between gap-4 cursor-pointer text-left"
                  onClick={() => setExpanded(expanded === exp.id ? null : exp.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-3 h-3 rounded-full mt-1.5 flex-shrink-0 ${exp.dot}`} />
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="font-heading font-bold text-white text-lg">{exp.company}</h3>
                        <span className="font-body text-sm text-slate-400">·</span>
                        <span className="font-heading font-medium text-slate-300 text-sm">{exp.position}</span>
                      </div>
                      <div className="flex flex-wrap gap-4 text-xs text-slate-500 font-body">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 flex-shrink-0 mt-1 transition-transform duration-300 ${
                      expanded === exp.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {expanded === exp.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <div className={`h-px w-full bg-gradient-to-r ${exp.color} mb-4`} />
                        <ul className="space-y-2.5 mb-5">
                          {exp.achievements.map((ach, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-sm text-slate-400 font-body leading-relaxed"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-2 flex-shrink-0" />
                              {ach}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          {exp.stack.map((s) => (
                            <span
                              key={s}
                              className="skill-pill text-xs px-3 py-1 rounded-full text-slate-400 font-body"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Entrepreneurial */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-10"
        >
          <span className="inline-block px-4 py-1.5 rounded-full glass text-orange-400 text-sm font-medium font-heading mb-4 border border-orange-400/20">
            Founded
          </span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-white">Entrepreneurial Experience</h2>
          <div className="accent-line" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {entrepreneurial.map((item, i) => (
            <motion.div
              key={item.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              variants={fadeIn}
            >
              <div className={`glass-card rounded-2xl p-6 border ${item.border} h-full`}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-heading font-bold text-white">{item.title}</h3>
                    <p className="font-body text-sm text-slate-400">
                      {item.role} · {item.period}
                    </p>
                  </div>
                </div>
                <p className="font-body text-sm text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {item.tags.map((t) => (
                    <span key={t} className="skill-pill text-xs px-2.5 py-1 rounded-full text-slate-500 font-body">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
