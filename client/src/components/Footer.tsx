import { motion } from "framer-motion";
import { Linkedin, Facebook, Instagram, Mail, Shield, FileText, ExternalLink } from "lucide-react";
import { services } from "@/data/portfolioData";

export default function Footer() {
    const socialLinks = [
        { icon: Linkedin, href: "https://www.linkedin.com/company/suza-labs/", label: "LinkedIn" },
        { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61587085320994", label: "Facebook" },
        { icon: Instagram, href: "https://www.instagram.com/suzalabs/", label: "Instagram" },
        { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=suzalabs@gmail.com", label: "Email" }
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            // If not on home page, navigate to home page with hash
            window.location.href = `/#${id}`;
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="pt-20 pb-10 border-t border-border/50 glass">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 text-center md:text-left">
                    {/* Company Info */}
                    <div className="space-y-6 flex flex-col items-center md:items-start">
                        <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold gradient-text">Suza Labs</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                            Making businesses smarter through technology, automation, and data‑driven solutions.
                            We engineer competitive advantages for modern enterprises.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.1, y: -2 }}
                                    className="w-10 h-10 glass rounded-full flex items-center justify-center hover:neon-glow transition-all"
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-5 h-5 text-muted-foreground hover:text-white transition-colors" />
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Services Quick Links */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Our Services</h4>
                        <ul className="space-y-3 inline-block md:block">
                            {services.map((service, index) => (
                                <li key={index} className="flex justify-center md:justify-start">
                                    <button
                                        onClick={() => scrollToSection("services")}
                                        className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center space-x-2 group"
                                    >
                                        <div className="w-1 h-1 rounded-full bg-primary group-hover:scale-150 transition-transform" />
                                        <span className="whitespace-nowrap">{service.title}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources & Legal */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Resources & Legal</h4>
                        <ul className="space-y-3 inline-block md:block">
                            <li className="flex justify-center md:justify-start">
                                <a href="/privacy-policy" className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center space-x-2">
                                    <Shield className="w-4 h-4" />
                                    <span>Privacy Policy</span>
                                </a>
                            </li>
                            <li className="flex justify-center md:justify-start">
                                <a href="/terms-of-service" className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center space-x-2">
                                    <FileText className="w-4 h-4" />
                                    <span>Terms of Service</span>
                                </a>
                            </li>
                            <li className="flex justify-center md:justify-start">
                                <a href="/sitemap" className="text-muted-foreground hover:text-white transition-colors text-sm flex items-center space-x-2">
                                    <ExternalLink className="w-4 h-4" />
                                    <span>Sitemap</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Summary */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-semibold text-white">Work With Us</h4>
                        <p className="text-muted-foreground text-sm max-w-xs mx-auto md:mx-0">
                            Ready to scale your business? Get in touch with our experts today.
                        </p>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium neon-glow hover:scale-105 transition-transform text-sm w-full max-w-[200px] md:max-w-none mx-auto md:mx-0"
                        >
                            Start a Project
                        </button>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-muted-foreground text-xs">
                        © {currentYear} Suza Labs. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-xs text-muted-foreground">
                        <span className="hover:text-white cursor-help">Crafted with precision</span>
                        <span className="hover:text-white cursor-help">Optimized for performance</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
