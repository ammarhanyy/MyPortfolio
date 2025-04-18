import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
  
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
} 