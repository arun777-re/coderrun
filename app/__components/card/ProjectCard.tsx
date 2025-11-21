import { Projects } from "@/app/types/data";
import { motion } from "framer-motion";
import {useRouter} from 'next/navigation'
import React from "react";

type ProjectCardProps = Projects & { i: number };

const ProjectCard:React.FC<ProjectCardProps> = ({
    i,title,description,image,slug
}) => {
    const router = useRouter()

    const handleClick = (link:string) =>{
        router.push(`/portfolio/${link}`)
    }
  return (
       <motion.div
            key={i}
            whileHover={{ scale: .95 }}
            className="relative w-full md:w-[90vw/2] lg:w-[90vw/3] xl:w-[90vw/4]
            border border-border bg-background rounded-2xl p-6 shadow-lg hover:shadow-accent/40 transition-all duration-300 flex flex-col"
            data-aos="fade-up"
            data-aos-delay={i * 50}
          >
            {image && (
              <img
                src={image}
                alt={title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
            <p className="text-secondary text-sm flex-1">{description}</p>
             {slug && (
              <a
                 onClick={()=>handleClick(slug ?? "/")}
                target="_blank"
                className="mt-4 inline-block text-accent font-semibold hover:underline cursor-pointer"
              >
                View Project
              </a>
            )}
          </motion.div>
  )
}

export default ProjectCard