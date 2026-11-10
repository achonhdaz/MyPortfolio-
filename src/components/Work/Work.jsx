import React, { useState } from 'react';
import { myProjects } from '../../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaCheck, FaCalendarAlt, FaTimes } from 'react-icons/fa';

const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ["All", "Full Stack", "Mobile"];

  const filteredProjects = selectedCategory === "All"
    ? myProjects
    : myProjects.filter(p => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  return (
    <section
      id="work"
      className="py-20 px-6 sm:px-10 lg:px-20 font-sans relative bg-skills-gradient overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-cyan-300 text-xs uppercase tracking-wider font-semibold mb-3">
            Portfolio Showcase
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 font-light">
            A selection of production-level web platforms, full-stack applications, and mobile solutions I have built
          </p>

          {/* Category Filter Pills with Active Indicator */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mt-8">
            {categories.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "text-white"
                      : "text-gray-400 hover:text-white bg-[#060d1d]/80 border border-blue-900/40 hover:border-cyan-500/50"
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeFilterPill"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-[0_0_15px_rgba(14,165,233,0.5)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid with Smooth Layout Animation */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-[#060d1d]/85 backdrop-blur-md rounded-2xl border border-blue-900/30 overflow-hidden shadow-[0_0_20px_rgba(37,99,235,0.12)] hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:border-cyan-500/50 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Card Top / Header */}
                <div className="p-6 sm:p-7">
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-900/40 text-cyan-300 border border-blue-700/40">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-400 flex items-center space-x-1">
                      <FaCalendarAlt size={10} />
                      <span>{project.date}</span>
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1 line-clamp-2 font-heading">
                    {project.title}
                  </h3>
                  <p className="text-xs text-cyan-400 font-medium mb-3">
                    {project.subtitle}
                  </p>

                  <p className="text-gray-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 font-light">
                    {project.description}
                  </p>

                  {/* Highlights preview */}
                  <div className="space-y-1.5 mb-5">
                    {project.features.slice(0, 2).map((feat, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-gray-300/80">
                        <FaCheck className="text-cyan-400 mt-0.5 flex-shrink-0 text-[10px]" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-blue-900/30">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-blue-950/40 text-cyan-200 border border-blue-800/40"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/5 text-gray-400">
                        +{project.tags.length - 5}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="px-6 py-4 bg-blue-950/30 border-t border-blue-900/30 flex items-center justify-between">
                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="text-xs font-semibold text-cyan-300 hover:text-white flex items-center space-x-1 transition-colors cursor-pointer group-hover:underline"
                  >
                    <span>View Details &rarr;</span>
                  </button>

                  <motion.a
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1.5 text-xs text-gray-300 hover:text-cyan-300 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 transition-colors"
                  >
                    <FaGithub size={13} />
                    <span>Repository</span>
                  </motion.a>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal for Detailed Project View with Framer AnimatePresence */}
        <AnimatePresence>
          {activeModalProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.93, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.93, y: 20 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="bg-[#050b1a] border border-blue-700/50 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative"
              >
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-5 right-5 text-gray-400 hover:text-white p-2 rounded-full hover:bg-white/10 transition cursor-pointer"
                >
                  <FaTimes size={18} />
                </button>

                <div className="flex items-center space-x-2 text-xs text-cyan-300 font-semibold mb-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-900/50 border border-blue-600/40">
                    {activeModalProject.category}
                  </span>
                  <span>•</span>
                  <span>{activeModalProject.date}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-1 font-heading">
                  {activeModalProject.title}
                </h3>
                <p className="text-sm text-cyan-400 font-medium mb-4">
                  {activeModalProject.subtitle}
                </p>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {activeModalProject.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 font-heading">
                    Key Technical Features & Architecture
                  </h4>
                  <ul className="space-y-2.5">
                    {activeModalProject.features.map((feat, i) => (
                      <li key={i} className="flex items-start space-x-2 text-sm text-gray-300">
                        <FaCheck className="text-cyan-400 mt-1 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 font-heading">
                    Technologies & Frameworks
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-lg bg-blue-950/60 border border-blue-700/40 text-cyan-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end space-x-3 pt-4 border-t border-blue-900/40">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={activeModalProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-xl shadow-md transition"
                  >
                    <FaGithub size={16} />
                    <span>Visit GitHub</span>
                  </motion.a>
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="text-xs sm:text-sm px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white transition cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Work;