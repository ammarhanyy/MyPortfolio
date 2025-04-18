'use client';

import { useLanguage } from '@/context/LanguageContext';
import { useRouter } from 'next/navigation';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const router = useRouter();

  const handleLanguageChange = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    router.push(`/${newLang}`);
  };

  return (
    <button
      onClick={handleLanguageChange}
      className="fixed top-4 right-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-200 z-50"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      {language === 'en' ? 'عربي' : 'English'}
    </button>
  );
} 