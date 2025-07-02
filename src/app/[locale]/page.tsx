import {getTranslations} from 'next-intl/server';
import {setRequestLocale} from 'next-intl/server';
import { AboutMeSection } from "./homepage-sections/about-me";
import { EducationSection } from "./homepage-sections/education";
import { ExperienceSection } from "./homepage-sections/experience";
import { QualitiesCarousel } from "./homepage-sections/qualities-carousel";

export async function generateMetadata({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'HomePage'});

  return {
    title: t('title'),
    description: t('description')
  };
}

export default async function HomePage({params}: {params: Promise<{locale: string}>}) {
  const {locale} = await params;
  
  // Activer le rendu statique
  setRequestLocale(locale);

  return (
    <main className="mx-auto w-container [&>*:has(+*)]:border-b [&>*]:border-t-0">
      <AboutMeSection />
      <ExperienceSection />
      <EducationSection />
      <QualitiesCarousel />
    </main>
  );
} 