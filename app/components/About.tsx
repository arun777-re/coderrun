'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../__components/Button";
import { useRouter } from "next/navigation";
import { ROUTES } from "../constants/routes";

const AboutSection = () => {
  const router = useRouter();

  return (
    <section className="w-full bg-neutral-900 text-white py-20 px-6 md:px-20 overflow-x-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-5xl font-semibold text-blue-400">
            About CoderRun Software Solutions
          </h2>
          <p className="text-gray-300 leading-relaxed">
            At <span className="text-blue-400 font-medium">CoderRun</span>, we
            build digital solutions that grow with your business. From
            enterprise-grade web apps to full eCommerce systems, our mission is
            to deliver high-performance software that helps you scale.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Our team of engineers, designers, and strategists work together to
            craft scalable, secure, and visually stunning applications powered by
            modern technologies like <span className="text-blue-400">Next.js</span>,{" "}
            <span className="text-blue-400">Node.js</span>, and{" "}
            <span className="text-blue-400">MongoDB</span>.
          </p>

          <div className="grid grid-cols-2 gap-4 text-gray-300 mt-6">
            <div>💻 10+ Projects Delivered</div>
            <div>⚡ Scalable Architecture</div>
            <div>🧠 Expert Dev Team</div>
            <div>🔒 Secure & Reliable</div>
          </div>

          <Button
            text="Explore Our Services"
            onClick={() => router.push(ROUTES.SERVICES)}
          />
        </motion.div>

        {/* Right Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[400px]"
        >
          <Image
            src="/images/banner-bg.jpg"
            alt="CoderRun Team"
            fill
            width={1200}
            height={630}
            quality={85}
            loading="lazy"
            className="object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
