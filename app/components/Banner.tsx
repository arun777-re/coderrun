"use client";
import { usePathname, useRouter } from "next/navigation";
import Button from "../__components/Button";
import { ROUTES } from "../constants/routes";
import { motion, Variants } from "framer-motion";
import React from "react";
import Image from "next/image";

type BannerProps = {
  title?: string;
  subtitle?: string;
};

const Banner: React.FC<BannerProps> = ({ title, subtitle }) => {
  const router = useRouter();
  const text = "Providing Scalable Solutions for Your Business";
  const params = usePathname();

  const letterVariant: Variants = {
    hidden: { opacity: 0, y: 4 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (custom as number) * 0.06,
        type: "spring",
        stiffness: 120,
      },
    }),
  };

  return (
    <>
      <section
        className={`${
          params === "/" ? "visible" : "hidden"
        } relative w-screen h-[98vh] flex overflow-x-hidden items-center justify-center
     text-center  overflow-hidden`}
      >
        <div className="relative h-full w-full">
          <video
            src={"/images/banner.mp4"}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover z-10"
          />
          <div className="absolute inset-0 bg-black/90 z-20" />
        </div>

        <article className="absolute  w-full h-full top-1/2 left-0 z-30 text-white px-4 ">
          <h1 className=" mb-6 leading-snug text-accent" data-aos="fade-up">
            {text.split("").map((char, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterVariant}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h1>
          <p
            className="text-secondary  text-lg sm:text-xl mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            CoderRun Software Solutions
          </p>
          <Button
            onClick={() => router.push(ROUTES.SERVICES)}
            text="Get Started"
          />
        </article>
      </section>
      <section
        className={`${
          params === "/" ? "hidden" : "visible"
        } relative w-screen h-[98vh] flex
    items-center justify-center
     text-center bg-linear-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a] overflow-hidden`}
      >
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-0">
          <Image
            src={"/images/bg-01.jpg"}
            alt="banner-image"
            fill
            loading="lazy"
            className="w-full h-full object-fill object-center z-10"
          />
          <div className="absolute inset-0 z-20 bg-black/90" />
        </div>

        <article className="absolute w-full h-full top-1/2 left-0  text-primary px-4 z-30">
          <h1
            className="text-3xl sm:text-5xl md:text-6xl font-normal mb-6 leading-snug text-accent"
            data-aos="fade-up"
          >
            {title &&
              title.split("").map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterVariant}
                  initial="hidden"
                  animate="visible"
                  className="inline-block text-accent"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
          </h1>
          <p
            className="text-font text-lg sm:text-xl mb-8"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {subtitle}
          </p>
          <Button onClick={() => router.push(ROUTES.HOME)} text="Home" />
        </article>
      </section>
    </>
  );
};

export default Banner;
