import { motion } from "framer-motion";
import { CheckCircle, Star, Zap } from "lucide-react";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  icon: any;
}

export default function Experience() {
  const experiences: Experience[] =
    [
      {
        title: "Full Stack Developer",
        company: "Company Name",
        period: "2023 – 2025",
        duration: "2 Years",
        description:
          "Building scalable web applications using modern frontend frameworks and reliable backend systems. Working on APIs, authentication, database design, and performance optimization, while collaborating with teams to deliver stable, production-ready features.",
        technologies: [
          "React",
          "Next.js",
          "Vue.js",
          "PHP",
          "Laravel",
          "Node.js",
          "Python",
          "MySQL",
          "AWS",
          "Docker"
        ],
        icon: CheckCircle
      },
      {
        title: "Frontend Developer",
        company: "Company Name",
        period: "2022 – 2023",
        duration: "1 Year",
        description:
          "Developed responsive and user-friendly interfaces from design mockups. Focused on clean component structure, API integration, and improving usability across different devices and browsers.",
        technologies: [
          "React",
          "Vue.js",
          "TypeScript",
          "JavaScript",
          "Tailwind CSS",
          "Figma"
        ],
        icon: Star
      },
      {
        title: "Junior Web Developer",
        company: "Company Name",
        period: "2021 – 2022",
        duration: "6 Months",
        description:
          "Started my professional journey by building and maintaining websites while learning modern development workflows, basic backend logic, and real-world project requirements.",
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "PHP",
          "WordPress",
          "Git"
        ],
        icon: Zap
      }
    ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground">My professional journey through the tech world</p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-cyan via-neon-lime to-neon-magenta"></div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex items-start space-x-8"
                data-testid={`experience-${index}`}
              >
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${index === 0 ? 'from-neon-cyan to-neon-lime' :
                    index === 1 ? 'from-neon-lime to-neon-magenta' :
                      'from-neon-magenta to-neon-cyan'
                  } rounded-full flex items-center justify-center glass-card`}>
                  <experience.icon className="w-6 h-6" />
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex-1 glass-card rounded-2xl p-8 hover:neon-glow transition-all cursor-pointer"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold gradient-text">{experience.title}</h3>
                      <p className="text-lg text-muted-foreground">{experience.company}</p>
                    </div>
                    <div className="text-sm font-mono text-neon-cyan">{experience.period}</div>
                  </div>

                  <p className="text-muted-foreground mb-4">{experience.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1 text-xs rounded-full ${techIndex % 3 === 0 ? 'bg-neon-cyan/20 text-neon-cyan' :
                            techIndex % 3 === 1 ? 'bg-neon-lime/20 text-neon-lime' :
                              'bg-neon-magenta/20 text-neon-magenta'
                          }`}
                        data-testid={`tech-${tech.toLowerCase()}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
