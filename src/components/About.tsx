'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiSmartphone, FiCloud } from 'react-icons/fi';

const skills = [
  { name: 'Flutter', icon: <FiSmartphone />, category: 'Mobile Development' },
  { name: 'Dart', icon: <FiCode />, category: 'Programming Languages' },
  { name: 'Firebase', icon: <FiCloud />, category: 'Backend & Database' },
  { name: 'SQL', icon: <FiDatabase />, category: 'Backend & Database' },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 dark:bg-blue-400 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="prose dark:prose-invert max-w-none"
          >
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm a passionate Mobile App Developer with over 5 years of experience in building
              beautiful and functional applications. My journey in tech started with a curiosity
              about how things work, and it has evolved into a career where I create solutions
              that make a difference in people's lives.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              I specialize in Flutter development and have worked with various clients across
              the MENA region, helping them bring their ideas to life. When I'm not coding,
              you can find me exploring new technologies, contributing to open-source projects,
              or mentoring aspiring developers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">My Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg text-blue-600 dark:text-blue-400">
                    {skill.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-medium">{skill.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{skill.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 