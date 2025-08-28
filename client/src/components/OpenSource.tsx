import { motion } from "framer-motion";
import { ExternalLink, Star, GitFork } from "lucide-react";

interface OpenSourceProject {
  title: string;
  description: string;
  language: string;
  stars: number;
  forks: number;
  updatedAt: string;
  url: string;
}

export default function OpenSource() {
  const projects: OpenSourceProject[] = [
    {
      title: "React Animation Library",
      description: "Lightweight animation library for React components with TypeScript support.",
      language: "TypeScript",
      stars: 2300,
      forks: 420,
      updatedAt: "2 days ago",
      url: "#"
    },
    {
      title: "Vue CLI Plugin",
      description: "CLI plugin for automated Vue.js project setup with best practices.",
      language: "Vue.js",
      stars: 1800,
      forks: 310,
      updatedAt: "1 week ago",
      url: "#"
    },
    {
      title: "DevOps Utils",
      description: "Collection of utility scripts for Docker and Kubernetes workflows.",
      language: "Shell",
      stars: 945,
      forks: 180,
      updatedAt: "3 days ago",
      url: "#"
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

  const getLanguageColor = (language: string) => {
    switch (language.toLowerCase()) {
      case 'typescript': return 'bg-neon-cyan/20 text-neon-cyan';
      case 'vue.js': return 'bg-neon-lime/20 text-neon-lime';
      case 'shell': return 'bg-neon-magenta/20 text-neon-magenta';
      default: return 'bg-neon-cyan/20 text-neon-cyan';
    }
  };

  return (
    <section id="opensource" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Open Source</h2>
          <p className="text-xl text-muted-foreground">Contributing to the developer community</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card rounded-2xl p-6 cursor-pointer hover:neon-glow transition-all"
              data-testid={`opensource-${index}`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold gradient-text">{project.title}</h3>
                <div className="flex items-center space-x-2">
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center space-x-1 text-sm text-muted-foreground"
                  >
                    <Star className="w-4 h-4" />
                    <span>{project.stars.toLocaleString()}</span>
                  </motion.span>
                  <motion.span 
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center space-x-1 text-sm text-muted-foreground"
                  >
                    <GitFork className="w-4 h-4" />
                    <span>{project.forks}</span>
                  </motion.span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className={`px-2 py-1 text-xs rounded ${getLanguageColor(project.language)}`}>
                  {project.language}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Updated {project.updatedAt}</span>
                <motion.a
                  href={project.url}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-primary hover:text-neon-lime transition-colors"
                  data-testid={`opensource-${index}-link`}
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
