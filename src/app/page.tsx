import type { Metadata } from "next";
import { AboutMeSection } from "./homepage-sections/about-me";
import { EducationSection } from "./homepage-sections/education";
import { ExperienceSection } from "./homepage-sections/experience";
import { QualitiesCarousel } from "./homepage-sections/qualities-carousel";

export const metadata: Metadata = {
  title: "Kopenkin Dmitrii - Fullstack Developer",
  description:
    "Fullstack developer with a passion for learning and a strong focus on performance and user experience.",
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
