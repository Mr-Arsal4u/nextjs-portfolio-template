import { motion } from "framer-motion";
import { CheckCircle, Target, Users, Globe, Award } from "lucide-react";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";

interface StatCardProps {
  stat: { label: string; value: number; icon: any };
  index: number;
  variants: any;
}

function AnimatedStatCard({ stat, index, variants }: StatCardProps) {
  const { count, ref } = useAnimatedCounter({
    end: stat.value,
    duration: 2000,
    startOnView: true,
    delay: index * 200, // Stagger animation
  });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      whileHover={{ scale: 1.05 }}
      className="glass-card rounded-2xl p-6 text-center hover:neon-glow transition-all"
      data-testid={`stat-${index}`}
    >
      <div className={`w-12 h-12 bg-gradient-to-r ${index % 4 === 0 ? 'from-neon-cyan to-neon-lime' :
          index % 4 === 1 ? 'from-neon-lime to-neon-magenta' :
            index % 4 === 2 ? 'from-neon-magenta to-neon-cyan' :
              'from-neon-cyan to-neon-magenta'
        } rounded-lg flex items-center justify-center mx-auto mb-4`}>
        <stat.icon className="w-6 h-6" />
      </div>
      <div className="text-3xl font-bold gradient-text mb-2">
        {count}+
      </div>
      <div className="text-sm text-muted-foreground">{stat.label}</div>
    </motion.div>
  );
}

export default function About() {
  const skills = [
    "Digital Product Solutions",
    "AI & Intelligent Systems",
    "Data Analytics & BI",
    "Digital Invoice, POS and ERP",
    "Finance & Business Support",
    "Digital Media & Branding"
  ];

  const stats = [
    { label: "Projects Delivered", value: 200, icon: Target },
    { label: "Happy Clients", value: 150, icon: Users },
    { label: "Countries Served", value: 25, icon: Globe },
    { label: "Years Experience", value: 10, icon: Award }
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
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Suza Labs</h2>
          <p className="text-xl text-muted-foreground">Innovative technology solutions for modern businesses</p>
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
              <h3 className="text-2xl font-normal mb-4 gradient-text">Our Story</h3>
              <p className="text-muted-foreground leading-relaxed">
                Suza Labs was born from a simple yet powerful vision: to bridge the gap between complex technology and real-world business growth. We don't just build software; we engineer competitive advantages.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                By combining deep technical expertise with a relentless focus on efficiency, we transform ambitious ideas into scalable, high-performing digital realities. Whether you're a disruptive startup or an evolving enterprise, we're here to help you navigate the digital landscape and work smarter, not harder.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="glass-card rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 gradient-text">Our Expertise</h3>
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
                    <div className={`w-2 h-2 rounded-full ${index % 2 === 0 ? 'bg-logo-dark-blue' :
                        'bg-logo-teal'
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
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
                alt="Team collaboration at Suza Labs"
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
                      <p className="font-medium">Innovation Focus</p>
                      <p className="text-sm text-muted-foreground">AI & Cloud Solutions</p>
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

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >
          {stats.map((stat, index) => (
            <AnimatedStatCard
              key={stat.label}
              stat={stat}
              index={index}
              variants={itemVariants}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
