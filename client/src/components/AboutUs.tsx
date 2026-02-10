import { motion } from "framer-motion";
import { Users, Lightbulb, Heart, Award } from "lucide-react";

interface Value {
  title: string;
  description: string;
  icon: any;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export default function AboutUs() {
  const values: Value[] = [
    {
      title: "Innovation",
      description: "We stay ahead of the curve, constantly exploring new technologies and methodologies to deliver cutting-edge solutions.",
      icon: Lightbulb
    },
    {
      title: "Excellence",
      description: "Quality is at the core of everything we do. We strive for perfection in every project, no matter the size.",
      icon: Award
    },
    {
      title: "Collaboration",
      description: "We believe in working closely with our clients as partners, ensuring their vision becomes reality.",
      icon: Users
    },
    {
      title: "Integrity",
      description: "Transparency, honesty, and ethical practices guide our relationships with clients and team members.",
      icon: Heart
    }
  ];

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
    <section id="our-mission" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro - Our Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Our Mission</h2>
          <p className="text-xl text-muted-foreground">
            The principles, vision, and values that guide every solution we build
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="glass-card rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold gradient-text mb-6 text-center">Our Mission</h3>
            <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto leading-relaxed">
              Our mission at Suza Labs is to help businesses work smarter — by combining technology,
              automation, and data with a deep understanding of real‑world operations. We focus on
              building solutions that are practical, scalable, and aligned with our clients’ growth
              goals in an ever‑evolving digital landscape.
            </p>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold gradient-text mb-12 text-center">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="glass-card rounded-2xl p-8 text-center hover:neon-glow transition-all"
                data-testid={`value-${index}`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${index % 4 === 0 ? 'from-neon-cyan to-neon-lime' :
                    index % 4 === 1 ? 'from-neon-lime to-neon-magenta' :
                      index % 4 === 2 ? 'from-neon-magenta to-neon-cyan' :
                        'from-neon-cyan to-neon-magenta'
                  } rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <value.icon className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-semibold gradient-text mb-3">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
