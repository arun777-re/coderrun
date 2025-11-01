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
      whileHover={{ scale: 1.06}}
      whileTap={{ scale: 0.97 }}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      className="relative rounded-2xl p-8 transition-all duration-300
      bg-linear-to-br from-[#141414] to-[#1f1f1f] 
      border border-white/10 shadow-lg hover:shadow-accent/30"
    >
      <div className="text-4xl mb-4 text-accent">{icon}</div>
      <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
      <p className="text-font leading-relaxed">{desc}</p>

      {/* Subtle accent glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 hover:opacity-100 bg-gradient-to-tr from-accent/10 via-transparent to-transparent transition-opacity duration-500"></div>
    </motion.div>
  );
};

export default ServiceCard;
