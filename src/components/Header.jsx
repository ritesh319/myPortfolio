import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '../config.jsx';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <>
            <motion.header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    scrolled 
                        ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg' 
                        : 'bg-transparent'
                }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        
                        {/* LOGO */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-2"
                        >
                            <a 
                                href="/"
                                className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
                            >
                                {config.developer.name}.viltrum
                            </a>
                        </motion.div>

                        {/* DESKTOP NAV */}
                        <nav className="hidden md:flex items-center space-x-1">
                            {config.NAV_ITEMS.map((item, index) => (
                                <motion.div
                                    key={item.href}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    {item.label === "Contact" ? (
                                        /* Smooth Scroll Contact */
                                        <a
                                            href="#contact"
                                            className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white relative group"
                                        >
                                            {item.label}

                                            {/* Neon underline on hover */}
                                            <span
                                                className="
                                                    absolute bottom-0 left-0 h-[2px] w-0 
                                                    bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 
                                                    transition-all duration-300 group-hover:w-full
                                                "
                                            ></span>
                                        </a>
                                    ) : (
                                        <Link
                                            to={item.href}
                                            className={`px-4 py-2 text-sm font-medium relative group transition-all ${
                                                isActive(item.href)
                                                    ? "text-white"
                                                    : "text-white/70 hover:text-white"
                                            }`}
                                        >
                                            {item.label}

                                            {/* 🔥 Neon underline (active + hover) */}
                                            <span
                                                className={`
                                                    absolute bottom-0 left-0 h-[2px] rounded-full 
                                                    bg-gradient-to-r from-purple-400 via-indigo-400 to-blue-400 
                                                    transition-all duration-300
                                                    ${isActive(item.href) ? "w-full" : "w-0 group-hover:w-full"}
                                                `}
                                            ></span>
                                        </Link>
                                    )}
                                </motion.div>
                            ))}
                        </nav>

                        {/* MOBILE MENU BUTTON */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <HiX className="w-6 h-6" />
                            ) : (
                                <HiMenu className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* MOBILE MENU */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* BACKDROP */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsMobileMenuOpen(false)}
                        />

                        {/* SLIDE PANEL */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-64 bg-black/95 backdrop-blur-xl border-l border-white/10 z-50 md:hidden overflow-y-auto"
                        >
                            <div className="flex flex-col h-full p-6 pt-20">
                                {config.NAV_ITEMS.map((item) => (
                                    item.label === "Contact" ? (
                                        <a
                                            key={item.href}
                                            href="#contact"
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className="px-4 py-3 text-base font-medium border-b border-white/5 text-white/70 hover:text-white"
                                        >
                                            {item.label}
                                        </a>
                                    ) : (
                                        <Link
                                            key={item.href}
                                            to={item.href}
                                            onClick={() => setIsMobileMenuOpen(false)}
                                            className={`px-4 py-3 text-base font-medium border-b border-white/5 ${
                                                isActive(item.href)
                                                    ? "text-white"
                                                    : "text-white/70 hover:text-white"
                                            }`}
                                        >
                                            {item.label}
                                        </Link>
                                    )
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
