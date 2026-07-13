import React from "react";
import { motion } from "framer-motion";
import { Database, BookOpen, BrainCircuit, ShieldCheck } from "lucide-react";

const practices = [
  {
    title: "Educate at Scale",
    description: "Building platforms that democratize learning and preserve knowledge for future generations. We believe technology should reduce friction between the student and the subject.",
    icon: <BookOpen className="w-6 h-6 text-primary" />,
  },
  {
    title: "Build & Scale",
    description: "Designing resilient systems that scale under pressure. Cloud architecture, distributed infrastructure, and horizontal scaling strategies — built for reliability from the ground up.",
    icon: <Database className="w-6 h-6 text-primary" />,
  },
  {
    title: "Secure by Design",
    description: "Cloud security posture, TLS/PKI design, and certificate lifecycle automation. We build the cryptographic foundations that keep data in motion safe and systems provably trusted.",
    icon: <ShieldCheck className="w-6 h-6 text-primary" />,
  },
  {
    title: "Deploy Intelligence",
    description: "Deploying machine intelligence with intention. We guide organizations through the noise, building pragmatic AI solutions that augment human capability rather than replacing it.",
    icon: <BrainCircuit className="w-6 h-6 text-primary" />,
  },
];

export function Practices() {
  return (
    <section id="practices" className="py-32 bg-card relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-card to-card pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 block"
            >
              Practice Areas
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl md:text-5xl text-foreground"
            >
              How we intervene in the world.
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {practices.map((practice, index) => (
            <motion.div
              key={practice.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-background border border-border p-10 rounded-xl hover:border-primary/50 transition-colors duration-500"
            >
              <div className="mb-6 inline-flex p-4 rounded-lg bg-card border border-border group-hover:bg-primary/10 transition-colors duration-500">
                {practice.icon}
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-4">{practice.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {practice.description}
              </p>
              <div className="absolute bottom-0 left-0 h-1 bg-primary w-0 group-hover:w-full transition-all duration-500 rounded-b-xl"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
