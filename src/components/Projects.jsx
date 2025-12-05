import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import { config } from '../config.jsx';
import { ProjectCard } from './ProjectCard';

const containerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    }
};

const Projects = () => {
    const projects = useMemo(() => {
        return (config.projects || []).slice(0, 3);
    }, []);

    return (
        <section id="projects" className="py-24 md:py-32 relative overflow-hidden">

            {/* neon backglow */}
            <div className="absolute inset-0 pointer-events-none -z-10">
                <div className="absolute top-0 left-10 w-[500px] h-[400px] bg-purple-600/20 blur-[150px] rounded-full" />
                <div className="absolute bottom-0 right-10 w-[500px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    variants={containerAnimation}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="space-y-14"
                >
                    {/* Heading */}
                    <div className="text-center space-y-4 max-w-2xl mx-auto">
                        <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-sm">
                            <span className="text-sm font-semibold bg-gradient-to-r from-purple-200 via-indigo-200 to-blue-200 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </div>

                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                            Best of My Work
                        </h2>

                        <p className="text-lg text-white/60 max-w-xl mx-auto">
                            A curated selection of my best projects —
                            showcasing problem-solving, creativity, and engineering.
                        </p>
                    </div>

                    {/* Projects Grid */}
                    <motion.div
                        variants={containerAnimation}
                        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                    >
                        {projects.length === 0 ? (
                            <div className="col-span-full text-center text-white/60">
                                No projects found.
                            </div>
                        ) : (
                            projects.map((project, idx) => (
                                <ProjectCard key={idx} project={project} index={idx} />
                            ))
                        )}
                    </motion.div>

                    {/* View All */}
                    <div className="flex justify-center">
                        <Link
                            to="/projects"
                            className="
                                inline-flex items-center gap-2 
                                px-6 py-3 
                                rounded-full font-semibold
                                text-white
                                bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500
                                shadow-[0_0_20px_rgba(120,0,255,0.35)]
                                hover:shadow-[0_0_30px_rgba(120,0,255,0.45)]
                                transition-all
                            "
                        >
                            View All Projects
                            <HiArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
