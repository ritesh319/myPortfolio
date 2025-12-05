// src/config.jsx
import React from 'react';
import { FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";


export const config = {
  developer: {
    name: "Ritesh",
    // short bio used in About/Hero (components may not show this by default, but it's safe to add)
    bio: "I'm a passionate software developer with a strong interest in AI and Full-Stack Development. I love solving complex problems and learning new technologies.",
  },

  social: {
    // used by Projects page to fetch repos
    github: "ritesh319"
  },

  NAV_ITEMS: [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ],

  // Theme-friendly skill categories: brighter accents to make site pop without touching layout code

  experiences: [
    {
      position: "AI Prompt Engineer",
      company: "Outlier AI",
      period: "Nov 2024 - Present",
      location: "Remote",
      description: "Craft and evaluate prompts to extract high-quality, relevant, and accurate outputs from AI models.",
      responsibilities: [
        "Designed and iterated effective prompts to optimize AI-generated responses.",
        "Analyzed model outputs for relevance, clarity, and factual accuracy; recommended improvements.",
        "Collaborated with cross-functional teams to align prompts with product goals and user needs."
      ],
      technologies: ["Prompt Design", "Model Evaluation", "Python", "Data Analysis"]
    }
  ],

  projects: [
  {
    id: 1,
    title: "Axiom — AI-Powered Math Solver",
    description: "Multi-modal web app that solves math problems from text, image, and voice.",
    image: "/axiom.jpg",         // <-- src/assets/axiom.png
    technologies: ["Flask","OCR ","Whisper","Groq API","Python"],
    github: "https://github.com/ritesh319/Axiom",
    demo: "#"
  },
  {
    id: 2,
    title: "Netflix UI Clone",
    description: "Responsive UI clone built using pure HTML and CSS, focused on layout and adaptive design.",
    image: "/netflix.png",       // <-- src/assets/netflix.png
    technologies: ["HTML","CSS","Responsive Design"],
    github: "https://github.com/ritesh319/netflix-ui-clone",
    demo: "#"
  },
  {
    id: 3,
    title: "Auto Capture Selfie by Detecting Smile",
    description: "Real-time smile detection using OpenCV that automatically captures selfies.",
    image: "/smile.png",        // <-- src/assets/selfie.png
    technologies: ["Python","OpenCV","AI"],
    github: "https://github.com/ritesh319/smile-detection",
    demo: "#"
  },
  {
    id: 4,
    title: "Morse Code Translator",
    description: "A simple web application that translates text to Morse code and vice versa. This project provides an intuitive interface for encoding and decoding messages in Morse code.",
    image: "/morse.png",        // <-- src/assets/selfie.png
    technologies: ["Python","Flask"],
    github: "https://github.com/ritesh319/Morse-Code-App",
    demo: "#"
  }
],

 
  contactInfo: [
    {
      icon: <FaGithub className="w-5 h-5" />,
      label: "GitHub",
      value: "@ritesh319",
      link: `https://github.com/ritesh319`
    },
    {
      icon: <HiMail className="w-5 h-5" />,
      label: "Email",
      value: "riteshk3113@gmail.com",
      link: "mailto:riteshk3113@gmail.com"
    },
    {
      icon: <FaMapPin className="w-5 h-5" />,
      label: "Location",
      value: "India",
      link: null
    }
  ]
};

export default config;
