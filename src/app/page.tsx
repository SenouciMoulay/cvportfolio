import type { Metadata } from "next";
import { AboutMeSection } from "./homepage-sections/about-me";
import { EducationSection } from "./homepage-sections/education";
import { ExperienceSection } from "./homepage-sections/experience";
import { QualitiesCarousel } from "./homepage-sections/qualities-carousel";

export const metadata: Metadata = {
  title: "Senouci Moulay - Fullstack Developer",
  description:
    "Fullstack developer with a keen eye for UI/UX design and a strong passion for creating seamless, user-focused experiences that prioritize performance and aesthetics.",
};

export default function Home() {
  return (
    <main className="mx-auto w-container [&>*:has(+*)]:border-b [&>*]:border-t-0">
      <AboutMeSection />
      <ExperienceSection />
      <EducationSection />
      <QualitiesCarousel />
    </main>
  );
}
