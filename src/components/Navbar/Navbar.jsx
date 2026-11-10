import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../../constants';

const Navbar = () => {
  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 sm:px-10 lg:px-20 ${
        isScrolled
          ? "bg-[#030712]/90 backdrop-blur-lg border-b border-blue-900/30 shadow-lg shadow-blue-950/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Brand Logo */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleScrollTo("about")}
          className="text-left group flex items-center space-x-1 focus:outline-none cursor-pointer"
        >
          <span className="text-cyan-400 font-mono text-xl">&lt;</span>
          <span className="font-extrabold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity font-heading">
            Achraf Chemkhi
          </span>
          <span className="text-cyan-400 font-mono text-xl">/&gt;</span>
        </motion.button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-1 lg:space-x-3 text-sm font-medium text-gray-300">
          {menuItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => handleScrollTo(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "hover:text-cyan-300 hover:bg-white/5"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-blue-600/30 border border-blue-500/50 rounded-full shadow-[0_0_12px_rgba(59,130,246,0.4)]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Social Icons & Resume CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <motion.a
            whileHover={{ scale: 1.15, y: -2 }}
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-gray-300 hover:text-cyan-400 transition duration-200"
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.15, y: -2 }}
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="text-gray-300 hover:text-cyan-400 transition duration-200"
          >
            <FaLinkedin size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1.5 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white text-xs font-semibold px-3.5 py-2 rounded-full shadow-md shadow-blue-600/30 hover:shadow-cyan-500/50 transition duration-200"
          >
            <FaFileAlt size={12} />
            <span>Resume</span>
          </motion.a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center space-x-3">
          <a
            href={personalInfo.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 bg-blue-600 text-white text-xs font-semibold px-2.5 py-1.5 rounded-full"
          >
            <FaFileAlt size={10} />
            <span>CV</span>
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            className="p-1.5 text-cyan-400 hover:text-white rounded-lg focus:outline-none cursor-pointer"
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown with Framer Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 mx-auto w-full bg-[#040a18]/95 backdrop-blur-xl border border-blue-800/40 rounded-2xl p-5 shadow-2xl shadow-blue-950/60"
          >
            <ul className="flex flex-col space-y-2 text-center text-gray-200">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleScrollTo(item.id)}
                    className={`w-full py-2.5 rounded-xl font-medium transition duration-200 cursor-pointer ${
                      activeSection === item.id
                        ? "bg-blue-600/40 text-cyan-200 border border-blue-500/40 font-semibold"
                        : "hover:bg-white/5 hover:text-cyan-300"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex justify-center items-center space-x-6 pt-4 mt-3 border-t border-blue-900/40 text-gray-300">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-cyan-400 transition duration-200"
              >
                <FaGithub size={20} />
                <span className="text-sm font-medium">GitHub</span>
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-cyan-400 transition duration-200"
              >
                <FaLinkedin size={20} />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;