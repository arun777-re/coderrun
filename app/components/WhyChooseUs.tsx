'use client'
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const features = [
  "Full-Stack MERN & Next.js Expertise",
  "Performance-Optimized Architecture",
  "Redis & BullMQ for Scalability",
  "Clean Code & SOLID Principles",
  "Secure & Concurrency-Safe APIs",
];

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 text-black py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-semibold mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Choose Coderrun?
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Because we don’t just build apps — we engineer systems that are 
          scalable, maintainable, and ready for future growth.
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 bg-white rounded-2xl p-6 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <CheckCircle className="text-blue-600 w-6 h-6 mt-1" />
            <p className="text-lg text-gray-800">{feature}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
