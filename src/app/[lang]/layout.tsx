import LanguageWrapper from '@/components/LanguageWrapper';

export default function LanguageLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: 'en' | 'ar' };
}) {
  return (
    <LanguageWrapper lang={params.lang}>
      {children}
    </LanguageWrapper>
  );
} 