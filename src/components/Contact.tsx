'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Contact = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/ammarhanyy' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/Ammar Hany' },
    { icon: <FiMail />, url: 'Gmail:ammarhanyyy@gmail.com' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Let's Work Together
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part
              of your visions. Feel free to reach out to me using the form or through my social media
              channels.
            </p>
            <div className="flex space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8"
          >
            <div className="text-center mb-8">
              <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-full mb-4">
                <FiMail className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Let's Work Together!</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Have a project in mind? I'd love to hear about it! Fill out the contact form and I'll get back to you within 24 hours. 
                Let's turn your ideas into reality together.
              </p>
            </div>
            <div className="text-center">
              <a
                href="https://forms.gle/XCXTNov8YrJRjKKF8"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
              >
                Get in Touch
                <svg className="ml-2 -mr-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 