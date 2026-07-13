import React from "react";
import { motion } from "framer-motion";

const values = [
  {
    title: "Technological Asceticism",
    description: "We build only what is necessary. Bloat is the enemy of reliability. Every feature must justify its existence against the cost of maintaining it."
  },
  {
    title: "Long-Term Horizons",
    description: "Our systems are architected to outlast standard industry cycles. We choose battle-tested technologies over ephemeral trends, focusing on decades, not quarters."
  },
  {
    title: "Ethical By Design",
    description: "Ethics cannot be retrofitted. We evaluate the societal impact of our platforms at the architectural phase, ensuring our tools elevate rather than exploit."
  },
  {
    title: "Craftsmanship",
    description: "Software engineering is a discipline of precision. We treat code as literature—it must be legible, elegant, and maintainable by those who come after us."
  }
];

export function Approach() {
  return (
    <section id="approach" className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <span className="text-primary uppercase tracking-widest text-sm font-semibold mb-4 block">
                Our Approach
              </span>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                Principles of Engineering.
              </h2>
              <p className="text-lg text-muted-foreground font-light">
                The tools we use shape the world we build. Our methodology is rooted in discipline, restraint, and an unwavering commitment to quality.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="text-primary text-xl font-serif mb-4 pb-4 border-b border-border/50">
                    0{index + 1}.
                  </div>
                  <h3 className="font-sans font-medium text-xl text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-light">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
