import me from "@/../public/me.jpeg";
import { Box } from "@/components/box";
import { LocationMap } from "@/components/ui/world-map";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import { TechWindowProvider } from "./about-me-interactions/tech-window-context";
import { TechWindowTrigger } from "./about-me-interactions/tech-window-trigger";
import { TechWindowView } from "./about-me-interactions/tech-window-view";

export function AboutMeSection() {
  return (
    <TechWindowProvider>
      <Box as="section" className="grid grid-cols-3 sm:grid-cols-5">
        <div>
          <Image
            src={me}
            width={192}
            height={192}
            alt="Dmitrii's face"
            loading="lazy"
            placeholder="blur"
            className="block aspect-square w-full transition dark:brightness-75 dark:grayscale dark:hover:brightness-100 dark:hover:grayscale-0"
          />
          <div className="block sm:hidden">
            <LocationMap />
          </div>
        </div>
        <Box className="col-span-2 border-none p-4 sm:col-span-3">
          <h2 className="text-xl">Hello! My name is Dmitrii.</h2>
          <AboutMeDescription />
          <Contacts />
        </Box>
        <Box
          className="hidden border-b-0 border-l border-r-0 border-t-0 sm:block"
          bl
          br
        >
          <TechWindowView />
        </Box>
      </Box>
    </TechWindowProvider>
  );
}

function AboutMeDescription() {
  return (
    <p>
      I am a fullstack web developer with over 7 years of experience, writing
      applications with{" "}
      <TechWindowTrigger
        value="typescript"
        className="hover:text-[#007ACC] focus-visible:text-[#007ACC]"
      >
        Typescript
      </TechWindowTrigger>
      {", "}
      <TechWindowTrigger
        value="react"
        className="hover:text-[#61DAFB] focus-visible:text-[#61DAFB]"
      >
        React
      </TechWindowTrigger>
      {", "}
      <TechWindowTrigger value="nextjs">Next</TechWindowTrigger>
      {", "}
      <TechWindowTrigger
        value="postgres"
        className="hover:text-[#336791] focus-visible:text-[#336791]"
      >
        Postgres
      </TechWindowTrigger>
      {" and "}
      <TechWindowTrigger
        value="other"
        className={cn(
          "bg-gradient-to-r bg-clip-text text-primary transition-[background-color]",
          "hover:from-[#12c2e9] hover:via-[#c471ed] hover:to-[#f64f59] hover:text-transparent",
          "focus-visible:from-[#12c2e9] focus-visible:via-[#c471ed] focus-visible:to-[#f64f59] focus-visible:text-transparent",
          "after:hover:bg-gradient-to-r after:hover:from-[#12c2e9] after:hover:via-[#c471ed] after:hover:to-[#f64f59]",
          "after:focus-visible:bg-gradient-to-r after:focus-visible:from-[#12c2e9] after:focus-visible:via-[#c471ed] after:focus-visible:to-[#f64f59]",
        )}
      >
        other cool tech
      </TechWindowTrigger>
      {"."}
    </p>
  );
}

function Contacts() {
  return (
    <div className="flex items-center gap-2 pt-2">
      <a
        className="transition-all hover:-translate-y-1 hover:text-white"
        href="https://github.com/kopenkinda"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiGithub className="size-5" />
      </a>
      <a
        className="transition-all hover:-translate-y-1 hover:text-blue-500"
        href="https://linkedin.com/in/dmitrii-kopenkin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SiLinkedin className="size-5" />
      </a>
      <a
        href="mailto:kopenkin.da@gmail.com"
        className="transition-all hover:-translate-y-1 hover:text-red-500"
      >
        <SiGmail className="size-5" />
      </a>
    </div>
  );
}
