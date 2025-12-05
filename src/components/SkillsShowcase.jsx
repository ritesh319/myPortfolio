import React from "react";
import { HiCode } from "react-icons/hi";
import { motion, useReducedMotion } from "framer-motion";

import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiGithub,
  SiC,
  SiCplusplus,
  SiPython,
  SiFigma,
  SiTailwindcss,
  SiGreensock,
  SiThreedotjs,
} from "react-icons/si";

import { FaJava } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";

const skills = [
  { name: "HTML", icon: <SiHtml5 className="w-10 h-10" /> },
  { name: "CSS", icon: <SiCss3 className="w-10 h-10" /> },
  { name: "JavaScript", icon: <SiJavascript className="w-10 h-10" /> },
  { name: "React.js", icon: <SiReact className="w-10 h-10" /> },
  { name: "Node.js", icon: <SiNodedotjs className="w-10 h-10" /> },
  { name: "GitHub", icon: <SiGithub className="w-10 h-10" /> },
  { name: "C", icon: <SiC className="w-10 h-10" /> },
  { name: "C++", icon: <SiCplusplus className="w-10 h-10" /> },
  { name: "Python", icon: <SiPython className="w-10 h-10" /> },
  { name: "Java", icon: <FaJava className="w-10 h-10" /> },
  { name: "Figma", icon: <SiFigma className="w-10 h-10" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="w-10 h-10" /> },
  { name: "GSAP", icon: <SiGreensock className="w-10 h-10" /> },
  { name: "Framer Motion", icon: <TbBrandFramerMotion className="w-10 h-10" /> },
  { name: "Three.js", icon: <SiThreedotjs className="w-10 h-10" /> },
];

const containerAnimation = {
  hidden: { opacity: 0, x: -30 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, staggerChildren: 0.08 },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
  },
};

const SkillsShowcase = () => {
  const reduce = useReducedMotion();

  return (
    <motion.div
      variants={containerAnimation}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full py-24"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section badge */}
        <motion.div
          variants={itemAnimation}
          className="flex justify-center mb-10"
        >
          <div
            className="
              inline-flex items-center gap-2 
              bg-white/5 backdrop-blur-sm 
              border border-white/10 
              px-5 py-2 rounded-full shadow-lg
            "
          >
            <HiCode className="w-5 h-5 text-white/80" />
            <span className="text-sm text-white/80 font-semibold">
              Tech Stack
            </span>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerAnimation}
          className="
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4
          "
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemAnimation}
              className="relative group"
            >
              {/* Card */}
              <motion.div
                whileHover={
                  reduce
                    ? {}
                    : {
                        rotateY: 8,
                        rotateX: 6,
                        scale: 1.04,
                      }
                }
                className="
                  bg-black/40 backdrop-blur-xl
                  border border-white/10 
                  rounded-2xl p-6 
                  flex flex-col items-center gap-4
                  transition-all duration-300
                  shadow-[0_0_20px_rgba(140,0,255,0.25)]
                  group-hover:shadow-[0_0_35px_rgba(140,0,255,0.35)]
                "
              >
                <div className="text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>

                <span className="text-sm sm:text-base text-white/80 font-semibold">
                  {skill.name}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default SkillsShowcase;
