import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Why Choose Us</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Why organizations around the world trust Suza Labs as their technology and innovation partner.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-2xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-logo-dark-blue mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Expert Team</h3>
                  <p className="text-muted-foreground text-sm">
                    A multidisciplinary team of engineers, designers, and strategists with deep experience
                    across product, AI, data, and cloud platforms.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-logo-teal mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Cutting-Edge Technology</h3>
                  <p className="text-muted-foreground text-sm">
                    We use modern stacks, proven patterns, and best practices so your solutions are scalable,
                    maintainable, and future-ready.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-logo-dark-blue mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Business-First Approach</h3>
                  <p className="text-muted-foreground text-sm">
                    Technology is always mapped to business outcomes: efficiency, revenue, and better
                    decision‑making for your organization.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 rounded-full bg-logo-teal mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">Long-Term Partnership</h3>
                  <p className="text-muted-foreground text-sm">
                    We stay with you beyond launch with continuous improvements, monitoring, and support as
                    your business scales.
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

