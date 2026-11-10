import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import {
  FaDownload,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaGraduationCap,
} from 'react-icons/fa';
import img1 from '../../assets/images/img1.jpg';
import { personalInfo } from '../../constants';

const About = () => {
  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about"
      className="relative min-h-[calc(100vh-80px)] flex flex-col justify-center py-16 sm:py-24 px-6 sm:px-10 lg:px-20 font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Side: Text and Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1"
        >
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-950/40 border border-blue-500/40 text-cyan-300 text-xs sm:text-sm font-medium mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(14,165,233,0.2)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Full-Time Roles & Opportunities</span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight mb-3 font-heading">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent">
              {personalInfo.name}
            </span>
          </h1>

          {/* Typing Subtitle */}
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 text-gray-200">
            <span className="text-cyan-400 font-mono text-base sm:text-xl">&lt;role&gt; </span>
            <span className="text-white font-bold underline decoration-cyan-500/50 underline-offset-4">
              <Typewriter
                words={personalInfo.roles}
                loop
                cursor
                cursorStyle="|"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1800}
              />
            </span>
            <span className="text-cyan-400 font-mono text-base sm:text-xl"> &lt;/role&gt;</span>
          </h2>

          {/* Location & Education Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6 text-xs sm:text-sm text-gray-300">
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-cyan-500/40 transition">
              <FaMapMarkerAlt className="text-cyan-400" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:border-blue-500/40 transition">
              <FaGraduationCap className="text-blue-400" />
              <span>Engineering Diploma in Software Engineering</span>
            </div>
          </div>

          {/* Bio text */}
          <p className="text-base sm:text-lg text-gray-300/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-8 font-light">
            {personalInfo.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-white py-3.5 px-7 rounded-full text-base font-bold transition duration-300 shadow-[0_0_25px_rgba(37,99,235,0.55)] hover:shadow-[0_0_35px_rgba(14,165,233,0.8)] cursor-pointer"
              style={{
                background: 'linear-gradient(90deg, #2563eb, #06b6d4)',
              }}
            >
              <FaDownload size={16} />
              <span>Download CV</span>
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleScrollTo("contact")}
              className="inline-flex items-center space-x-2 text-cyan-200 hover:text-white py-3.5 px-7 rounded-full text-base font-semibold border border-blue-500/40 hover:border-cyan-400 bg-blue-950/40 hover:bg-blue-900/50 transition duration-300 backdrop-blur-sm cursor-pointer"
            >
              <FaEnvelope size={16} />
              <span>Contact Me</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, x: 3 }}
              onClick={() => handleScrollTo("work")}
              className="inline-flex items-center space-x-2 text-gray-300 hover:text-cyan-300 py-3 px-5 rounded-full text-base font-medium hover:bg-white/5 transition duration-300 cursor-pointer"
            >
              <span>Explore Projects &rarr;</span>
            </motion.button>
          </div>

          {/* Social Icons row */}
          <div className="flex items-center justify-center lg:justify-start space-x-4 text-gray-400">
            <span className="text-xs uppercase tracking-wider font-semibold text-gray-500 font-mono">Connect:</span>
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-full bg-white/5 hover:bg-blue-600/30 text-gray-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/50 transition duration-200"
            >
              <FaGithub size={18} />
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.15, y: -2 }}
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-full bg-white/5 hover:bg-blue-600/30 text-gray-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/50 transition duration-200"
            >
              <FaLinkedin size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side: Photo with 3D Tilt & Blue-Cyan Rotating Gradient Ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-2"
        >
          <div className="relative group">
            {/* Background Ambient Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-cyan-500 to-indigo-600 rounded-full blur-3xl opacity-40 group-hover:opacity-75 transition duration-700 animate-pulseGlow"></div>

            <Tilt
              className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-88 md:h-88 lg:w-96 lg:h-96 rounded-full p-[3px]"
              tiltMaxAngleX={14}
              tiltMaxAngleY={14}
              perspective={1000}
              scale={1.03}
              transitionSpeed={800}
              gyroscope={true}
            >
              {/* Rotating blue-to-cyan gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-400 to-sky-300 animate-spinSlow opacity-90"></div>

              <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl">
                <img
                  draggable="false"
                  src={img1}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </Tilt>
          </div>
        </motion.div>

      </div>

      {/* Modern Stats Banner */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-6xl mx-auto w-full mt-16 pt-8 border-t border-blue-900/30"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-white/[0.03] border border-blue-500/20 backdrop-blur-sm text-center hover:border-cyan-500/50 hover:bg-white/[0.05] transition group">
            <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
              5+
            </div>
            <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">Production & Academic Projects</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-blue-500/20 backdrop-blur-sm text-center hover:border-cyan-500/50 hover:bg-white/[0.05] transition group">
            <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
              25+
            </div>
            <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">Technologies & Frameworks</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-blue-500/20 backdrop-blur-sm text-center hover:border-cyan-500/50 hover:bg-white/[0.05] transition group">
            <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
              2x
            </div>
            <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">Cisco CCNA Certifications</div>
          </div>

          <div className="p-4 rounded-2xl bg-white/[0.03] border border-blue-500/20 backdrop-blur-sm text-center hover:border-cyan-500/50 hover:bg-white/[0.05] transition group">
            <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent group-hover:scale-110 transition-transform inline-block">
              5
            </div>
            <div className="text-xs sm:text-sm text-gray-300 font-medium mt-1">Spoken Languages</div>
          </div>
        </div>
      </motion.div>

    </section>
  );
};

export default About;