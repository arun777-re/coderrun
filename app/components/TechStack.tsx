"use client";
import React from "react";
import { motion } from "framer-motion";
import { SiNextdotjs, SiMongodb, SiDocker, SiRedis, SiTypescript, SiAmazon, SiNodedotjs } from "react-icons/si";

const techs = [
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiRedis />, name: "Redis" },
  { icon: <SiDocker />, name: "Docker" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiAmazon />, name: "AWS" },
];

const TechStack = () => {
  return (
    <section className=" py-10 sm:py-20 bg-surface text-center overflow-x-hidden">
      <h2 className="text-3xl md:text-4xl text-accent mb-10" data-aos="fade-up">
        Trusted Technologies Powering CoderRun
      </h2>
      <div className="flex flex-wrap justify-center gap-10">
        {techs.map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex flex-col items-center text-secondary"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <div className="text-5xl mb-2 text-accent">{t.icon}</div>
            <p className="text-sm text-primary">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
