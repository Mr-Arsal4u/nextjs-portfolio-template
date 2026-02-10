import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { services } from "@/data/portfolioData";

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground">Comprehensive technology solutions tailored to your needs</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            // Dynamically resolve the icon component
            const IconComponent = (LucideIcons as any)[service.iconName] || LucideIcons.HelpCircle;

            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card rounded-2xl p-8 hover:neon-glow transition-all cursor-pointer group"
                data-testid={`service-${index}`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${index % 3 === 0 ? 'from-neon-cyan to-neon-lime' :
                    index % 3 === 1 ? 'from-neon-lime to-neon-magenta' :
                      'from-neon-magenta to-neon-cyan'
                  } rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-semibold gradient-text mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full ${index % 2 === 0 ? 'bg-logo-dark-blue' :
                            'bg-logo-teal'
                        }`} />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
