import React from "react";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-32 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/images/hero-bg.png')] opacity-10 mix-blend-overlay object-cover"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-4xl md:text-6xl text-primary-foreground mb-8"
          >
            Ready to build something that matters?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto"
          >
            We take on a limited number of partnerships each year to ensure uncompromising quality and strategic alignment.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a href="mailto:adim@ruhantech.com" className="inline-flex h-16 items-center justify-center rounded-md bg-background px-10 text-lg font-medium text-foreground transition-all hover:bg-background/90 hover:scale-[1.02] shadow-xl">
              Initiate a Conversation
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
