import React from 'react';
import { MyExperience } from '../../constants';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 px-6 sm:px-10 lg:px-20 font-sans relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-cyan-300 text-xs uppercase tracking-wider font-semibold mb-3">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 font-light">
            Hands-on software engineering experiences across internships, final year capstone, and production-ready systems
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative border-l-2 border-blue-900/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {/* Animated Glowing Light traversing down timeline */}
          <div className="absolute -left-[2px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-cyan-400 to-transparent pointer-events-none"></div>

          {MyExperience.map((exp, index) => (
            <motion.div
              key={exp.id || index}
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Glowing Node with Radar Ping */}
              <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 rounded-full bg-[#040918] border-2 border-blue-500 flex items-center justify-center text-cyan-400 group-hover:scale-125 group-hover:border-cyan-300 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.9)] transition-all duration-300">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-25"></span>
                <FaBriefcase size={12} />
              </div>

              {/* Experience Card */}
              <motion.div
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="bg-[#060d1d]/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-blue-900/30 shadow-[0_0_20px_rgba(37,99,235,0.12)] group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(14,165,233,0.25)] transition-all duration-300"
              >
                {/* Header: Company, Role & Date */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-blue-900/30">
                  <div className="flex items-center space-x-4">
                    {exp.img && (
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-white/5 border border-blue-500/30 flex-shrink-0 p-1 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={exp.img}
                          alt={exp.company}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                    )}
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors font-heading">
                          {exp.role}
                        </h3>
                        {exp.type && (
                          <span className="text-xs px-2.5 py-0.5 rounded-full font-semibold bg-blue-950/60 text-cyan-300 border border-blue-700/40">
                            {exp.type}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-3 text-sm text-gray-400 mt-1">
                        <span className="font-semibold text-gray-200">{exp.company}</span>
                        {exp.location && (
                          <span className="flex items-center space-x-1 text-gray-400">
                            <FaMapMarkerAlt size={11} className="text-cyan-400" />
                            <span>{exp.location}</span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Date badge */}
                  <div className="inline-flex items-center space-x-1.5 self-start sm:self-auto px-3 py-1 rounded-full bg-blue-950/60 border border-blue-700/30 text-cyan-300 text-xs font-medium">
                    <FaCalendarAlt size={11} />
                    <span>{exp.date}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 font-light">
                  {exp.desc}
                </p>

                {/* Bullet Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-2 mb-6">
                    {exp.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-300/90">
                        <FaCheck className="text-cyan-400 mt-1 flex-shrink-0 text-xs" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack Pills */}
                <div>
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2 font-mono">
                    Technologies & Tools:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.08 }}
                        className="text-xs font-medium px-2.5 py-1 rounded-lg bg-blue-950/40 border border-blue-800/40 text-cyan-200 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>

              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;