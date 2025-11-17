'use client'
import React from "react";
import { motion } from "framer-motion";

type Props = {
  index: number;
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const ServiceCard: React.FC<Props> = ({ index, icon, title, desc }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      whileTap={{ scale: 0.97 }}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="relative rounded-2xl p-8 transition-all duration-300
        bg-gradient-to-br from-surface to-background 
        border border-muted shadow-lg hover:shadow-accent/30 flex flex-col items-center justify-center"
    >
      <div className="text-4xl mb-4 text-accent flex justify-center items-center">{icon}</div>
      <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
      <p className="text-secondary leading-relaxed">{desc}</p>

      {/* Subtle accent glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 
        bg-gradient-to-tr from-accent/10 via-transparent to-transparent 
        transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default ServiceCard;
