import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowDown, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThreeBackground from "@/components/ThreeBackground";

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    "Digital Product Solutions",
    "AI & Intelligent Systems",
    "Data Analytics & BI",
    "POS, Invoice & ERP",
    "Finance & Business Support",
    "Digital Media & Branding"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const scrollToServices = () => {
    const element = document.getElementById("services");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl md:text-8xl font-bold leading-tight"
              >
                <span className="block">Welcome to</span>
                <span className="block">
                  <span className="text-[#1a3a5a]">Suza</span>{" "}
                  <span className="text-logo-teal">Labs</span>
                </span>
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-2xl md:text-3xl text-muted-foreground font-mono h-12 flex items-center"
              >
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  data-testid="typewriter-text"
                >
                  {roles[currentRole]}
                </motion.span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-muted-foreground max-w-lg"
            >
              Making businesses smarter through technology, automation, and data‑driven solutions.
              At Suza Labs, we design and deliver practical digital solutions that help organizations scale, operate efficiently, and make better decisions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                onClick={scrollToServices}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium neon-glow hover:scale-105 transition-transform"
                data-testid="view-work-button"
              >
                Explore Our Services
                <ArrowDown className="ml-2 w-4 h-4" />
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="px-8 py-4 glass rounded-lg font-medium hover:scale-105 transition-transform"
                data-testid="contact-button"
              >
                <MessageSquare className="mr-2 w-4 h-4" />
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - 3D Interactive Object */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-96 lg:h-[500px]"
          >
            <ThreeBackground />

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 w-4 h-4 bg-neon-cyan rounded-full"
            />
            <motion.div
              animate={{ y: [10, -15, 10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-10 w-6 h-6 bg-neon-lime rounded-full"
            />
            <motion.div
              animate={{ y: [-5, 15, -5] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute top-32 left-20 w-3 h-3 bg-neon-magenta rounded-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
