import { FileIcon, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { SiGithub, SiGmail, SiLinkedin } from "react-icons/si";
import me from "@/../public/me.jpg";
import { Box } from "@/components/box";
import { Button } from "@/components/ui/button";
import { LocationMap } from "@/components/ui/location-map";
import { cn } from "@/lib/utils";
import { TechWindowProvider } from "./about-me-interactions/tech-window-context";
import { TechWindowTrigger } from "./about-me-interactions/tech-window-trigger";
import { TechWindowView } from "./about-me-interactions/tech-window-view";

// TODO: Cut of 2nd page, verify spelling and grammar
const CV_FILENAME = "CV-SENOUCI2025.pdf";

export function AboutMeSection() {
  return (
    <TechWindowProvider>
      <Box
        as="section"
        className="grid grid-cols-3 sm:grid-cols-5 print:border-t"
      >
        <div>
          <Image
            src={me}
            width={192}
            height={192}
            alt="Moulay's face"
            loading="lazy"
            placeholder="blur"
            className="block aspect-square w-full transition dark:brightness-75 dark:grayscale dark:hover:brightness-100 dark:hover:grayscale-0"
          />
          <div className="block sm:hidden print:hidden">
            <LocationMap />
          </div>
        </div>
        <Box className="col-span-2 grid place-items-center border-none p-4 sm:col-span-3 print:col-span-4">
          {/* <h2 className="text-xl">Hello! My name is Dmitrii.</h2> */}
          <div>
            <b className="hidden text-lg font-bold leading-none print:flex print:gap-2">
              Senouci Moulay
              <span className="ml-2 inline-flex items-center gap-0.5 text-base font-normal">
                <MapPin className="size-3" />
                Toulouse
              </span>
            </b>
            <span className="hidden text-sm text-muted-foreground print:block">
              senouci.moulay@gmail.com
            </span>
            <AboutMeDescriptionDull />
            <Contacts />
          </div>
        </Box>
        <Box
          className="hidden border-b-0 border-l border-r-0 border-t-0 sm:block print:hidden"
          bl
          br
        >
          <TechWindowView />
        </Box>
      </Box>
    </TechWindowProvider>
  );
}

function _AboutMeDescription() {
  return (
    <p>
      Fullstack web developer with 2+ years of experience, creating experiences
      with{" "}
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

function AboutMeDescriptionDull() {
  return (
    <p className="text-base leading-tight">
        Passionate fullstack web developer with 2.5+ years of experience, building dynamic and user-friendly applications with Java, Springboot,TypeScript, Angular, Next.js, Postgres, and more.
    </p>
  );
}

function Contacts() {
  return (
    <div className="max-w-min space-y-0 print:hidden">
      <div className="mb-2 flex items-center gap-2 border-b pb-2 pt-2">
        <Button asChild variant="outline" size="icon-sm">
          <a
            href="https://github.com/SenouciMoulay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="size-5" />
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="icon-sm"
          className="hover:text-blue-500 focus-visible:text-blue-500"
        >
          <a
            href="https://www.linkedin.com/in/moulay-senouci-b90810235/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin className="size-5" />
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="icon-sm"
          className="hover:text-red-500 focus-visible:text-red-500"
        >
          <a href="mailto:senouci.moulay@gmail.com">
            <SiGmail className="size-5" />
          </a>
        </Button>
      </div>
      <Button variant="shine" size="sm" asChild>
        <Link className="w-full items-center gap-1" href={`/${CV_FILENAME}`}>
          <FileIcon className="size-4" />
          <span className="translate-y-px font-bold">Curriculum Vitae</span>
        </Link>
      </Button>
    </div>
  );
}
