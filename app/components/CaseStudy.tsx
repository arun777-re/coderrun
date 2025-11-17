"use client";
import React from "react";
import { motion } from "framer-motion";

type CaseStudyProps = {
  title: string;
  subtitle?: string;
  heroImg?: string;
  description: string;
  techStack?: string[];
  features?: string[];
  liveLink?: string;
  githubLink?: string;
};

const CaseStudy: React.FC<CaseStudyProps> = ({
  title,
  subtitle,
  heroImg,
  description,
  techStack,
  features,
  liveLink,
  githubLink,
}) => {
  return (
    <section className="py-20 bg-surface text-center overflow-x-hidden max-w-6xl mx-auto px-6">
      {heroImg && (
        <img
          src={heroImg}
          alt={title}
          className="w-full rounded-2xl mb-8 shadow-lg object-cover"
        />
      )}

      <h2 className="text-4xl md:text-5xl text-accent font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-secondary text-lg mb-6">{subtitle}</p>}

      <p className="text-secondary mb-6">{description}</p>

      {techStack && techStack.length > 0 && (
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-background text-accent rounded-full text-sm font-semibold shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      {features && features.length > 0 && (
        <div className="text-left mb-6">
          <h3 className="text-accent text-2xl mb-2">Key Features:</h3>
          <ul className="list-disc list-inside text-secondary">
            {features.map((f, i) => (
              <li key={i} className="mb-1">{f}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex justify-center gap-6 mt-4">
        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            className="bg-accent text-background px-6 py-3 rounded-full font-semibold hover:bg-accent/90 transition"
          >
            View Live
          </a>
        )}
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            className="bg-background text-accent border border-accent px-6 py-3 rounded-full font-semibold hover:bg-accent hover:text-background transition"
          >
            View Code
          </a>
        )}
      </div>
    </section>
  );
};

export default CaseStudy;
