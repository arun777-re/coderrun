"use client";
import React from "react";
import { motion } from "framer-motion";
import {useRouter} from 'next/navigation'

type Project = {
  title: string;
  desc: string;
  link?: string;
  img?: string;
};

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    desc: "Full-featured MERN e-commerce system with authentication, cart, and payment integration.",
    link: "/portfolio/123",
    img: "/images/project-1.jpg",
  },
  {
    title: "Portfolio Website",
    desc: "Personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
    link: "#",
    img: "/images/project-2.jpg",
  },
  {
    title: "Blog CMS",
    desc: "Custom CMS for blogging with rich-text editor, SEO-friendly design, and admin dashboard.",
    link: "#",
    img: "/images/project-3.jpg",
  },
];

const Projects = () => {
    const router = useRouter()

    const handleClick = (link) =>{
        router.push(link)
    }

  return (
    <section className="py-20 bg-surface text-center overflow-x-hidden" id="projects">
      <h2 className="text-3xl md:text-4xl text-accent mb-12" data-aos="fade-up">
        Some of My Projects
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-background rounded-2xl p-6 shadow-lg hover:shadow-accent/40 transition-all duration-300 flex flex-col"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            {p.img && (
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-xl font-semibold text-primary mb-2">{p.title}</h3>
            <p className="text-secondary text-sm flex-1">{p.desc}</p>
            {p.link && (
              <a
                 onClick={()=>handleClick(p.link)}
                target="_blank"
                className="mt-4 inline-block text-accent font-semibold hover:underline"
              >
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
