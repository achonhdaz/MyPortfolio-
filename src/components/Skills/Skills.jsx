import React from 'react';
import { myskills, spokenLanguages } from '../../constants';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTerminal, FaTools, FaLanguage } from 'react-icons/fa';

const categoryIcons = {
  'Frontend Development': <FaCode className="text-cyan-400" />,
  'Backend & Databases': <FaServer className="text-blue-400" />,
  'Programming Languages': <FaTerminal className="text-sky-400" />,
  'Tools & DevOps': <FaTools className="text-teal-400" />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 sm:px-10 lg:px-20 font-sans relative bg-skills-gradient overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-cyan-300 text-xs uppercase tracking-wider font-semibold mb-3">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Technical Skills & Toolkit
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 font-light">
            A comprehensive overview of my technical stack, engineering toolset, and multilingual proficiency
          </p>
        </motion.div>

        {/* Skills Categories Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {myskills.map((category) => (
            <motion.div
              key={category.title}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative rounded-2xl p-[1px] bg-gradient-to-b from-blue-500/30 via-blue-900/20 to-transparent group"
            >
              <div className="bg-[#060d1d]/90 backdrop-blur-md p-6 sm:p-8 rounded-2xl h-full shadow-[0_0_20px_rgba(37,99,235,0.12)] group-hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] transition-all duration-300">
                {/* Category Header */}
                <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-blue-900/30">
                  <span className="text-2xl p-2.5 rounded-xl bg-blue-950/70 border border-blue-800/40 group-hover:scale-110 transition-transform">
                    {categoryIcons[category.title] || <FaTools className="text-cyan-400" />}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors font-heading">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.06, y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      className="flex items-center space-x-2.5 bg-blue-950/25 hover:bg-blue-900/40 border border-blue-800/30 hover:border-cyan-400/60 rounded-xl py-2 px-3 transition-colors duration-200 shadow-sm cursor-default"
                    >
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain flex-shrink-0"
                      />
                      <span className="text-xs sm:text-sm font-medium text-gray-200 truncate">
                        {skill.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Spoken Languages Section with Animated Blue-to-Cyan Progress */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#060d1d]/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-blue-900/30 shadow-[0_0_20px_rgba(37,99,235,0.12)]"
        >
          <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-blue-900/30">
            <span className="text-2xl p-2.5 rounded-xl bg-blue-950/60 border border-blue-800/40 text-cyan-400">
              <FaLanguage />
            </span>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-heading">
                Spoken Languages
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">Multilingual communication capabilities</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {spokenLanguages.map((lang) => (
              <motion.div
                key={lang.name}
                whileHover={{ y: -3 }}
                className="bg-blue-950/20 border border-blue-800/30 rounded-xl p-4 flex flex-col justify-between hover:border-cyan-500/50 transition duration-200"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-bold text-white text-base">{lang.name}</span>
                  <span className="text-xs text-cyan-300 font-medium px-2 py-0.5 rounded-full bg-blue-900/50">
                    {lang.level}
                  </span>
                </div>
                <div className="w-full bg-gray-800/80 rounded-full h-2 mt-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                    className="bg-gradient-to-r from-blue-600 via-cyan-400 to-sky-300 h-2 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;