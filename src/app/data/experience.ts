import type { TechId } from "./technologies";

export interface ExperienceEntry {
  id: number;
  startDate: Date;
  endDate?: Date;
  title: string;
  company:
    | { location: string; name: string; shortname: string; href?: string }
    | {
        location: string;
        name: undefined;
        shortname: undefined;
        href: undefined;
      };
  bulletpoints: [string] | [string, string] | [string, string, string];
  technologies?: TechId[];
}

let counter = 0;
const id = () => counter++;

export const experiences: ExperienceEntry[] = [
  {
    id: id(),
    title: "Fullstack developer",
    startDate: new Date("2024-10-31"),
    company: {
      location: "Remote / Toulouse",
      name: "Freelance",
      shortname: "Freelance",
      href: "undefined",
    },
    bulletpoints: [
      "Developed a simplified donation platform enabling users to fund multiple organizations through a single payment, with direct allocation of funds. Provided users with access to a dashboard featuring graphical representations of their donations and the ability to download invoices."    ],
    technologies: ["nextjs", "typescript", "tailwindcss", "postgres", "stripe", "clerk"],
  },
  {
    id: id(),
    company: {
      location: "Hybrid / Toulouse, France",
      name: "Air France",
      shortname: "Air France",
      href: undefined,
    },
    startDate: new Date("2022-09-01"),
    endDate: new Date("2024-10-01"),
    bulletpoints: [
      "Developed web applications and iPad interfaces by gathering, analyzing, and translating business requirements into functional solutions, enhancing user experience and operational efficiency."
    ],
    title: "Fullstack Developer",
    technologies: ["java", "angular", "ionic", "typescript", "postgres", ],
  },
  {
    id: id(),
    company: {
      location: "On-Site / Toulouse, France",
      name: "Student Project",
      shortname: "Student Project",
      href: undefined,
    },
    startDate: new Date("2023-09-01"),
    endDate: new Date("2024-09-01"),
    bulletpoints: [
      "Created web application designed to allow both professional and individual users to configure a PC by selecting a component, after which the application suggests only compatible components based on the initial selection."    ],
    title: "Fullstack Developer",
    technologies: ["nestjs", "react", "postgres", "typescript", "docker", "vite"],
  },
  {
    id: id(),
    company: {
      location: "On-Site / Toulouse, France",
      name: "Student Project",
      shortname: "Student Project",
      href: undefined,
    },
    startDate: new Date("2022-09-01"),
    endDate: new Date("2023-09-01"),
    bulletpoints: [
      "Developed and monitored an application with a modern UI/UX design, aimed at showcasing the most stunning cinematic masterpieces through captivating images from the films. The experience is centered around colors, highlighting various tones and shades, and is uniquely branded as 'Kaleidoscope'."   ],
    title: "Fullstack Developer",
    technologies: ["nextjs", "postgres", "typescript", "vercel", "vite"],
  },
];
