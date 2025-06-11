'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface Messages {
  navbar: {
    logo: string;
    home: string;
    about: string;
    projects: string;
    contact: string;
  };
  // Add other message categories as needed
}

const messages: Record<Language, Messages> = {
  en: {
    navbar: {
      logo: 'Portfolio',
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact'
    }
  },
  ar: {
    navbar: {
      logo: 'الملف الشخصي',
      home: 'الرئيسية',
      about: 'عني',
      projects: 'المشاريع',
      contact: 'اتصل بي'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  messages: Messages;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage,
      messages: messages[language]
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 