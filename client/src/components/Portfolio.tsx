import { motion } from "framer-motion";
import { Award, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { portfolioItems } from "@/data/portfolioData";

export default function Portfolio() {
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
    <section id="portfolio" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Portfolio</h2>
          <p className="text-xl text-muted-foreground">Success stories and impactful solutions we've delivered</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="portfolio-card group h-full"
              data-testid={`portfolio-${index}`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="portfolio-card-inner h-full"
              >
                <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col">
                  <div className="relative overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 text-xs rounded-full bg-logo-dark-blue/20 text-logo-dark-blue backdrop-blur-sm">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-8 flex-grow flex flex-col">
                    <div className="mb-4">
                      <h3 className="text-2xl font-semibold gradient-text mb-2">{item.title}</h3>
                      <p className="text-muted-foreground flex items-center space-x-2 text-sm">
                        <Users className="w-4 h-4" />
                        <span>{item.client}</span>
                      </p>
                    </div>

                    <p className="text-muted-foreground mb-6 line-clamp-3 lg:line-clamp-none flex-grow">
                      {item.description}
                    </p>

                    <div className="grid grid-cols-3 gap-4 mb-6 shrink-0">
                      {item.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center p-3 glass-card rounded-lg flex flex-col justify-center">
                          <div className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${resultIndex === 0 ? 'bg-logo-dark-blue/20' :
                            resultIndex === 1 ? 'bg-logo-teal/20' :
                              'bg-logo-dark-blue/20'
                            }`}>
                            {resultIndex === 0 && <TrendingUp className="w-4 h-4 text-logo-dark-blue" />}
                            {resultIndex === 1 && <Award className="w-4 h-4 text-logo-teal" />}
                            {resultIndex === 2 && <Users className="w-4 h-4 text-logo-dark-blue" />}
                          </div>
                          <p className="text-[10px] text-muted-foreground leading-tight">{result}</p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-8 shrink-0">
                      {item.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className={`px-3 py-1 text-[10px] rounded-full font-medium ${techIndex % 2 === 0 ? 'bg-logo-dark-blue/20 text-logo-dark-blue' :
                              'bg-logo-teal/20 text-logo-teal'
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/10 shrink-0">
                      <Link href={`/portfolio/${item.id}`}>
                        <Button
                          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:scale-105 transition-transform text-sm"
                          data-testid={`portfolio-${index}-details`}
                        >
                          View Case Study
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
