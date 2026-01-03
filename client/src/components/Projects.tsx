"use client";

import { motion } from "framer-motion";
import { ExternalLink, Star, GitFork } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl: string;
  stars: number;
  forks: number;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Valrate",
      description:
        "A real estate valuation platform that estimates market prices using location and property-specific data.",
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?cs=srgb&dl=pexels-binyaminmellish-186077.jpg&fm=jpg", // updated property image
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Google Maps API"],
      liveUrl: "https://valrate.com/",
      stars: 0,
      forks: 0
    },
    {
      title: "Dastagir Travel",
      description:
        "A full-featured travel agency portal with flight search and booking powered by Sabre API integration.",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&h=400", // travel image
      technologies: ["Laravel", "PHP", "Sabre API", "MySQL", "Bootstrap"],
      liveUrl: "http://dastagirtravel.com/",
      stars: 0,
      forks: 0
    },
    {
      title: "DorKaf",
      description:
        "A real estate platform for property listings, sales, and online auction management.",
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&h=400", // property image
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "Stripe"],
      liveUrl: "https://dorkaf.com/",
      stars: 0,
      forks: 0
    },
    {
      title: "MYTM Travels",
      description:
        "A travel management system supporting ticketing, hotel bookings, and tour package management.",
      image:
        "https://media.licdn.com/dms/image/v2/C4E1BAQF9OKZN3QWHbg/company-background_10000/company-background_10000/0/1583952997122/ak_international_travels_tours_cover?e=2147483647&v=beta&t=dxp9rUrfUNZMaCo5IR8paZN1BHfLExnZ6q8CQj6QT2A", // updated travel image
      technologies: ["Laravel", "PHP", "MySQL", "REST APIs"],
      liveUrl: "https://mytmtravels.com/",
      stars: 0,
      forks: 0
    },
    {
      title: "Short Umrah",
      description:
        "An Umrah and Hajj booking platform with integrated flights, hotels, and package management.",
      image:
        "https://media.licdn.com/dms/image/v2/C4E1BAQFJ1lin9dqV5Q/company-background_10000/company-background_10000/0/1584073410213/bliss_travels_and_tours_cover?e=2147483647&v=beta&t=JLN3RZ33kuxFe5i5VjKN0nF6MrJR6gDRq3_T5UeZZO0", // travel image
      technologies: ["Laravel", "PHP", "MySQL", "Payment Gateway"],
      liveUrl: "https://shortumrah.com/",
      stars: 0,
      forks: 0
    },
    {
      title: "Bookoza",
      description:
        "An online marketplace for books, enabling users to buy, sell, and list books including novels and comics.",
      image:
        "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&h=400", // general marketplace image
      technologies: ["Laravel", "PHP", "MySQL", "JavaScript"],
      liveUrl: "https://bookoza.com/",
      stars: 0,
      forks: 0
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
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
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Projects
          </h2>
          <p className="text-xl text-muted-foreground">
            Selected real-world projects
          </p>
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
              className="glass-card rounded-2xl overflow-hidden"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-semibold gradient-text">
                    {project.title}
                  </h3>
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-2 rounded-lg glass hover:neon-glow"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>

                <p className="text-muted-foreground mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" /> {project.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" /> {project.forks}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-14">
          <Button
            variant="outline"
            className="px-8 py-4 glass rounded-lg hover:scale-105 transition"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}
