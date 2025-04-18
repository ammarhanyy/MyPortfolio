'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Navbar() {
  const { messages } = useLanguage();
  const t = messages.navbar;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#home" className="text-xl font-bold text-gray-800 dark:text-white">
              {t.logo}
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#about" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {t.about}
            </a>
            <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {t.projects}
            </a>
            <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              {t.contact}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
} 