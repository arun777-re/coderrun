"use client";
import { motion } from "framer-motion";
import { Code, ShoppingCart, Cpu, Server, Layout } from "lucide-react";
import ServiceCard from "../__components/card/ServiceCard";

const services = [
  {
    icon: <Code size={40} />,
    title: "Full-Stack Development",
    desc: "We build scalable web applications using the MERN/Next.js stack with clean architecture, SOLID principles, and high performance.",
  },
  {
    icon: <ShoppingCart size={40} />,
    title: "E-Commerce Solutions",
    desc: "Custom-built carts, coupon systems, payment gateways (Razorpay/Stripe), and SEO-optimized storefronts.",
  },
  {
    icon: <Cpu size={40} />,
    title: "AI & Automation",
    desc: "We integrate AI tools, chatbots, and background workers (BullMQ) to automate and optimize your business workflow.",
  },
  {
    icon: <Server size={40} />,
    title: "DevOps & Performance",
    desc: "Docker, Redis caching, and CI/CD pipelines to ensure your apps run fast, secure, and efficiently on the cloud.",
  },
  {
    icon: <Layout size={40} />,
    title: "UI/UX & Frontend Engineering",
    desc: "Pixel-perfect, responsive interfaces built with Tailwind, Framer Motion, and Radix UI for a seamless user experience.",
  },
];

const WhatWeOffer = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
        
          <ServiceCard key={i} {...service} index={i}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
