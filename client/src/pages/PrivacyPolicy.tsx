import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
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
                    <h1 className="text-4xl font-bold gradient-text mb-8">Privacy Policy</h1>
                    <section className="space-y-6 text-muted-foreground leading-relaxed">
                        <p className="text-lg">Last updated: February 1, 2026</p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">1. Introduction</h2>
                        <p>
                            At Suza Labs, we respect your privacy and are committed to protecting it through our compliance with this policy. This policy describes the types of information we may collect from you or that you may provide when you visit our website and our practices for collecting, using, maintaining, protecting, and disclosing that information.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">2. Information We Collect</h2>
                        <p>
                            We collect several types of information from and about users of our Website, including information by which you may be personally identified, such as name, postal address, e-mail address, telephone number, or any other identifier by which you may be contacted online or offline.
                        </p>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">3. How We Use Your Information</h2>
                        <p>
                            We use information that we collect about you or that you provide to us, including any personal information:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To present our Website and its contents to you.</li>
                            <li>To provide you with information, products, or services that you request from us.</li>
                            <li>To fulfill any other purpose for which you provide it.</li>
                            <li>To notify you about changes to our Website or any products or services we offer or provide though it.</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-white mt-8 mb-4">4. Data Security</h2>
                        <p>
                            We have implemented measures designed to secure your personal information from accidental loss and from unauthorized access, use, alteration, and disclosure.
                        </p>
                    </section>
                </motion.div>
            </main>
            <Footer />
        </div>
    );
}
