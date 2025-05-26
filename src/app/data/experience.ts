import type { TechId } from "./technologies";

export interface ExperienceEntry {
  id: number;
  startDate: Date;
  endDate?: Date;
  title: string;
  company:
    | { location: string; name: string; shortname: string; href?: string; logo?: string; logoSize?: string }
    | {
        location: string;
        name: undefined;
        shortname: undefined;
        href: undefined;
        logo?: undefined;
        logoSize?: undefined;
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
    startDate: new Date("2025-02-01"),
    company: {
      location: "Remote / Toulouse",
      name: "Atchik - Freelance",
      shortname: "Atchik - Freelance",
      href: "undefined",
      logo: "/atchiklogo.png",
      logoSize: "h-8",
    },
    bulletpoints: [
      "As part of a modernization and scalability effort, the project focused on migrating an existing monolithic application to a microservices architecture hosted on Google Cloud Platform. This included the design and deployment of cloud-native services using Docker for containerization, Kubernetes for orchestration, and GitHub Actions for continuous integration and delivery. The new architecture enabled better scalability, fault isolation, and streamlined deployment workflows. In parallel, the front-end was migrated from Angular to React with TypeScript, leading to the development of a modular and dynamic dashboard designed to display and interact with real-time data. The mission required close alignment between frontend and backend layers, cloud infrastructure setup, and the adoption of best practices for microservices, CI/CD, and modern web development."    ],
    technologies: ["java", "springboot", "angular", "gcp", "kubernetes", "docker", "githubactions", "keycloak", "react", "typescript", "tailwindcss", "mysql"],
  },
  {
    id: id(),
    title: "Fullstack developer",
    startDate: new Date("2024-10-31"),
    endDate: new Date("2024-02-01"),
    company: {
      location: "Remote / Toulouse",
      name: "HasanatPlus - Freelance",
      shortname: "HasanatPlus - Freelance",
      href: "undefined",
      logo: "/hplogo.png",
      logoSize: "h-6",
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
      logo: "/aflogotr.png",
      logoSize: "h-8",
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
