'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import LanguageSwitcher from '@/components/LanguageSwitcher';

export default function ClientPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <LanguageSwitcher />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
} 