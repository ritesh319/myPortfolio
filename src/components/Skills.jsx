import React from "react";
import { motion } from "framer-motion";
import { HiChip, HiSparkles } from "react-icons/hi";
import { config } from "../config.jsx";

const getLevelPercentage = (level) => {
  switch (level) {
    case "Expert":
      return 95;
    case "Advanced":
      return 85;
    case "Intermediate":
      return 70;
    case "Beginner":
      return 50;
    default:
      return 75;
  }
};

const containerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  },
};

const SkillCard = ({ skill }) => {
  const levelPercentage = getLevelPercentage(skill.level);

  return (
    <motion.div variants={itemAnimation} className="relative flex flex-col">
      <div
        className="
                p-4 rounded-xl 
                bg-black/40 backdrop-blur-xl 
                border border-white/10 
                hover:border-purple-400/20 
                transition-all duration-300
                shadow-[0_0_20px_rgba(140,0,255,0.15)]
                hover:shadow-[0_0_30px_rgba(140,0,255,0.25)]
            "
      >
        {/* Title & Badge */}
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-base font-medium text-white">{skill.name}</h3>

          {skill.hot && (
            <div
              className="
                            bg-purple-500/20 text-purple-300 
                            border border-purple-500/30
                            px-2 py-0.5 text-xs rounded-full 
                            flex items-center gap-1
                        "
            >
              <HiSparkles className="w-3 h-3" />
              Hot
            </div>
          )}
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${levelPercentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="
                        h-full rounded-full 
                        bg-gradient-to-r 
                        from-purple-400 via-indigo-400 to-blue-400
                    "
          />
        </div>

        {/* Level */}
        <div className="text-xs text-white/60 mt-2 flex justify-between">
          <span>Proficiency</span>
          <span className="font-medium text-white/80">{skill.level}</span>
        </div>
      </div>
    </motion.div>
  );
};

const CategorySection = ({ category }) => (
  <div className="space-y-6">
    {/* Category header */}
    <div className="flex items-center gap-3">
      <div className="p-2.5 rounded-xl bg-white/10 border border-white/10">
        <div className="w-6 h-6 text-purple-300">{category.icon}</div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-white">{category.title}</h3>
        <p className="text-sm text-white/60">{category.description}</p>
      </div>
    </div>

    {/* Skill list */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {category.skills.map((skill, idx) => (
        <SkillCard key={idx} skill={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skills = config.skills;

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 left-32 w-[500px] h-[400px] bg-purple-600/20 blur-[150px] rounded-full" />
        <div className="absolute bottom-0 right-32 w-[500px] h-[400px] bg-blue-500/20 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerAnimation}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Heading */}
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <motion.div
              variants={itemAnimation}
              className="
                            inline-flex items-center gap-2
                            bg-white/5 border border-white/10 
                            px-4 py-2 rounded-full backdrop-blur-sm
                        "
            >
              <HiChip className="w-5 h-5 text-white/80" />
              <span className="text-sm font-medium text-white/80">
                Skills & Technologies
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              Technical Proficiency
            </h2>
            <p className="text-lg text-white/60">
              Tools & technologies I use every day to build meaningful digital
              experiences.
            </p>
          </div>

          {/* Skill categories */}
          <motion.div variants={containerAnimation} className="space-y-16">
            {skills.map((category, index) => (
              <CategorySection key={index} category={category} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
