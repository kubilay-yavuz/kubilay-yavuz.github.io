"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Lightbulb, GraduationCap, Rocket } from "lucide-react"

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="py-20 bg-muted/30">
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
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Who I Am</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeIn}
          >
            <h3 className="text-2xl font-bold mb-4">A Passionate Data Scientist</h3>
            <p className="text-muted-foreground mb-6">
              I'm a Senior Data Scientist at McKinsey & Company with extensive experience in data analysis, machine
              learning, and optimization. My expertise spans across various domains including pricing optimization,
              geospatial analysis, and campaign optimization.
            </p>
            <p className="text-muted-foreground mb-6">
              With exceptional adaptability, I rapidly assimilate client-specific tools and emerging technologies,
              enabling me to accelerate solution delivery and provide timely value to stakeholders. This aptitude for
              swift knowledge acquisition translates directly into enhanced client outcomes and expedited
              problem-solving.
            </p>
            <p className="text-muted-foreground">
              I excel in orchestrating end-to-end solutions, meticulously guiding projects from initial concept ideation
              through rigorous development to seamless deployment. With a background in Industrial Engineering from
              Bogazici University (top 0.01% in University Entrance Exam), I combine analytical precision with practical
              implementation to transform complex challenges into tangible business advantages.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Technical Expertise</h4>
                      <p className="text-muted-foreground">
                        Proficient in Python, SQL, R, PySpark, and various data visualization tools. Experienced with
                        cloud platforms including AWS, Google Cloud, and Azure.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Rocket className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Accelerated Adaptation</h4>
                      <p className="text-muted-foreground">
                        Renowned for rapidly internalizing client ecosystems and novel technologies, facilitating
                        expedited solution development and implementation that consistently exceeds stakeholder
                        expectations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">End-to-End Problem Solver</h4>
                      <p className="text-muted-foreground">
                        Adept at navigating the complete solution lifecycle—from conceptual ideation and strategic
                        planning through meticulous development to production deployment—ensuring cohesive and
                        sustainable outcomes.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              variants={fadeIn}
            >
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-2">Education</h4>
                      <p className="text-muted-foreground">
                        BSc in Industrial Engineering from Bogazici University (2015-2020), with coursework in
                        statistics, optimization methods, and data structures.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
