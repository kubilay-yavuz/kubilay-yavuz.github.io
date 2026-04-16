"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Server, Database, Binary, BrainCircuit, Globe, LineChart } from "lucide-react"

export default function TechStack() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  }

  const technologies = {
    languages: {
      icon: <Code2 className="h-6 w-6" />,
      title: "Programming Languages",
      description: "Core languages for data science and analysis",
      skills: ["Python", "SQL", "R", "PySpark"],
    },
    ml: {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "Machine Learning",
      description: "ML frameworks and techniques",
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "XGBoost", "LightGBM", "Catboost"],
    },
    visualization: {
      icon: <LineChart className="h-6 w-6" />,
      title: "Data Visualization",
      description: "Tools for creating insightful visualizations",
      skills: ["Tableau", "Power BI", "Matplotlib", "Plotly", "Dash"],
    },
    cloud: {
      icon: <Server className="h-6 w-6" />,
      title: "Cloud & Infrastructure",
      description: "Cloud platforms and infrastructure tools",
      skills: ["AWS", "Azure", "Google Cloud", "Databricks", "Docker"],
    },
    database: {
      icon: <Database className="h-6 w-6" />,
      title: "Database Systems",
      description: "Database management and optimization",
      skills: ["PostgreSQL", "MySQL", "Amazon Redshift", "PostGIS"],
    },
    geospatial: {
      icon: <Globe className="h-6 w-6" />,
      title: "Geospatial Analysis",
      description: "Tools and techniques for geospatial data",
      skills: ["GeoPandas", "PostGIS", "Spatial Analysis", "GIS Visualization"],
    },
    concepts: {
      icon: <Binary className="h-6 w-6" />,
      title: "Data Science Concepts",
      description: "Fundamental data science principles",
      skills: [
        "Statistical Modeling",
        "Optimization",
        "Time Series Analysis",
        "Bayesian Statistics",
        "AB Testing",
        "Causal Inference",
      ],
    },
  }

  return (
    <section id="tech-stack" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4">
            Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(technologies).map(([key, category]) => (
            <motion.div
              key={key}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              variants={scaleUp}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-primary/10 p-3 rounded-full">{category.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold">{category.title}</h3>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {category.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="transition-all duration-300 hover:bg-primary/20 hover:text-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeIn}
          className="mt-12 text-center text-muted-foreground"
        >
          <p className="max-w-2xl mx-auto">
            With extensive experience in data science, machine learning, and optimization, I bring a comprehensive
            understanding of how to leverage data to solve complex business problems and drive meaningful results.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
