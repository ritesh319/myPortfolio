import React from 'react';
import { motion } from 'framer-motion';
import { config } from '../config.jsx';

const Footer = () => {
    return (
        <footer
            id="contact"
            className="
                py-20 md:py-28 
                border-t border-white/10 
                relative overflow-hidden
            "
        >
            {/* 🔥 Neon glow behind footer */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-purple-600/20 blur-[160px] rounded-full"></div>
                <div className="absolute top-0 right-20 w-[400px] h-[200px] bg-blue-500/20 blur-[150px] rounded-full"></div>
            </div>

            {/* Subtle top neon line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 opacity-40"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center space-y-10">

                        {/* Heading */}
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white bg-gradient-to-r from-purple-200 via-indigo-200 to-blue-200 bg-clip-text text-transparent">
                                Get In Touch
                            </h2>

                            <p className="text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
                                I'm open to collaborations, freelance work, and exciting opportunities.
                                Let’s build something meaningful together.
                            </p>
                        </div>

                        {/* Contact Cards */}
                        <div className="flex flex-wrap justify-center gap-6">
                            {config.contactInfo.map((contact, index) => (
                                <motion.a
                                    key={index}
                                    href={contact.link || '#'}
                                    target={contact.link ? "_blank" : undefined}
                                    rel={contact.link ? "noopener noreferrer" : undefined}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -3 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="
                                        flex items-center gap-3 
                                        px-6 py-3 
                                        bg-black/40 
                                        border border-white/10 
                                        rounded-full 
                                        hover:bg-white/5 hover:border-white/20 
                                        transition-all duration-300 
                                        backdrop-blur-xl 
                                        shadow-[0_0_25px_rgba(120,0,255,0.25)]
                                        hover:shadow-[0_0_35px_rgba(120,0,255,0.35)]
                                        group
                                    "
                                >
                                    <div className="text-white/80 group-hover:text-white transition-colors">
                                        {contact.icon}
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs text-white/50">{contact.label}</div>
                                        <div className="text-sm font-medium text-white/80 group-hover:text-white">
                                            {contact.value}
                                        </div>
                                    </div>
                                </motion.a>
                            ))}
                        </div>

                        {/* Footer Bottom */}
                        <div className="pt-10 border-t border-white/10">
                            <p className="text-sm text-white/40">
                                © {new Date().getFullYear()} {config.developer.name}. Crafted with passion & precision.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
