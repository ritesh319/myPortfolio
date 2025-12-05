import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { HiCode } from 'react-icons/hi';

const itemAnimation = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.5,
            ease: [0.23, 1, 0.32, 1]
        }
    }
};

export const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            variants={itemAnimation}
            className="
                group flex flex-col items-stretch gap-6 
                bg-black/40 backdrop-blur-xl
                border border-white/10 
                hover:border-purple-400/30 
                rounded-2xl p-5 sm:p-6 
                shadow-[0_0_25px_rgba(140,0,255,0.25)]
                hover:shadow-[0_0_40px_rgba(140,0,255,0.35)]
                transition-all duration-300
            "
        >
            {/* Image */}
            <div className="w-full">
                <div className="relative aspect-video rounded-xl overflow-hidden">
                    {project.image ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className="object-cover w-full h-full transition-all duration-500 group-hover:scale-105"
                        />
                    ) : (
                        <div className="w-full h-full bg-white/10 flex items-center justify-center">
                            <HiCode className="w-12 h-12 text-white/40" />
                        </div>
                    )}

                    {/* subtle overlay */}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
                </div>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-between">
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
                            {project.title}
                        </h3>
                        <span className="text-xs text-white/40 font-mono">
                            #{String(index + 1).padStart(2, '0')}
                        </span>
                    </div>

                    <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className="
                                    text-[10px] sm:text-xs 
                                    bg-purple-500/10 text-purple-300 
                                    border border-purple-500/20 
                                    px-2 py-1 rounded-full
                                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 pt-4 mt-4 border-t border-white/10">
                    {project.demo && project.demo !== "#" && (
                        <motion.a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="
                                inline-flex items-center gap-2 
                                px-4 py-2 
                                rounded-full font-semibold text-sm 
                                text-white
                                bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500
                                shadow-[0_0_20px_rgba(120,0,255,0.35)]
                                hover:shadow-[0_0_30px_rgba(120,0,255,0.45)]
                                transition-all
                            "
                        >
                            Live Demo
                            <FaExternalLinkAlt className="w-3 h-3" />
                        </motion.a>
                    )}

                    {project.github && (
                        <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="
                                inline-flex items-center gap-2 
                                px-4 py-2 
                                rounded-full font-medium text-sm
                                text-white bg-white/10 
                                border border-white/20 
                                hover:bg-white/20
                                transition-all
                            "
                        >
                            <FaGithub className="w-4 h-4" />
                            Code
                        </motion.a>
                    )}
                </div>
            </div>
        </motion.div>
    );
};
