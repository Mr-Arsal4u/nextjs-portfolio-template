import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TermsOfService() {
    return (
        <div className="min-h-screen flex flex-col pt-20">
            <Navigation />
            <main className="flex-grow container mx-auto px-4 py-12 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="glass-card rounded-2xl p-8 md:p-12"
                >
                    <Link href="/">
                        <Button variant="ghost" className="mb-8 hover:bg-primary/10 transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Button>
                    </Link>
                    <h1 className="text-4xl font-bold gradient-text mb-8">Terms of Service</h1>
                    <section className="space-y-6 text-muted-foreground leading-relaxed">
                        <p className="text-lg">Last updated: February 1, 2026</p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using this Website, you accept and agree to be bound by the terms and provision of this agreement.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Use License</h2>
                        <p>
                            Permission is granted to temporarily download one copy of the materials (information or software) on Suza Labs's website for personal, non-commercial transitory viewing only.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. Disclaimer</h2>
                        <p>
                            The materials on Suza Labs's website are provided on an 'as is' basis. Suza Labs makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Limitations</h2>
                        <p>
                            In no event shall Suza Labs or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Suza Labs's website.
                        </p>
                    </section>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
