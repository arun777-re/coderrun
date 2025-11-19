"use client";
import { ProjectsData } from "@/public/images/data/data";
import ProjectCard from "../__components/card/ProjectCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Projects = () => {
  const autoplay = useRef(
    Autoplay({
      delay: 3000,             
      stopOnInteraction: false,
      stopOnMouseEnter: true, 
    })
  );

  return (
    <section className="py-20 bg-surface text-center overflow-x-hidden" id="projects">
      <h2 className="text-3xl md:text-4xl text-accent mb-12" data-aos="fade-up">
        Some of My Projects
      </h2>

      <div className="w-full px-4 md:px-6 h-auto">
        <Carousel
          plugins={[autoplay.current]}
          opts={{
            align: "start",
            loop: true                
          }}
          className="w-full relative"
        >
          <CarouselContent className="px-10">
            {ProjectsData.map((project, index) => (
              <CarouselItem
                key={index}
                className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 px-2 py-4"
              >
                <ProjectCard {...project} i={index} />
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Optional: Next/Prev Buttons */}
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Projects;
