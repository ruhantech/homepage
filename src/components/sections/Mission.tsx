import React from "react";
import { motion } from "framer-motion";

export function Mission() {
  return (
    <section id="mission" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary uppercase tracking-widest text-sm font-semibold mb-6 block"
          >
            Our Conviction
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight"
          >
            The measure of good software is the life it improves. We engineer systems that elevate human potential and preserve sacred knowledge.
          </motion.h2>
          <div className="w-24 h-1 bg-primary/30 mx-auto mt-12"></div>
        </div>
      </div>
    </section>
  );
}
