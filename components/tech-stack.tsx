"use client"

import { motion } from "framer-motion"
import { BrainCircuit, Server, Database, Code2, Gamepad2 } from "lucide-react"

export default function TechStack() {
  const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  const categories = [
    {
      key: "ai",
      icon: BrainCircuit,
      title: "AI / ML",
      description: "LLMs, agentic workflows, computer vision, classical ML",
      iconColor: "text-cyan-400",
      iconBg: "from-cyan-500/20 to-cyan-500/5",
      border: "border-cyan-500/20",
      skills: [
        "LLMs (OpenAI, Claude, Gemini)",
        "Agentic Workflows",
        "Computer Vision (OpenCV, YOLO)",
        "OCR (PaddleOCR)",
        "PyTorch",
        "TensorFlow",
        "scikit-learn",
        "LightGBM",
        "XGBoost",
        "Operations Research",
        "MCP Development",
      ],
    },
    {
      key: "backend",
      icon: Server,
      title: "Backend & Infrastructure",
      description: "APIs, distributed systems, cloud, MLOps",
      iconColor: "text-violet-400",
      iconBg: "from-violet-500/20 to-violet-500/5",
      border: "border-violet-500/20",
      skills: [
        "Python",
        "FastAPI",
        "Celery",
        "Docker",
        "GCP",
        "AWS",
        "Azure",
        "PostgreSQL",
        "Supabase",
        "Git",
        "CI/CD",
        "MLOps",
      ],
    },
    {
      key: "data",
      icon: Database,
      title: "Data Engineering",
      description: "SQL, pipelines, warehousing, BI tools",
      iconColor: "text-blue-400",
      iconBg: "from-blue-500/20 to-blue-500/5",
      border: "border-blue-500/20",
      skills: [
        "SQL",
        "PySpark",
        "Databricks",
        "Airflow",
        "PostGIS",
        "Amazon Redshift",
        "Power BI",
        "Tableau",
        "Looker",
      ],
    },
    {
      key: "other",
      icon: Code2,
      title: "Frontend & Other",
      description: "Web, mobile, game development",
      iconColor: "text-emerald-400",
      iconBg: "from-emerald-500/20 to-emerald-500/5",
      border: "border-emerald-500/20",
      skills: ["Next.js", "React", "React Native", "Flask", "Unity", "C#", "iOS", "Android"],
    },
  ]

  return (
    <section id="tech-stack" className="py-24 relative overflow-hidden">
      <div className="gradient-orb gradient-orb-accent w-72 h-72 top-20 -left-36" />
      <div className="gradient-orb gradient-orb-primary w-96 h-96 bottom-20 -right-48" />

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
            Skills
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">Technical Expertise</h2>
          <div className="accent-line" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={scaleUp}
            >
              <div className={`glass-card rounded-2xl p-6 border ${cat.border} h-full`}>
                <div className="flex items-center gap-4 mb-5">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${cat.iconBg} border ${cat.border}`}>
                    <cat.icon className={`h-6 w-6 ${cat.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold text-white">{cat.title}</h3>
                    <p className="text-slate-500 text-sm font-body">{cat.description}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-pill tag-glow text-xs px-3 py-1.5 rounded-full text-slate-300 font-body"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          variants={fadeIn}
          className="mt-10 text-center"
        >
          <p className="max-w-2xl mx-auto text-slate-500 font-body text-sm leading-relaxed">
            From mathematical modelling to production deployment — I work across the full AI stack, with a focus on
            shipping systems that generate measurable business impact.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
