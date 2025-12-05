import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { HiBriefcase, HiCalendar, HiLocationMarker } from 'react-icons/hi';
import { config } from '../config.jsx';

const containerAnimation = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, staggerChildren: 0.15 }
    }
};

const itemAnimation = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] }
    }
};

const Experience = () => {
    const experiences = config.experiences || [];
    const motionReduce = useReducedMotion();

    if (!experiences.length) return null;

    return (
        <section id="experience" className="py-20 md:py-28 relative overflow-hidden">

            {/* 🔥 neon backglow */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute left-10 top-20 w-[400px] h-[400px] bg-purple-600/20 blur-[140px] rounded-full"></div>
                <div className="absolute right-10 bottom-20 w-[400px] h-[400px] bg-blue-500/20 blur-[140px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="flex justify-center mb-14"
                >
                    <motion.div
                        variants={itemAnimation}
                        className="inline-flex items-center gap-2 
                                   bg-white/5 border border-white/10 
                                   px-5 py-2 rounded-full 
                                   backdrop-blur-sm shadow-lg"
                    >
                        <HiBriefcase className="text-white/80 w-5 h-5" />
                        <span className="text-white/80 text-sm font-semibold">
                            Work Experience
                        </span>
                    </motion.div>
                </motion.div>

                {/* Experience Cards */}
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-8 max-w-4xl mx-auto"
                >
                    {experiences.map((exp, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemAnimation}
                            whileHover={
                                motionReduce
                                    ? {}
                                    : {
                                        scale: 1.02,
                                        y: -4,
                                        transition: { duration: 0.3 }
                                    }
                            }
                            className="
                                bg-black/40 
                                backdrop-blur-xl 
                                border border-white/10
                                rounded-2xl p-6 sm:p-8 
                                shadow-[0_0_25px_rgba(140,0,255,0.25)]
                                hover:shadow-[0_0_40px_rgba(140,0,255,0.35)]
                                transition-all duration-300
                            "
                        >
                            {/* Header Row */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                                        <HiBriefcase className="w-6 h-6 text-white" />
                                    </div>

                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white">
                                            {exp.position}
                                        </h3>
                                        <p className="text-white/60 text-sm">{exp.company}</p>
                                    </div>
                                </div>

                                {exp.location && (
                                    <div className="flex items-center gap-1 text-xs text-white/60">
                                        <HiLocationMarker className="w-4 h-4" />
                                        <span>{exp.location}</span>
                                    </div>
                                )}
                            </div>

                            {/* Period */}
                            <div className="flex items-center gap-2 text-white/60 text-sm mb-4">
                                <HiCalendar className="w-4 h-4" />
                                <span>{exp.period}</span>
                            </div>

                            {/* Description */}
                            {exp.description && (
                                <p className="text-white/70 text-sm sm:text-base leading-relaxed mb-4">
                                    {exp.description}
                                </p>
                            )}

                            {/* Tags */}
                            {exp.technologies && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {exp.technologies.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="text-[10px] sm:text-xs 
                                                       bg-purple-500/10 
                                                       text-purple-300 
                                                       border border-purple-500/20
                                                       px-2 py-1 rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Responsibilities */}
                            {exp.responsibilities && (
                                <ul className="space-y-2 mt-2">
                                    {exp.responsibilities.map((line, i) => (
                                        <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                                            <span className="text-white/40 mt-1">▸</span>
                                            <span>{line}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
