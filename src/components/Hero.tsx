'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiDownload } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400">عمار هاني</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
              Software Developer | Freelancer | Building for MENA & beyond
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="/MY CV.pdf"
                download
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                <FiDownload className="mr-2" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-600 text-base font-medium rounded-md text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              >
                Let's Work Together
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600 dark:border-blue-400">
              <Image
                src="/ammarimg.jpg"
                alt="Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 