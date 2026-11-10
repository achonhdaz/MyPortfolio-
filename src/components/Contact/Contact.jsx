import React, { useState } from 'react';
import { personalInfo } from '../../constants';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaCopy, FaCheck } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedField, setCopiedField] = useState(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    setFormSubmitted(true);

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Portfolio Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(mailtoUrl, '_blank');
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 sm:px-10 lg:px-20 font-sans relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-3.5 py-1 rounded-full bg-blue-950/40 border border-blue-500/30 text-cyan-300 text-xs uppercase tracking-wider font-semibold mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-heading">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 font-light">
            Feel free to reach out for career opportunities, engineering discussions, or software development collaborations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#060d1d]/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-blue-900/30 shadow-[0_0_20px_rgba(37,99,235,0.12)]">
              <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                Let's Connect
              </h3>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed font-light">
                I am actively seeking software engineering positions. You can directly reach me via email, phone, or connect on LinkedIn and GitHub.
              </p>

              {/* Status Indicator */}
              <div className="flex items-center space-x-2.5 p-3 rounded-xl bg-blue-950/40 border border-blue-800/40 text-cyan-300 text-xs font-medium mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Open for Full-Time Roles, Remote & Relocation</span>
              </div>

              {/* Info Items */}
              <div className="space-y-4">
                
                {/* Email Item */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-blue-950/20 border border-blue-900/30 hover:border-cyan-500/40 transition"
                >
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center space-x-3 text-gray-200 hover:text-cyan-300 transition truncate"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-900/40 border border-blue-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <FaEnvelope size={16} />
                    </div>
                    <div className="truncate">
                      <span className="text-[11px] text-gray-400 uppercase tracking-wider block font-mono">Email Address</span>
                      <span className="text-sm font-semibold truncate block">{personalInfo.email}</span>
                    </div>
                  </a>
                  <button
                    onClick={() => handleCopy(personalInfo.email, 'email')}
                    title="Copy Email"
                    className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition flex-shrink-0 cursor-pointer"
                  >
                    {copiedField === 'email' ? <FaCheck className="text-emerald-400" size={14} /> : <FaCopy size={14} />}
                  </button>
                </motion.div>

                {/* Phone Item */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-blue-950/20 border border-blue-900/30 hover:border-cyan-500/40 transition"
                >
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="flex items-center space-x-3 text-gray-200 hover:text-cyan-300 transition"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-900/40 border border-blue-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                      <FaPhoneAlt size={16} />
                    </div>
                    <div>
                      <span className="text-[11px] text-gray-400 uppercase tracking-wider block font-mono">Phone</span>
                      <span className="text-sm font-semibold block">{personalInfo.phoneDisplay}</span>
                    </div>
                  </a>
                  <button
                    onClick={() => handleCopy(personalInfo.phone, 'phone')}
                    title="Copy Phone"
                    className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition flex-shrink-0 cursor-pointer"
                  >
                    {copiedField === 'phone' ? <FaCheck className="text-emerald-400" size={14} /> : <FaCopy size={14} />}
                  </button>
                </motion.div>

                {/* Location Item */}
                <div className="flex items-center space-x-3 p-3.5 rounded-xl bg-blue-950/20 border border-blue-900/30">
                  <div className="w-10 h-10 rounded-lg bg-blue-900/40 border border-blue-500/30 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <FaMapMarkerAlt size={16} />
                  </div>
                  <div>
                    <span className="text-[11px] text-gray-400 uppercase tracking-wider block font-mono">Location</span>
                    <span className="text-sm font-semibold text-gray-200 block">{personalInfo.location}</span>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-6 mt-6 border-t border-blue-900/30 flex items-center space-x-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-gray-400 font-mono">Connect:</span>
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-600/20 text-gray-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition duration-200"
                >
                  <FaGithub size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.15, y: -2 }}
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-white/5 hover:bg-blue-600/20 text-gray-300 hover:text-cyan-300 border border-white/10 hover:border-cyan-500/40 transition duration-200"
                >
                  <FaLinkedin size={18} />
                </motion.a>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Contact Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#060d1d]/85 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-blue-900/30 shadow-[0_0_20px_rgba(37,99,235,0.12)]">
              <h3 className="text-2xl font-bold text-white mb-2 font-heading">
                Send a Message
              </h3>
              <p className="text-sm text-gray-400 mb-6 font-light">
                Have an inquiry or opportunity? Fill in the details below and I'll get back to you promptly.
              </p>

              {formSubmitted ? (
                <div className="p-8 text-center bg-blue-950/30 border border-cyan-500/40 rounded-2xl animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 mx-auto mb-4">
                    <FaCheck size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2 font-heading">Message Prepared!</h4>
                  <p className="text-sm text-gray-300 max-w-md mx-auto mb-6 font-light">
                    Thank you, {formData.name}! Your message was prepared and your email client was opened. You can also contact me directly at <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 underline">{personalInfo.email}</a>.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="text-xs font-semibold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5 font-mono">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-blue-950/20 border border-blue-900/40 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5 font-mono">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-blue-950/20 border border-blue-900/40 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5 font-mono">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Software Engineer Opportunity"
                      className="w-full px-4 py-3 rounded-xl bg-blue-950/20 border border-blue-900/40 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-1.5 font-mono">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Write your message here..."
                      className="w-full px-4 py-3 rounded-xl bg-blue-950/20 border border-blue-900/40 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition resize-none"
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full flex items-center justify-center space-x-2 py-3.5 px-6 rounded-xl text-white font-bold text-sm sm:text-base shadow-lg transition duration-300 cursor-pointer"
                    style={{
                      background: 'linear-gradient(90deg, #2563eb, #06b6d4)',
                      boxShadow: '0 0 20px rgba(37, 99, 235, 0.4)',
                    }}
                  >
                    <FaPaperPlane size={15} />
                    <span>Send Message</span>
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;