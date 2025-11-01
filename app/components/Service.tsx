"use client";
import ServiceCard from "../__components/card/ServiceCard";

const Services = () => {
   const services = [
    {
      title: "Custom Web Development",
      desc: "Build high-performing, scalable web applications with modern stacks like Next.js, Node.js, and MongoDB.",
      icon: "💻",
    },
    {
      title: "E-Commerce Solutions",
      desc: "Develop full-fledged online stores with secure checkout, coupon systems, and integrated shipping APIs.",
      icon: "🛒",
    },
    {
      title: "Cloud & DevOps Services",
      desc: "Automate workflows, set up CI/CD pipelines, and scale effortlessly with Docker, Redis, and AWS.",
      icon: "☁️",
    },
    {
      title: "UI/UX Design",
      desc: "Design intuitive, user-centric interfaces that enhance brand trust and improve conversion rates.",
      icon: "🎨",
    },
    {
      title: "SEO & Performance Optimization",
      desc: "Boost your search rankings and speed with clean code, optimized images, and modern SEO practices.",
      icon: "🚀",
    },
    {
      title: "Maintenance & Support",
      desc: "Ensure long-term stability with ongoing updates, monitoring, and performance improvements.",
      icon: "🔧",
    },
  ];

  return (
    <section className="py-20 bg-secondary  overflow-x-hidden" id="services">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2
          className="text-4xl font-oswald font-bold text-primary mb-4"
          data-aos="fade-up"
        >
          Our Services
        </h2>
        <p
          className="text-font max-w-2xl mx-auto mb-14"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Empowering businesses through scalable, secure, and efficient digital
          solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
