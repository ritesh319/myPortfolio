import React from "react";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import { config } from "../config.jsx";
import { ProjectCard } from "../components/ProjectCard";

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.08 },
  },
};

const titleAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  },
};

const ProjectsPage = () => {
  const projects = config.projects || [];

  return (
    <section className="py-20 md:py-28 relative min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          className="space-y-16"
        >

          {/* HEADER */}
          <motion.div variants={titleAnimation} className="space-y-6 text-center">
            
            <div
              className="
                inline-flex items-center space-x-2 
                bg-gradient-to-r from-purple-500/20 via-indigo-500/20 to-blue-500/20
                border border-white/10 px-4 py-2 rounded-full 
                backdrop-blur-sm shadow-md shadow-purple-500/10
              "
            >
              <span className="text-sm font-semibold text-white/80">Projects</span>
            </div>

            <h2
              className="
                text-4xl sm:text-5xl md:text-6xl font-extrabold 
                bg-gradient-to-r from-purple-400 via-indigo-300 to-blue-300 
                bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(120,120,255,0.3)]
              "
            >
              My Best Works
            </h2>

            <p className="max-w-2xl mx-auto text-white/60 text-base sm:text-lg leading-relaxed">
              A curated showcase of the projects I'm most proud of — thoughtfully built, designed, and engineered.
            </p>

            <div className="h-px w-full bg-gradient-to-r from-purple-400/20 via-indigo-400/40 to-blue-400/20 mt-8" />
          </motion.div>

          {/* PROJECT GRID — SHOW ALL PROJECTS */}
          <motion.div
            variants={containerAnimation}
            className="
              grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3
              gap-6 w-full max-w-6xl mx-auto
            "
          >
            {projects.map((project, idx) => (
              <ProjectCard key={project.id || idx} project={project} index={idx} />
            ))}
          </motion.div>

          {/* BACK BUTTON */}
          <div className="flex justify-center mt-10">
            <a
              href="/"
              className="
                inline-flex items-center gap-2 px-6 py-3 rounded-full 
                bg-gradient-to-r from-purple-400 to-blue-400 
                text-black font-semibold text-sm hover:opacity-90 
                transition-all duration-300 shadow-lg
              "
            >
              Back to Home
              <HiArrowRight className="w-4 h-4" />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsPage;
