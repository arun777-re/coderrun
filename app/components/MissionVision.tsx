'use client'
import { motion } from "framer-motion";

const MissionVision = () => {
  return (
    <section className="bg-black text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
          <p className="text-gray-300 leading-relaxed">
            To create high-quality web applications that help startups and 
            businesses achieve their goals with clean architecture, 
            robust security, and performance optimization.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-semibold mb-4">Our Vision</h3>
          <p className="text-gray-300 leading-relaxed">
            To become a globally recognized tech partner known for building 
            reliable, scalable, and future-ready digital ecosystems that 
            drive business success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
