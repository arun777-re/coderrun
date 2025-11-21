"use client";
import React from "react";
import { motion } from "framer-motion";

const steps = [
  { step: "Discovery", desc: "We understand your business and goals deeply." },
  { step: "Planning", desc: "We design scalable architecture & clear roadmaps." },
  { step: "Development", desc: "We code, test, and iterate using modern tech stacks." },
  { step: "Deployment", desc: "We automate deployments and monitor for stability." },
];

const Process = () => {
  return (
    <section className="py-10 sm:py-20 bg-surface/80 text-center overflow-x-hidden">
      <h2 className="text-3xl md:text-4xl text-primary mb-10" data-aos="fade-up">
        Our Process
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -8 }}
            className="bg-surface rounded-2xl p-6 shadow-lg hover:shadow-accent/40 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <h3 className="text-accent text-xl mb-2">{s.step}</h3>
            <p className="text-secondary text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Process;
