"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { num: "50+", label: "Projects Delivered" },
  { num: "20+", label: "Happy Clients" },
  { num: "5+", label: "Years of Experience" },
  { num: "99.9%", label: "Uptime Reliability" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-surface/80 text-center overflow-x-hidden">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center justify-center"
          >
            <h3 className="text-4xl font-bold text-accent mb-2">{s.num}</h3>
            <p className="text-secondary text-sm">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
