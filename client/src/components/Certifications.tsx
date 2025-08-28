import { motion } from "framer-motion";
import { Award, Cloud, Server } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  validUntil: string;
  icon: any;
  gradient: string;
}

export default function Certifications() {
  const certifications: Certification[] = [
    {
      title: "AWS Solutions Architect",
      issuer: "Amazon Web Services",
      validUntil: "Dec 2025",
      icon: Cloud,
      gradient: "from-neon-cyan to-neon-lime"
    },
    {
      title: "Google Cloud Professional",
      issuer: "Google Cloud Platform", 
      validUntil: "Sep 2025",
      icon: Server,
      gradient: "from-neon-lime to-neon-magenta"
    },
    {
      title: "Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      validUntil: "Mar 2025",
      icon: Award,
      gradient: "from-neon-magenta to-neon-cyan"
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
    <section id="certifications" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Certifications</h2>
          <p className="text-xl text-muted-foreground">Professional credentials and achievements</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card rounded-2xl p-8 text-center animate-glow hover:neon-glow transition-all cursor-pointer"
              data-testid={`certification-${index}`}
            >
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
                className={`w-16 h-16 bg-gradient-to-r ${cert.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}
              >
                <cert.icon className="w-8 h-8" />
              </motion.div>
              
              <h3 className="text-xl font-semibold mb-2 gradient-text">{cert.title}</h3>
              <p className="text-muted-foreground mb-4">{cert.issuer}</p>
              <div className="text-sm text-neon-cyan font-mono">Valid until {cert.validUntil}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
