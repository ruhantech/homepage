import React from "react";
import { motion } from "framer-motion";
import { TASTIR_URL } from "@/lib/site";

const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export function Showcase() {
  return (
    <section id="showcase" className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1 relative flex items-center justify-center py-8"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 rounded-3xl pointer-events-none" />

            <div className="relative w-full max-w-sm mx-auto">
              <img
                src={`${base}/images/tastir-mockup.png`}
                alt="Tastir / تسطير — upload interface"
                className="w-full h-auto rounded-[2rem] shadow-2xl border border-border/50 object-cover"
              />
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="absolute -bottom-8 -right-6 w-2/3 rounded-2xl shadow-2xl border-2 border-background overflow-hidden"
              >
                <img
                  src={`${base}/images/tastir-screen.png`}
                  alt="Tastir / تسطير — word-level validation results"
                  className="w-full h-auto block"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 block">
              Featured Case Study
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
              Tastir / تسطير.
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
              <p>
                Sacred knowledge requires precise transmission. For centuries, the rigorous study of Quranic calligraphy depended entirely on direct feedback from a master.
              </p>
              <p>
                We built Tastir to scale this critical pedagogical relationship. It is a React application that utilizes bespoke computer vision models to validate handwritten Quranic script.
              </p>
              <p>
                By providing immediate, mathematically rigorous feedback on stroke weight, proportion, and spacing, we allow students to practice independently while honoring the exacting standards of traditional methodology.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground">Computer Vision</span>
              <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground">React</span>
              <span className="inline-flex items-center rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground">EdTech</span>
            </div>

            <div className="mt-10">
              <a
                href={TASTIR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors group text-sm"
              >
                View the Tastir landing page
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
