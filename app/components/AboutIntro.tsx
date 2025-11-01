'use client'
import { motion } from "framer-motion";

const AboutIntro = () => {
  return (
    <section className="bg-white text-black py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-semibold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Who We Are
        </motion.h2>
        <motion.p
          className="text-lg leading-relaxed text-gray-700 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          At <span className="font-semibold">Coderrun</span>, we’re a full-stack web development agency 
          focused on building scalable, high-performance digital solutions. 
          Our goal is to empower businesses with modern technologies like 
          Next.js, Node.js, and MongoDB — delivering fast, secure, and 
          seamless user experiences.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutIntro;
