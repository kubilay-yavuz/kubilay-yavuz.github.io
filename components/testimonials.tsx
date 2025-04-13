"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Calendar } from "lucide-react"

export default function Experience() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const experiences = [
    {
      id: 1,
      company: "McKinsey & Company",
      position: "Senior Data Scientist",
      period: "Feb 2022 - Current",
      location: "London, United Kingdom",
      achievements: [
        "Led data governance and migration efforts, building Power BI dashboards with 150+ KPIs for an international real estate company",
        "Led workstreams to create an Operational Data Store (ODS) for a real estate company, improving data accessibility and reporting capabilities",
        "Created a routing algorithm that outperformed the client's existing algorithm by 8% less distance, resulting in significant cost savings",
        "Implemented an elasticity-based pricing tool for an e-commerce company, resulting in 118% quarterly realized margin impact",
        "Utilized geospatial data to measure impact and opportunities for 10+ clients",
        "Identified 10+ locations for M&A and 40+ areas for new developments using decision tree-based ML models",
        "Deployed mixed integer programming models to understand sales cannibalization, resulting in 23% cost reduction and 5pp margin increase",
      ],
      techStack: "Python, SQL, PySpark, Databricks, Azure, Power BI, Tableau, Operations Research",
      concepts:
        "Leading junior data engineers, client workshops, version control, pricing optimization, time series forecasting, AB testing, geospatial analysis, routing optimization",
    },
    {
      id: 2,
      company: "Infarm",
      position: "Data Analyst",
      period: "Jul 2021 - Feb 2022",
      location: "Berlin, Germany",
      achievements: [
        "Designed and built 5 centralized dashboards for account managers, standardizing manual work",
        "Decreased human hours spent by ~70% through automation",
        "Migrated data from Zoho CRM to Salesforce for 5 different countries",
        "Engineered an on-demand frontend logic using Flask",
      ],
      techStack: "Python, SQL, Airflow, Looker, Flask",
      concepts: "Data migration, dashboard design, process automation, frontend development",
    },
    {
      id: 3,
      company: "Getir",
      position: "Data Scientist",
      period: "Feb 2020 - Jul 2021",
      location: "Istanbul, Turkey",
      achievements: [
        "Built end-to-end machine learning project for campaign optimization and targeted client reach",
        "Reduced human hours from 30 to ~6 hours and increased client engagement by ~17pp",
        "Developed an ensemble model incorporating ML, OR, and Bayesian approaches for pricing products in 32+ categories",
        "Created shelf optimization using mixed integer programming and routing models applied to 7 warehouses",
      ],
      techStack: "Python, SQL, Amazon Redshift, AWS, Tableau",
      concepts:
        "Gradient Boosting Decision Trees, Ranking models, AB Testing, Incrementality testing, Causal Inference, Version Control",
    },
  ]

  return (
    <section id="experience" className="py-20">
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
            Experience
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="p-6 border-b bg-muted/30">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-bold">{exp.position}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Building className="h-4 w-4 text-primary" />
                          <span className="font-medium">{exp.company}</span>
                          <span className="text-muted-foreground">| {exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div>
                        <h4 className="font-semibold mb-2">Tech Stack:</h4>
                        <p className="text-muted-foreground">{exp.techStack}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Concepts:</h4>
                        <p className="text-muted-foreground">{exp.concepts}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
