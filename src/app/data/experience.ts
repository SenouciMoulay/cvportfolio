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
    title: "Freelancer",
    startDate: new Date("2024-10-31"),
    company: {
      location: "Remote / Andorra",
      name: undefined,
      shortname: undefined,
      href: undefined,
    },
    bulletpoints: [""],
    technologies: ["lua", "hono", "typescript", "react", "sqlite"],
  },
  {
    id: id(),
    company: {
      name: "Digikare",
      location: "Remote / Toulouse, France",
      shortname: "DGK",
      href: "https://digikare.com",
    },
    startDate: new Date("2023-08-01"),
    endDate: new Date("2024-10-31"),
    title: "Fullstack Developer",
    bulletpoints: [
      "",
      // "Developed and implemented innovative solutions for 3 full-stack applications, incorporating Domain-Driven Design (DDD) and Command Query Responsibility Segregation (CQRS) methodologies. Connected external systems including a government-managed surgeon database, mailing lists, and analytics platforms via APIs to streamline data integration and improve application functionality.",
      // "Implemented a pre-trained Keras model into the applications to enhance machine learning capabilities and optimize user experience. Increased application efficiency by 20% through the integration of AI-driven features.",
    ],
    technologies: ["typescript", "angular", "nodejs", "nestjs", "mongodb"],
  },
  {
    id: id(),
    company: {
      name: "Toulouse Ynov Campus",
      shortname: "TYC",
      location: "On-Site / Toulouse, France",
      href: "https://www.ynov.com/campus/toulouse/",
    },
    startDate: new Date("2021-05-01"),
    endDate: new Date("2023-08-01"),
    title: "Senior Mentor",
    bulletpoints: [
      "",
      // "Mentored over 150 first and second year students, providing guidance and support throughout their study program, resulting in a 90% retention rate and a 30% increase in academic performance.",
      // "Created and graded exams for multiple courses, ensuring accuracy and fairness in evaluation processes, leading to an average exam score improvement of15% among students.",
      // "Spearheaded the development of three internal software systems: an event organizing platform, automated grading system, and CTF platform, improving operational efficiency by 30% and reducing manual tasks by 50%.",
    ],
  },
  {
    id: id(),
    company: {
      name: "Toulouse Ynov Campus",
      href: "https://www.ynov.com/campus/toulouse/",
      shortname: "TYC",
      location: "Hybrid / Toulouse, France",
    },
    startDate: new Date("2023-01-01"),
    endDate: new Date("2023-05-01"),
    title: "Fullstack Developer",
    bulletpoints: [""],
    technologies: [
      "typescript",
      "astro",
      "githubactions",
      "sanity",
      "tailwindcss",
      "postgres",
    ],
  },
  {
    id: id(),
    company: {
      name: "Hospitalidée",
      shortname: "HID",
      href: "https://hospitalidee.fr",
      location: "Remote / Paris, France",
    },
    startDate: new Date("2020-09-01"),
    endDate: new Date("2021-05-01"),
    title: "Full-stack Intern",
    technologies: ["react", "nodejs", "express", "mongodb"],
    bulletpoints: [""],
  },
  {
    id: id(),
    company: {
      location: "Remote / Russia",
      name: undefined,
      shortname: undefined,
      href: undefined,
    },
    startDate: new Date("2016-09-01"),
    endDate: new Date("2020-09-01"),
    bulletpoints: [""],
    title: "Freelancer",
    technologies: ["gulp", "react", "php", "javascript", "mysql", "wordpress"],
  },
];
