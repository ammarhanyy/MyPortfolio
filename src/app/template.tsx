'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function Template({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  
  return (
    <div dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {children}
    </div>
  );
} 