import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, Award, TrendingUp, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPortfolioItemById } from "@/data/portfolioData";
import Navigation from "@/components/Navigation";
import { Link } from "wouter";

export default function PortfolioDetail() {
  const [, params] = useRoute<{ id: string }>("/portfolio/:id");
  const item = params ? getPortfolioItemById(params.id) : null;

  if (!item) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="flex items-center justify-center min-h-[80vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold gradient-text mb-4">Portfolio Item Not Found</h1>
            <Link href="/">
              <Button className="mt-4">Back to Home</Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Link href="/#portfolio">
                <Button variant="ghost" className="mb-8">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Portfolio
                </Button>
              </Link>

              <div className="mb-6">
                <span className="px-4 py-2 text-sm rounded-full bg-neon-cyan/20 text-neon-cyan backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4">
                {item.title}
              </h1>

              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Users className="w-5 h-5" />
                  <span className="text-lg">{item.client}</span>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden mb-12">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Overview */}
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-4">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {item.fullDescription || item.description}
                </p>
              </div>

              {/* Challenge */}
              {item.challenge && (
                <div>
                  <h2 className="text-3xl font-bold gradient-text mb-4">The Challenge</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.challenge}
                  </p>
                </div>
              )}

              {/* Solution */}
              {item.solution && (
                <div>
                  <h2 className="text-3xl font-bold gradient-text mb-4">Our Solution</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              )}

              {/* Results */}
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-6">Key Results</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {item.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      className="glass-card rounded-xl p-6 text-center"
                    >
                      <div className={`w-12 h-12 mx-auto mb-4 rounded-full flex items-center justify-center ${index === 0 ? 'bg-neon-cyan/20' :
                        index === 1 ? 'bg-neon-lime/20' :
                          'bg-neon-magenta/20'
                        }`}>
                        {index === 0 && <TrendingUp className="w-6 h-6 text-neon-cyan" />}
                        {index === 1 && <Award className="w-6 h-6 text-neon-lime" />}
                        {index === 2 && <Users className="w-6 h-6 text-neon-magenta" />}
                      </div>
                      <p className="text-lg font-semibold">{result}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Impact */}
              {item.impact && item.impact.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold gradient-text mb-6">Impact</h2>
                  <div className="space-y-4">
                    {item.impact.map((impact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        className="flex items-start space-x-4 glass-card rounded-lg p-4"
                      >
                        <CheckCircle className="w-6 h-6 text-neon-cyan flex-shrink-0 mt-1" />
                        <p className="text-lg text-muted-foreground">{impact}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h2 className="text-3xl font-bold gradient-text mb-6">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {item.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className={`px-4 py-2 text-sm rounded-full font-medium ${index % 3 === 0 ? 'bg-neon-cyan/20 text-neon-cyan' :
                        index % 3 === 1 ? 'bg-neon-lime/20 text-neon-lime' :
                          'bg-neon-magenta/20 text-neon-magenta'
                        }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
