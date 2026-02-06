import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Heart, Award, Globe } from "lucide-react";

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

  const stats = [
    { label: "Projects Delivered", value: "200+", icon: Target },
    { label: "Happy Clients", value: "150+", icon: Users },
    { label: "Countries Served", value: "25+", icon: Globe },
    { label: "Years Experience", value: "10+", icon: Award }
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
    <section id="about-us" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Us</h2>
          <p className="text-xl text-muted-foreground">The team behind Suza Labs and what drives us</p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
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
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
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

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-3xl font-bold gradient-text mb-8 text-center">Why Choose Suza Labs?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Expert Team</h4>
                  <p className="text-muted-foreground text-sm">
                    Our team consists of experienced developers, designers, and strategists with proven track records.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-neon-lime mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Cutting-Edge Technology</h4>
                  <p className="text-muted-foreground text-sm">
                    We use the latest technologies and best practices to ensure your solution is future-proof.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-neon-magenta mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">Agile Methodology</h4>
                  <p className="text-muted-foreground text-sm">
                    We follow agile practices to deliver results quickly and adapt to changing requirements.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-neon-cyan mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-2">24/7 Support</h4>
                  <p className="text-muted-foreground text-sm">
                    We provide ongoing support and maintenance to ensure your systems run smoothly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
