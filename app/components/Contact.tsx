"use client";
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20 bg-surface text-center overflow-x-hidden">
      <h2 className="text-3xl md:text-4xl text-accent mb-8" data-aos="fade-up">
        Let’s Build Something Great Together
      </h2>
      <p className="text-secondary max-w-xl mx-auto mb-8">
        Have an idea or project in mind? We’d love to hear from you. Drop us a message and we’ll get back to you within 24 hours.
      </p>

      <motion.a
        href="mailto:hello@coderrun.info"
        whileHover={{ scale: 1.05 }}
        className="bg-accent text-background px-8 py-4 rounded-full font-semibold hover:bg-accent/90 transition"
      >
        Contact Us
      </motion.a>
    </section>
  );
};

export default Contact;
