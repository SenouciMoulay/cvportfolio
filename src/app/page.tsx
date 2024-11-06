import { AboutMeSection } from "./homepage-sections/about-me";
import { QualitiesCarousel } from "./homepage-sections/qualities-carousel";

export default function Home() {
  return (
    <main className="mx-auto w-container">
      <AboutMeSection />
      <QualitiesCarousel />
    </main>
  );
}
