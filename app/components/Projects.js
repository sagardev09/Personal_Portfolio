import React, { useState, useEffect, useRef } from "react";
import projectsData from "../data/Projectsdata";
import { ProjectCard } from "./ProjectCard";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const CursorBlob = ({ mousePosition, color, delay }) => {
  return (
    <motion.div
      className={`absolute w-64 h-64 rounded-full filter blur-3xl opacity-30 ${color}`}
      animate={{
        x: mousePosition.x - 128,
        y: mousePosition.y - 128,
      }}
      transition={{
        type: "spring",
        damping: 15,
        stiffness: 300,
        mass: 0.5,
        delay: delay,
      }}
    />
  );
};

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const projectsRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useGSAP(() => {
    const projectCards = gsap.utils.toArray(projectsRef.current.children);

    projectCards.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
            end: "bottom center",
            toggleActions: "play none none reverse",
          },
        }
      );
    });
  }, []);

  return (
    <div className="bg-black/[0.96] inset-0 bg-grid-white/[0.06] z-0 relative min-h-screen">
      {/* Existing static background blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/[0.225] rounded-full filter blur-3xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-white/[0.345] rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500/[0.225] rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="absolute -bottom-8 right-20 w-72 h-72 bg-white/[0.445] rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-6000"></div>

      {/* New cursor-following blobs */}
      <div className="fixed inset-0 pointer-events-none">
        <CursorBlob
          mousePosition={mousePosition}
          color="bg-blue-500/[0.34]"
          delay={0}
        />

        <CursorBlob
          mousePosition={mousePosition}
          color="bg-white/[0.34]"
          delay={0.01}
        />
      </div>

      <div className="relative p-8 max-w-[1400px] mx-auto overflow-hidden">
        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-white uppercase font-semibold lg:text-2xl md:text-xl text-base mb-8">
            Some of the Projects
          </h1>
          <div
            ref={projectsRef}
            className="flex items-center justify-center gap-10 flex-wrap"
          >
            {projectsData.map((item) => {
              return (
                <ProjectCard
                  img={item.img}
                  desc={item.description}
                  name={item.projectName}
                  link={item.liveLink}
                  github={item.githubLink}
                  key={item?.githubLink}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
