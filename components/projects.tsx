"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChevronDown, ExternalLink, Github, Database, Route, Zap, Plane, ShoppingBag, Target } from "lucide-react"

type Project = {
  id: number
  title: string
  shortDescription: string
  description: string
  useIcon: boolean
  icon?: React.ReactNode
  image?: string
  tags: string[]
  features: string[]
  fullDescription: string
  githubLink?: string
  demoLink?: string
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [expandedProject, setExpandedProject] = useState<number | null>(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  }

  const projects: Project[] = [
    {
      id: 0,
      title: "QApture Ops — AI-Powered Game QA Platform",
      shortDescription: "Production agentic AI for automated mobile game testing.",
      description:
        "Co-founded and built a production AI platform that autonomously plays and tests mobile games using computer vision, OCR, and LLM-powered decision-making.",
      useIcon: true,
      icon: <Zap className="h-10 w-10 text-cyan-400" />,
      tags: ["FastAPI", "Celery", "OpenCV", "YOLO", "PaddleOCR", "GPT-4", "Gemini", "Next.js", "Supabase", "GCP", "Docker"],
      features: [
        "Multimodal agentic workflow: perceives screen state via CV/OCR, selects actions via LLM tool use",
        "FastAPI agent orchestration API + Celery for distributed task execution",
        "Supabase for persistent state and auth, Docker containerised on GCP",
        "Customer-facing Next.js dashboard for test config, real-time session monitoring, automated reporting",
        "Structured test reports with annotated screenshots, bounding boxes, and failure summaries",
      ],
      fullDescription:
        "Co-founded QApture Ops and built the entire platform from scratch — a production AI system for automated QA testing of mobile games. The system uses a multimodal agentic workflow that autonomously plays and tests games on Android/iOS devices using computer vision (OpenCV, YOLO), OCR (PaddleOCR), and LLM-powered decision-making (GPT-4, Gemini). The agent operates in a reasoning loop: perceiving screen state via CV/OCR, selecting actions through LLM tool use, executing commands on remote devices, and generating structured test reports. Built the full backend infrastructure (FastAPI + Celery + Supabase + Docker on GCP) and the customer-facing Next.js dashboard.",
    },
    {
      id: 1,
      title: "Teknofest AI Competition",
      shortDescription: "3rd semi-finals, 5th finals — drone-footage vehicle detection.",
      description:
        "Participated in Teknofest AI Competition, achieving 3rd place in semi-finals and 5th in finals with a vehicle and pedestrian detection model.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e5Mhco9QAeAG23KAviuGd81yKhzN3x.png",
      useIcon: false,
      tags: ["Computer Vision", "Object Detection", "RetinaNet", "Ensemble Learning", "Drone Footage Analysis"],
      features: [
        "Development of object detection models for drone footage",
        "Implementation of RetinaNet architecture",
        "Ensemble of 3 RetinaNet models for improved accuracy",
        "Vehicle and pedestrian detection in aerial imagery",
        "Collaboration in a team environment with limited resources",
      ],
      githubLink: "https://github.com/kubilay-yavuz/teknofest-2019-tigersal",
      fullDescription:
        "Participated in the Teknofest Artificial Intelligence Competition with my teammate Burak under the name TigersAI. Without any advisor or sponsors, and using only Google Colab and Drive, we achieved 3rd place in the semi-finals and 5th place in the finals. The six-month competition concluded with a 5-day final stage. The objective was to detect vehicles and pedestrians from drone footage. Our solution comprised an ensemble of three RetinaNet models, which proved highly effective in the challenging aerial detection task.",
    },
    {
      id: 2,
      title: "Production Pricing Systems",
      shortDescription: "ML+OR+Bayesian ensemble pricing engine across 32+ categories.",
      description:
        "Developed and productionised multiple pricing engines combining machine learning, operations research, and Bayesian approaches.",
      useIcon: true,
      icon: <Target className="h-10 w-10 text-violet-400" />,
      tags: ["Python", "Operations Research", "Bayesian", "LightGBM", "Elasticity Modelling", "MLOps"],
      features: [
        "Elasticity-based pricing engine deployed at scale — 118% quarterly margin improvement",
        "Ensemble of ML, OR, and Bayesian models across 32+ product categories at Getir",
        "Productionised via internal APIs with monitoring and drift detection",
        "End-to-end ownership from modelling to production pipeline",
        "A/B testing frameworks to validate pricing interventions",
      ],
      fullDescription:
        "Built and deployed multiple production pricing systems across different companies. At McKinsey, built an elasticity-based pricing engine for an e-commerce client that contributed to 118% quarterly realised margin improvement. At Getir, developed and productionised an ensemble pricing engine combining gradient boosting (LightGBM), operations research constraints, and Bayesian inference across 32+ product categories. Both systems were deployed via production APIs with real-time monitoring and automated retraining pipelines.",
    },
    {
      id: 3,
      title: "Warehouse Optimisation System",
      shortDescription: "MIP + TSP routing across 7 warehouses — 20% pick-pack time reduction.",
      description:
        "Built a warehouse optimisation system using mixed-integer programming and TSP routing applied across 7 warehouses.",
      useIcon: true,
      icon: <Route className="h-10 w-10 text-blue-400" />,
      tags: ["Python", "Operations Research", "Mixed-Integer Programming", "TSP", "Optimisation"],
      features: [
        "Mixed-integer programming for shelf assignment and item placement",
        "Travelling Salesman Problem routing for pick-path optimisation",
        "Applied across 7 live warehouses in production",
        "~20% reduction in pick-and-pack time",
        "Constraints included SKU velocity, weight, and zone restrictions",
      ],
      fullDescription:
        "Built an end-to-end warehouse optimisation system at Getir, applied across 7 live warehouses. The system used mixed-integer programming (MIP) to determine optimal item placement across shelves based on velocity, weight constraints, and zone regulations. Combined with Travelling Salesman Problem (TSP) routing models to minimise picker travel distance. The deployed system reduced pick-and-pack time by approximately 20% across all warehouses, directly improving throughput and reducing fulfilment costs.",
    },
    {
      id: 4,
      title: "Turkish Airlines Travel Datathon",
      shortDescription: "Predicted passenger counts for two-legged flights — 93M row dataset.",
      description:
        "Developed predictive models for passenger counts on two-legged flights using a dataset of 93 million rows.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gNBzgJfoKnAgehH7GXiC9soiygIqnd.png",
      useIcon: false,
      tags: ["Big Data", "Catboost", "Keras", "Linear Regression", "Feature Engineering"],
      features: [
        "Analysis of massive dataset (93 million rows)",
        "Sampling techniques for big data",
        "Feature engineering for flight data",
        "Implementation of multiple modelling approaches",
        "Baseline creation with Linear Regression",
      ],
      githubLink: "https://github.com/kubilay-yavuz/TigersAI_Assessment_THY",
      fullDescription:
        "Participated in the Turkish Airlines Travel Datathon, where the challenge was to predict passenger counts for two-legged flights. The project involved working with a massive dataset containing 93 million rows, requiring effective sampling and big data handling techniques. Our approach included comprehensive feature engineering tailored to flight data, followed by the implementation of multiple modelling approaches including Catboost, Keras neural networks, and Linear Regression.",
    },
    {
      id: 5,
      title: "LLM-Based Deed Extraction System",
      shortDescription: "LLM workflow for property deed interpretation with structured PostgreSQL output.",
      description:
        "Built an LLM workflow to interpret legacy property deeds and store structured outputs, leading 2 engineers to deliver backend and appraiser dashboard.",
      useIcon: true,
      icon: <Database className="h-10 w-10 text-emerald-400" />,
      tags: ["Python", "LLMs", "PostgreSQL", "FastAPI", "Prompt Engineering", "Data Extraction"],
      features: [
        "LLM-powered parsing of unstructured legacy property deed documents",
        "Structured output schema design and PostgreSQL storage layer",
        "Led 2 engineers across backend and dashboard development",
        "Appraiser-facing dashboard for reviewing extracted data",
        "Confidence scoring and human-in-the-loop review workflow",
      ],
      fullDescription:
        "At McKinsey, designed and built an LLM-powered workflow for a real estate client to interpret legacy property deeds — unstructured legal documents spanning decades. The system used prompt engineering and structured output techniques to extract key fields (ownership, boundaries, easements, encumbrances) and store them in a PostgreSQL backend. Led a team of 2 engineers to build the extraction pipeline and an appraiser-facing dashboard for reviewing and correcting AI-extracted data. Included confidence scoring and a human-in-the-loop review layer for quality assurance.",
    },
  ]

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="gradient-orb gradient-orb-primary w-80 h-80 top-40 -left-40" />
      <div className="gradient-orb gradient-orb-accent w-96 h-96 bottom-40 -right-48" />

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
            Portfolio
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <div className="accent-line" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              variants={fadeIn}
            >
              <div
                className={`group h-full cursor-pointer glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                  expandedProject === project.id ? "border-cyan-500/30" : "border-white/10"
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                {/* Card header / image area */}
                <div className="relative overflow-hidden">
                  {project.useIcon ? (
                    <div className="w-full aspect-video bg-gradient-to-br from-white/5 to-white/[0.02] flex items-center justify-center">
                      {project.icon}
                    </div>
                  ) : (
                    <div className="w-full aspect-video overflow-hidden">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/95 via-[#050816]/40 to-transparent p-5 flex flex-col justify-end">
                    <h3 className="font-heading text-base font-bold mb-1 text-white leading-snug">{project.title}</h3>
                    <p className="text-slate-400 text-xs mb-3 font-body">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="skill-pill text-xs px-2.5 py-0.5 rounded-full text-slate-400 font-body"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="skill-pill text-xs px-2.5 py-0.5 rounded-full text-slate-500 font-body">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Expanded content */}
                <AnimatePresence>
                  {expandedProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 border-t border-white/8">
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="skill-pill text-xs px-2.5 py-1 rounded-full text-slate-400 font-body"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="space-y-1.5 mb-4">
                          <h4 className="font-heading font-semibold text-white text-sm">Key Features</h4>
                          <ul className="space-y-1.5">
                            {project.features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-xs text-slate-400 font-body leading-relaxed"
                              >
                                <span className="w-1 h-1 rounded-full bg-slate-600 mt-1.5 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex gap-3 pt-1">
                          {project.githubLink && (
                            <button
                              className="glass px-4 py-1.5 rounded-lg flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-all font-body"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.githubLink, "_blank")
                              }}
                            >
                              <Github className="h-3.5 w-3.5" />
                              Code
                            </button>
                          )}
                          {project.demoLink && (
                            <button
                              className="glass-button-primary px-4 py-1.5 rounded-lg flex items-center gap-1.5 text-xs text-white transition-all font-body"
                              onClick={(e) => {
                                e.stopPropagation()
                                window.open(project.demoLink, "_blank")
                              }}
                            >
                              <ExternalLink className="h-3.5 w-3.5" />
                              Demo
                            </button>
                          )}
                          <button
                            className="glass px-4 py-1.5 rounded-lg flex items-center gap-1.5 text-xs text-slate-300 hover:text-white transition-all font-body"
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedProject(project)
                            }}
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="p-3 text-center border-t border-white/5">
                  <ChevronDown
                    className={`w-4 h-4 mx-auto text-slate-600 transition-transform duration-300 ${
                      expandedProject === project.id ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl glass-card border-white/15 bg-[#080d20]/95 backdrop-blur-2xl">
            <DialogHeader>
              <DialogTitle className="font-heading text-white text-xl">{selectedProject.title}</DialogTitle>
              <DialogDescription asChild>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="skill-pill text-xs px-3 py-1 rounded-full text-slate-400 font-body">
                      {tag}
                    </span>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              {selectedProject.useIcon ? (
                <div className="w-full rounded-xl bg-gradient-to-br from-white/5 to-white/[0.02] aspect-video flex items-center justify-center border border-white/10">
                  {selectedProject.icon}
                </div>
              ) : (
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full rounded-xl object-cover aspect-video"
                />
              )}
              <p className="text-slate-400 font-body text-sm leading-relaxed">{selectedProject.fullDescription}</p>
              <div className="space-y-3">
                <h4 className="font-heading font-semibold text-white">Key Features</h4>
                <ul className="space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400 font-body leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/60 mt-1.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                {selectedProject.githubLink && (
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass px-5 py-2 rounded-xl flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-all font-body"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                )}
                {selectedProject.demoLink && (
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-button-primary px-5 py-2 rounded-xl flex items-center gap-2 text-sm text-white transition-all font-body"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
