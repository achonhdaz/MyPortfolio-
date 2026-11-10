import React from 'react';
import { myEducation, certifications } from '../../constants';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaCalendarAlt, FaMapMarkerAlt, FaCheck } from 'react-icons/fa';

const Education = () => {
  return (
    <section
      id="education"
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
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 font-light">
            Formal engineering education, university degrees, and industry-recognized networking credentials
          </p>
        </motion.div>

        {/* Degrees Grid */}
        <div className="space-y-8 mb-16">
          {myEducation.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-[#060d1d]/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-blue-900/30 shadow-[0_0_20px_rgba(37,99,235,0.12)] hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.25)] transition-all duration-300 group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 mb-4 border-b border-blue-900/30">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/30 border border-blue-500/40 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-blue-600/25 transition-all duration-300 flex-shrink-0">
                    <FaGraduationCap size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors font-heading">
                      {edu.degree}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-400 mt-1">
                      <span className="font-semibold text-gray-200">{edu.institution}</span>
                      <span className="flex items-center space-x-1">
                        <FaMapMarkerAlt size={11} className="text-cyan-400" />
                        <span>{edu.location}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="inline-flex items-center space-x-1.5 self-start sm:self-auto px-3 py-1 rounded-full bg-blue-950/60 border border-blue-700/30 text-cyan-300 text-xs font-semibold">
                  <FaCalendarAlt size={11} />
                  <span>{edu.period}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 font-light">
                {edu.description}
              </p>

              {edu.highlights && (
                <ul className="space-y-2">
                  {edu.highlights.map((item, i) => (
                    <li key={i} className="flex items-start space-x-2 text-xs sm:text-sm text-gray-300/90">
                      <FaCheck className="text-cyan-400 mt-1 flex-shrink-0 text-xs" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </div>

        {/* Certifications Sub-section */}
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <span className="p-2.5 rounded-xl bg-blue-900/40 border border-blue-500/40 text-cyan-400 text-lg">
              <FaCertificate />
            </span>
            <h3 className="text-2xl font-bold text-white font-heading">
              Cisco Certified Credentials
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-[#060d1d]/85 backdrop-blur-md p-6 rounded-2xl border border-blue-900/30 hover:border-cyan-500/50 shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-[0_0_12px_rgba(37,99,235,0.4)]">
                      {cert.badge}
                    </span>
                    <span className="text-xs text-emerald-400 font-semibold flex items-center space-x-1">
                      <FaCheck size={10} />
                      <span>Verified</span>
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors font-heading">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-cyan-400 font-medium mb-3">
                    {cert.issuer}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 font-light">
                    {cert.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-blue-900/30">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-blue-950/40 text-cyan-200 border border-blue-800/40"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;