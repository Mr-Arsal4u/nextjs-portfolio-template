import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function About() {
  const skills = [
    "Frontend Development",
    "Backend Architecture",
    "DevOps & Cloud",
    "UI/UX Design"
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
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground">Passionate developer with a love for creating innovative solutions</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Full-stack developer with 3+ years of experience delivering scalable, production-ready web applications for startups and enterprise teams. I focus on building intuitive user experiences backed by clean, efficient, and maintainable code.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">What I Do</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                    data-testid={`skill-${skill.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className={`w-2 h-2 rounded-full ${index === 0 ? 'bg-neon-cyan' :
                        index === 1 ? 'bg-neon-lime' :
                          index === 2 ? 'bg-neon-magenta' :
                            'bg-neon-cyan'
                      }`} />
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Modern tech workspace with multiple monitors"
                className="w-full h-96 object-cover"
                data-testid="about-image"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <div className="glass-card rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Currently Learning</p>
                      <p className="text-sm text-muted-foreground">AI/ML Integration</p>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-r from-neon-cyan to-neon-lime rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
