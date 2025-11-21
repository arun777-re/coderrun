"use client";

import { ProjectsData } from "@/public/data/data";
import ProjectCard from "../__components/card/ProjectCard";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { useRef, useEffect, useCallback } from "react";

const Projects = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 2600,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [autoplay.current]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="py-10 bg-surface/80 text-center overflow-x-hidden" id="projects">
      <h2 className="text-3xl md:text-4xl text-accent mb-8" data-aos="fade-up">
        Some of My Projects
      </h2>

      <div className="w-full px-4 md:px-16 h-auto ">

        {/* Embla viewport */}
        <div className="embla w-full relative overflow-hidden" ref={emblaRef} >
          <div className="embla__container flex gap-4 ml-2 sm:ml-0 sm:px-4 rounded-lg py-10  ">
            {ProjectsData.map((project, index) => (
              <div
                key={index}
                className="
                  embla__slide
                  shrink-0
                  basis-full 
                  md:basis-1/2 
                  lg:basis-1/3 
                 
                "
              >
                <ProjectCard {...project} i={index} />
              </div>
            ))}
          </div>


        </div>
        <div className="absolute flex gap-4 top-110 z-20 items-center left-1/2 transform -translate-x-1/2">
          {/* Buttons */}
          <button
            onClick={scrollPrev}
            className=" bg-accent/20 p-2 rounded-full"
          >
            ‹
          </button>

          <button
            onClick={scrollNext}
            className="a bg-accent/20 p-2 rounded-full"
          >
            ›
          </button>
</div>
      </div>
    </section>
  );
};

export default Projects;
