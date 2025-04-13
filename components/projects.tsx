"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { ChevronDown, ExternalLink, Github, Database, Route } from "lucide-react"

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [expandedProject, setExpandedProject] = useState(null)

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      id: 1,
      title: "Operational Data Store (ODS) Development",
      shortDescription: "Led workstreams to create an ODS for a real estate company.",
      description:
        "Led workstreams to create an Operational Data Store (ODS) for a real estate company, improving data accessibility and reporting capabilities.",
      icon: <Database className="h-10 w-10 text-primary" />,
      useIcon: true,
      tags: ["Python", "SQL", "Data Modeling", "ETL", "Azure", "Data Governance"],
      features: [
        "Design and implementation of a centralized Operational Data Store",
        "Development of ETL processes for data integration",
        "Implementation of data quality checks and validation",
        "Creation of data governance frameworks",
        "Establishment of data access protocols and security measures",
      ],
      fullDescription:
        "Led multiple workstreams to design and implement a comprehensive Operational Data Store (ODS) for a major real estate company. The project involved creating a centralized repository for operational data from multiple sources, implementing robust ETL processes, and establishing data governance frameworks. The ODS significantly improved data accessibility, reporting capabilities, and decision-making processes across the organization. The solution enabled real-time access to critical business data, standardized reporting metrics, and provided a single source of truth for operational analytics.",
    },
    {
      id: 2,
      title: "Routing Algorithm Optimization",
      shortDescription: "Developed a routing algorithm with 8% distance reduction over client's solution.",
      description:
        "Created a routing algorithm that outperformed the client's existing algorithm by 8% less distance, resulting in significant cost savings.",
      icon: <Route className="h-10 w-10 text-primary" />,
      useIcon: true,
      tags: ["Python", "Operations Research", "Optimization", "Algorithm Design"],
      features: [
        "Advanced routing algorithm development",
        "Implementation of vehicle routing problem (VRP) solutions",
        "Constraint optimization for real-world conditions",
        "Performance benchmarking against existing solutions",
        "8% reduction in total distance traveled",
      ],
      fullDescription:
        "Designed and implemented an advanced routing algorithm for a client that significantly outperformed their existing solution. The algorithm utilized sophisticated operations research techniques to optimize delivery routes, considering multiple constraints such as time windows, vehicle capacity, and traffic patterns. Through rigorous testing and refinement, the algorithm achieved an 8% reduction in total distance traveled compared to the client's existing solution. This improvement translated into substantial cost savings in fuel consumption, vehicle maintenance, and driver time, while also reducing the environmental impact of the client's operations.",
    },
    {
      id: 3,
      title: "Teknofest AI Competition",
      shortDescription: "Developed AI for vehicle and pedestrian detection from drone footage.",
      description:
        "Participated in Teknofest AI Competition, achieving 3rd place in semi-finals and 5th in finals with a vehicle and pedestrian detection model.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-e5Mhco9QAeAG23KAviuGd81yKhzN3x.png",
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
        "Participated in the Teknofest Artificial Intelligence Competition with my teammate Burak under the name TigersAI. Without any advisor or sponsors, and using only Google Colab and Drive, we achieved 3rd place in the semi-finals and 5th place in the finals. The six-month competition concluded with a 5-day final stage. The objective was to detect vehicles and pedestrians from drone footage. Our solution comprised an ensemble of three RetinaNet models, which proved highly effective in the challenging aerial detection task. This achievement demonstrated our ability to develop sophisticated computer vision solutions with limited resources and compete at a high level in a national AI competition.",
    },
    {
      id: 4,
      title: "Vestel V-Intelligence Computer Vision",
      shortDescription: "Built classification models for clothing care symbols.",
      description:
        "Developed image classification models to identify care symbols on clothing labels for Vestel's V-Intelligence competition.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-lgbBvjak5fdb59FtbFBM9mnVGlgrdr.png",
      tags: ["Image Classification", "DenseNet", "Computer Vision", "Transfer Learning", "Image Preprocessing"],
      features: [
        "Image preprocessing techniques for clothing labels",
        "Implementation of state-of-the-art classification models",
        "Evaluation of DenseNet121 and DenseNet201 architectures",
        "Fine-tuning of pre-trained models for specific domain",
        "Development of robust classification pipeline",
      ],
      githubLink: "https://github.com/kubilay-yavuz",
      fullDescription:
        "Participated in the Vestel V-Intelligence Computer Vision Competition, where the objective was to classify care symbols attached to clothing labels. The project involved extensive experimentation with various image preprocessing techniques to handle the challenging nature of clothing label images. After evaluating numerous state-of-the-art image classification models, DenseNet121 and DenseNet201 emerged as the most effective architectures for this specific task. The final solution demonstrated high accuracy in identifying different washing, drying, and ironing instructions from clothing labels, showcasing the practical application of computer vision in everyday consumer contexts.",
    },
    {
      id: 5,
      title: "Turkish Airlines Travel Datathon",
      shortDescription: "Predicted passenger counts for two-legged flights using big data.",
      description:
        "Developed predictive models for passenger counts on two-legged flights using a dataset of 93 million rows.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-gNBzgJfoKnAgehH7GXiC9soiygIqnd.png",
      tags: ["Big Data", "Catboost", "Keras", "Linear Regression", "Feature Engineering"],
      features: [
        "Analysis of massive dataset (93 million rows)",
        "Sampling techniques for big data",
        "Feature engineering for flight data",
        "Implementation of multiple modeling approaches",
        "Baseline creation with Linear Regression",
      ],
      githubLink: "https://github.com/kubilay-yavuz/TigersAI_Assessment_THY",
      fullDescription:
        "Participated in the Turkish Airlines Travel Datathon, where the challenge was to predict passenger counts for two-legged flights. The project involved working with a massive dataset containing 93 million rows, requiring effective sampling and big data handling techniques. Our approach included comprehensive feature engineering tailored to flight data, followed by the implementation of multiple modeling approaches including Catboost, Keras neural networks, and Linear Regression. The Linear Regression model served as a baseline for evaluating the performance of more complex models. This project demonstrated our ability to handle big data challenges and develop effective predictive models for complex transportation problems.",
    },
    {
      id: 6,
      title: "LC Waikiki Datathon",
      shortDescription: "Predicted customer churn using machine learning models.",
      description:
        "Developed predictive models to identify customers likely to churn in a given period for LC Waikiki.",
      image: "/images/lc-waikiki-datathon.png",
      useIcon: false,
      tags: ["Customer Churn", "LightGBM", "Keras", "Feature Engineering", "Predictive Modeling"],
      features: [
        "Customer behavior analysis and feature engineering",
        "Implementation of gradient boosting with LightGBM",
        "Neural network development with Keras",
        "Model performance comparison and optimization",
        "Actionable insights for customer retention strategies",
      ],
      fullDescription:
        "Participated in the LC Waikiki Datathon, where the objective was to predict whether a customer would churn within a specified time period. The project involved comprehensive feature engineering to extract meaningful patterns from customer transaction and behavior data. We implemented and compared multiple modeling approaches, focusing primarily on LightGBM and neural networks built with Keras. After extensive testing and optimization, the LightGBM model demonstrated superior performance for this particular prediction task. The final solution provided actionable insights that could be used to develop targeted retention strategies for at-risk customers, potentially increasing customer lifetime value and reducing churn-related revenue loss.",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-muted/30">
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
            Portfolio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={fadeIn}
            >
              <Card
                className={`group h-full cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  expandedProject === project.id ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    {project.useIcon ? (
                      <div className="w-full aspect-video bg-muted/50 flex items-center justify-center">
                        {project.icon}
                      </div>
                    ) : (
                      <div className="w-full aspect-video bg-muted/50 overflow-hidden">
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-background/20 p-6 flex flex-col justify-end">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-3">{project.shortDescription}</p>
                      <div className="flex flex-wrap gap-1 mt-auto">
                        {project.tags.slice(0, 3).map((tag, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                        {project.tags.length > 3 && (
                          <Badge variant="secondary" className="text-xs">
                            +{project.tags.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedProject === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="p-6 border-t"
                      >
                        <div className="space-y-4">
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <Badge key={i} variant="secondary">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="space-y-2">
                            <h4 className="font-semibold">Key Features:</h4>
                            <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                              {project.features.map((feature, i) => (
                                <li key={i}>{feature}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="flex gap-4 pt-2">
                            {project.githubLink && (
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(project.githubLink, "_blank")
                                }}
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Code
                              </Button>
                            )}
                            {project.demoLink && (
                              <Button
                                size="sm"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  window.open(project.demoLink, "_blank")
                                }}
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Demo
                              </Button>
                            )}
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={(e) => {
                                e.stopPropagation()
                                setSelectedProject(project)
                              }}
                            >
                              Learn More
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="p-4 text-center">
                    <ChevronDown
                      className={`w-6 h-6 mx-auto transition-transform duration-300 ${
                        expandedProject === project.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 mt-2 mb-4">
                  {selectedProject.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              {selectedProject.useIcon ? (
                <div className="w-full rounded-md bg-muted/50 aspect-video flex items-center justify-center">
                  {selectedProject.icon}
                </div>
              ) : (
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  className="w-full rounded-md object-cover aspect-video"
                />
              )}
              <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
              <div className="space-y-4">
                <h4 className="font-semibold">Key Features:</h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {selectedProject.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-end gap-4 mt-4">
                {selectedProject.githubLink && (
                  <Button variant="outline" asChild>
                    <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
                {selectedProject.demoLink && (
                  <Button asChild>
                    <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </section>
  )
}
