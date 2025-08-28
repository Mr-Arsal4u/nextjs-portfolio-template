import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  stars: number;
  forks: number;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform built with React and Node.js. Features include real-time inventory, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      githubUrl: "#",
      liveUrl: "#",
      stars: 124,
      forks: 32
    },
    {
      title: "AI Analytics Dashboard",
      description: "Advanced analytics dashboard with machine learning insights. Real-time data visualization and predictive analytics for business intelligence.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Vue.js", "Python", "TensorFlow", "D3.js"],
      githubUrl: "#",
      liveUrl: "#",
      stars: 89,
      forks: 15
    },
    {
      title: "Real-Time Chat App",
      description: "Modern chat application with real-time messaging, file sharing, and video calls. Built with Socket.io and WebRTC technology.",
      image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Next.js", "Socket.io", "WebRTC", "Redis"],
      githubUrl: "#",
      liveUrl: "#",
      stars: 67,
      forks: 28
    },
    {
      title: "DevOps Automation",
      description: "Complete CI/CD pipeline automation with Docker containerization, Kubernetes orchestration, and automated testing workflows.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      technologies: ["Docker", "Kubernetes", "AWS", "Terraform"],
      githubUrl: "#",
      liveUrl: "#",
      stars: 156,
      forks: 45
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Projects</h2>
          <p className="text-xl text-muted-foreground">Some of my favorite work</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="project-card group"
              data-testid={`project-${index}`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="project-card-inner"
              >
                <div className="glass-card rounded-2xl overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-semibold gradient-text">{project.title}</h3>
                      <div className="flex space-x-2">
                        <motion.a
                          href={project.liveUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-lg glass hover:neon-glow transition-all"
                          data-testid={`project-${index}-live`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-lg glass hover:neon-glow transition-all"
                          data-testid={`project-${index}-github`}
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-xs rounded-full ${
                            techIndex % 3 === 0 ? 'bg-neon-cyan/20 text-neon-cyan' :
                            techIndex % 3 === 1 ? 'bg-neon-lime/20 text-neon-lime' :
                            'bg-neon-magenta/20 text-neon-magenta'
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Button 
                        className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-transform"
                        data-testid={`project-${index}-details`}
                      >
                        View Details
                      </Button>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <span className="flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>{project.stars}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <GitFork className="w-4 h-4" />
                          <span>{project.forks}</span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            variant="outline"
            className="px-8 py-4 glass rounded-lg font-medium hover:scale-105 transition-transform neon-glow"
            data-testid="view-all-projects"
          >
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
