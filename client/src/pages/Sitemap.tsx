import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { services } from "@/data/portfolioData";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Sitemap() {
    const pages = [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/#about-us" },
        { name: "Portfolio", path: "/#portfolio" },
        { name: "Contact", path: "/#contact" },
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
    ];

    return (
        <div className="min-h-screen flex flex-col pt-20">
            <Navigation />
            <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="glass-card rounded-2xl p-8 md:p-12"
                >
                    <Link href="/">
                        <Button variant="ghost" className="mb-8 hover:bg-primary/10 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>
                    <h1 className="text-4xl font-bold gradient-text mb-8 text-center md:text-left">Sitemap</h1>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Pages Section */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                <div className="w-2 h-8 bg-primary mr-3 rounded-full" />
                                Main Pages
                            </h2>
                            <ul className="space-y-3">
                                {pages.map((page) => (
                                    <li key={page.name}>
                                        <Link href={page.path}>
                                            <a className="text-muted-foreground hover:text-primary transition-colors text-lg flex items-center group">
                                                <span className="group-hover:translate-x-2 transition-transform">{page.name}</span>
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Services Section */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-semibold text-white mb-4 flex items-center">
                                <div className="w-2 h-8 bg-accent mr-3 rounded-full" />
                                Our Services
                            </h2>
                            <ul className="space-y-3">
                                {services.map((service) => (
                                    <li key={service.title}>
                                        <Link href="/#services">
                                            <a className="text-muted-foreground hover:text-accent transition-colors text-lg flex items-center group">
                                                <span className="group-hover:translate-x-2 transition-transform">{service.title}</span>
                                            </a>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>
                    </div>

                    <div className="mt-16 pt-8 border-t border-border/30">
                        <h2 className="text-2xl font-semibold text-white mb-6">Company Information</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            Suza Labs is a premier technology and digital services company dedicated to helping businesses scale through innovative solutions in AI, Automation, Cloud Infrastructure, and Business Support.
                        </p>
                    </div>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
