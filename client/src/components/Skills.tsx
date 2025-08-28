import { motion } from "framer-motion";
import { Code, Server, Cloud, Palette } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  skills: string[];
  gradient: string;
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["React, Vue.js, Next.js", "TypeScript, JavaScript", "Tailwind CSS, SCSS", "Three.js, Framer Motion"],
      gradient: "from-neon-cyan to-neon-lime"
    },
    {
      title: "Backend", 
      icon: Server,
      skills: ["Node.js, Express", "Python, Django", "PostgreSQL, MongoDB", "GraphQL, REST APIs"],
      gradient: "from-neon-lime to-neon-magenta"
    },
    {
      title: "DevOps",
      icon: Cloud,
      skills: ["AWS, Google Cloud", "Docker, Kubernetes", "CI/CD, GitHub Actions", "Monitoring, Analytics"],
      gradient: "from-neon-magenta to-neon-cyan"
    }
  ];

  const skillNodes = [
    { name: "React", icon: Code, position: { x: "10%", y: "20%" } },
    { name: "Node.js", icon: Server, position: { x: "80%", y: "15%" } },
    { name: "TypeScript", icon: Code, position: { x: "60%", y: "40%" } },
    { name: "Python", icon: Code, position: { x: "20%", y: "60%" } },
    { name: "MongoDB", icon: Server, position: { x: "75%", y: "70%" } },
    { name: "AWS", icon: Cloud, position: { x: "45%", y: "80%" } },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const nodeVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills</h2>
          <p className="text-xl text-muted-foreground">My technical expertise and tools</p>
        </motion.div>

        {/* Interactive Skill Constellation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative h-96 mb-16 overflow-hidden"
          data-testid="skills-constellation"
        >
          <div className="absolute inset-0 glass-card rounded-2xl">
            {skillNodes.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={nodeVariants}
                whileHover={{ 
                  scale: 1.2, 
                  zIndex: 10,
                  transition: { duration: 0.3 }
                }}
                className="skill-node absolute flex flex-col items-center justify-center space-y-2 glass-card rounded-2xl p-4 cursor-pointer hover:neon-glow"
                style={{
                  left: skill.position.x,
                  top: skill.position.y,
                  transform: "translate(-50%, -50%)"
                }}
                data-testid={`skill-node-${skill.name.toLowerCase()}`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${
                  index % 3 === 0 ? 'from-neon-cyan to-neon-lime' :
                  index % 3 === 1 ? 'from-neon-lime to-neon-magenta' :
                  'from-neon-magenta to-neon-cyan'
                } rounded-lg flex items-center justify-center`}>
                  <skill.icon className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium whitespace-nowrap">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={nodeVariants}
              whileHover={{ scale: 1.05 }}
              className="glass-card rounded-2xl p-8 text-center hover:neon-glow transition-all"
              data-testid={`skill-category-${category.title.toLowerCase()}`}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <category.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-4 gradient-text">{category.title}</h3>
              <div className="space-y-2 text-muted-foreground">
                {category.skills.map((skill, skillIndex) => (
                  <p key={skillIndex}>{skill}</p>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
