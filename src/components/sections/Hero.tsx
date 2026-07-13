import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.png" 
          alt="Abstract Background" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-foreground leading-[1.1] tracking-tight">
              Technology <br />
              <span className="text-muted-foreground italic">with</span> purpose.
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="mt-8 text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-light"
          >
            We build infrastructure, intelligence, and educational tools to make society measurably better. Quiet conviction, expressed through code.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <a href="#practices" className="inline-flex h-14 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02]">
              Explore Our Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-24 max-w-4xl text-center mx-auto"
          >
            <span className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 block">
              Our Conviction
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
              The measure of good software is the life it improves. We engineer systems that elevate human potential and preserve sacred knowledge.
            </h2>
            <div className="w-24 h-1 bg-primary/30 mx-auto mt-12"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
