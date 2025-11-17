"use client";
import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah K.",
    role: "Founder, ShopSwift",
    review: "CoderRun transformed our eCommerce business with blazing-fast tech and a beautiful UI.",
  },
  {
    name: "Amit R.",
    role: "CTO, FinCore",
    review: "Highly professional and communicative team — delivered exactly what we envisioned.",
  },
  {
    name: "Lena W.",
    role: "Product Manager, CloudLink",
    review: "Their scalable architecture design saved us months of rework. Totally recommended!",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-surface text-center overflow-x-hidden">
      <h2 className="text-3xl md:text-4xl text-accent mb-10" data-aos="fade-up">
        What Our Clients Say
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: .95 }}
            transition={{ type: "spring", stiffness: 200,damping:26 }}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="bg-background border border-accent/20 p-6 rounded-2xl shadow-lg transition-shadow shadow-xl"
          >
            <p className="text-secondary italic mb-4">"{t.review}"</p>
            <h4 className="text-accent font-semibold">{t.name}</h4>
            <p className="text-secondary text-sm">{t.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
