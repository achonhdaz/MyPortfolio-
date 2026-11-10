import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';
import { personalInfo } from '../../constants';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollTo = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'work', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <footer className="relative bg-[#020617] border-t border-blue-900/30 text-gray-300 font-sans pt-16 pb-12 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Background subtle blue glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-blue-600/10 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-blue-900/30">
          
          {/* Brand & Summary */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-1">
              <span className="text-cyan-400 font-mono text-xl">&lt;</span>
              <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-blue-400 via-cyan-400 to-sky-300 bg-clip-text text-transparent font-heading">
                Achraf Chemkhi
              </span>
              <span className="text-cyan-400 font-mono text-xl">/&gt;</span>
            </div>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed font-light">
              Software Engineer with an Engineering Diploma from EPI Sousse. Passionate about full-stack engineering, distributed systems, and user-centric applications.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-600/30 text-gray-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition duration-200"
              >
                <FaGithub size={16} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-600/30 text-gray-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition duration-200"
              >
                <FaLinkedin size={16} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Send Email"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-600/30 text-gray-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition duration-200"
              >
                <FaEnvelope size={16} />
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                aria-label="Call Phone"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-600/30 text-gray-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition duration-200"
              >
                <FaPhoneAlt size={16} />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-400">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleScrollTo(link.id)}
                  className="text-left hover:text-cyan-300 transition-colors py-1 cursor-pointer font-light"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono">
              Contact Info
            </h4>
            <div className="space-y-2 text-xs text-gray-400">
              <p className="text-gray-300 font-medium">{personalInfo.location}</p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="block hover:text-cyan-300 transition truncate"
              >
                {personalInfo.email}
              </a>
              <a
                href={`tel:${personalInfo.phone}`}
                className="block hover:text-cyan-300 transition"
              >
                {personalInfo.phoneDisplay}
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Achraf Chemkhi. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="flex items-center space-x-1.5 text-gray-400 hover:text-cyan-300 bg-white/5 hover:bg-blue-600/20 px-3.5 py-2 rounded-full border border-white/10 hover:border-cyan-500/40 transition duration-200 cursor-pointer"
          >
            <span>Back to Top</span>
            <FaArrowUp size={11} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;