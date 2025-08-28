import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function SocialMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  if (isMobile) {
    return (
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
        <div className="glass border-t border-border">
          <div className="flex justify-around py-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 rounded-lg hover:bg-primary/20 transition-colors"
                data-testid={`mobile-social-${social.label.toLowerCase()}`}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-8 right-8 z-50 hidden lg:block">
      <div className="relative">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 bg-primary rounded-full flex items-center justify-center neon-glow transition-transform"
          data-testid="social-menu-toggle"
        >
          <motion.div
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.div>
        </motion.button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              className="absolute bottom-16 right-0 space-y-3"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.1, x: -5 }}
                  className="block w-12 h-12 glass rounded-full flex items-center justify-center hover:neon-glow transition-all"
                  data-testid={`desktop-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
