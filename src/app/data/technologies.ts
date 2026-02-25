import type { ReactNode } from "react";
import {
  BiLogoJava,
  BiLogoMongodb,
  BiLogoNodejs,
  BiLogoPostgresql,
  BiLogoReact,
  BiLogoTypescript,
} from "react-icons/bi";
import {
  SiAngular,
  SiAstro,
  SiClerk,
  SiDocker,
  SiExpress,
  SiGithubactions,
  SiGooglecloud,
  SiGulp,
  SiHono,
  SiIonic,
  SiJavascript,
  SiAnthropic,
  SiDrizzle,
  SiGooglebigquery,
  SiKeycloak,
  SiKubernetes,
  SiLua,
  SiMaplibre,
  SiMysql,
  SiNestjs,
  SiNextdotjs,
  SiPhp,
  SiSanity,
  SiRadixui,
  SiSass,
  SiSpringboot,
  SiSqlite,
  SiStripe,
  SiTailwindcss,
  SiVercel,
  SiVite,
  SiVitest,
  SiWordpress,
} from "react-icons/si";
import { HiSparkles } from "react-icons/hi2";
import { VscAzureDevops } from "react-icons/vsc";

export interface TechnologyEntry {
  id: string;
  label: string;
  href: string;
  icon: (props: React.SVGAttributes<SVGElement>) => ReactNode;
}

// prettier-ignore
export const technologies = [
  { id: "react",        label: "React",         icon: BiLogoReact,       href: "https://react.dev" },
  { id: "typescript",   label: "TypeScript",    icon: BiLogoTypescript,  href: "https://www.typescriptlang.org" },
  { id: "nodejs",       label: "NodeJS",        icon: BiLogoNodejs,      href: "https://nodejs.org/" },
  { id: "express",      label: "Express.js",    icon: SiExpress,         href: "https://expressjs.com" },
  { id: "mongodb",      label: "MongoDB",       icon: BiLogoMongodb,     href: "https://www.mongodb.com" },
  { id: "postgres",     label: "PostgreSQL",    icon: BiLogoPostgresql,  href: "https://www.postgresql.org" },
  { id: "astro",        label: "Astro",         icon: SiAstro,           href: "https://astro.build" },
  { id: "hono",         label: "Hono",          icon: SiHono,            href: "https://hono.dev" },
  { id: "angular",      label: "Angular",       icon: SiAngular,         href: "https://angular.dev" },
  { id: "azuredevops",  label: "Azure DevOps",  icon: VscAzureDevops,    href: "https://azure.microsoft.com/en-us/services/devops/" },
  { id: "githubactions",label: "Github Actions",icon: SiGithubactions,   href: "https://github.com/features/actions" },
  { id: "gulp",         label: "Gulp",          icon: SiGulp,            href: "https://gulpjs.com" },
  { id: "lua",          label: "Lua",           icon: SiLua,             href: "https://www.lua.org" },
  { id: "nextjs",       label: "Next.js",       icon: SiNextdotjs,       href: "https://nextjs.org" },
  { id: "php",          label: "PHP",           icon: SiPhp,             href: "https://www.php.net" },
  { id: "sass",         label: "Sass",          icon: SiSass,            href: "https://sass-lang.com" },
  { id: "tailwindcss",  label: "TailwindCSS",   icon: SiTailwindcss,     href: "https://tailwindcss.com" },
  { id: "wordpress",    label: "WordPress",     icon: SiWordpress,       href: "https://wordpress.org" },
  { id: "sqlite",       label: "SQLite",        icon: SiSqlite,          href: "https://www.sqlite.org" },
  { id: "nestjs",       label: "NestJS",        icon: SiNestjs,          href: "https://nestjs.com" },
  { id: "sanity",       label: "Sanity",        icon: SiSanity,          href: "https://www.sanity.io" },
  { id: "mysql",        label: "MySQL",         icon: SiMysql,           href: "https://www.mysql.com" },
  { id: "javascript",   label: "JavaScript",    icon: SiJavascript,      href: "https://www.mysql.com" },
  { id: "springboot",   label: "SpringBoot",    icon: SiSpringboot,      href: "https://spring.io/projects/spring-boot" },
  { id: "ionic",   label: "Ionic",    icon: SiIonic,      href: "https://ionicframework.com" },
  { id: "java",   label: "Java",    icon: BiLogoJava,      href: "https://docs.oracle.com/en/java/" },
  { id: "stripe",   label: "Stripe",    icon: SiStripe,      href: "https://stripe.com/" },
  { id: "clerk",   label: "Clerk",    icon: SiClerk,      href: "https://clerk.com" },
  { id: "docker",   label: "Docker",    icon: SiDocker,      href: "https://docker.com" },
  { id: "vite",   label: "Vite",    icon: SiVite,      href: "https://docker.com" },
  { id: "vercel",   label: "Vercel",    icon: SiVercel,      href: "https://vercle.com" },
  { id: "githubactions",label: "Github Actions",icon: SiGithubactions,   href: "https://github.com/features/actions" },
  { id: "gcp",   label: "Google Cloud Platform",    icon: SiGooglecloud,      href: "https://console.cloud.google.com" },
  { id: "kubernetes",   label: "Kubernetes",    icon: SiKubernetes,      href: "https://kubernetes.io" },
  { id: "keycloak",   label: "Keycloak",    icon: SiKeycloak,      href: "https://www.keycloak.org" },
  { id: "drizzle",   label: "Drizzle ORM",    icon: SiDrizzle,      href: "https://orm.drizzle.team" },
  { id: "anthropic",   label: "Claude AI",    icon: SiAnthropic,      href: "https://anthropic.com" },
  { id: "bigquery",   label: "BigQuery",    icon: SiGooglebigquery,      href: "https://cloud.google.com/bigquery" },
  { id: "maplibre",   label: "MapLibre GL",    icon: SiMaplibre,      href: "https://maplibre.org" },
  { id: "radixui",   label: "Radix UI",    icon: SiRadixui,      href: "https://www.radix-ui.com" },
  { id: "vitest",   label: "Vitest",    icon: SiVitest,      href: "https://vitest.dev" },
  { id: "voyageai",   label: "Voyage AI",    icon: HiSparkles,      href: "https://www.voyageai.com" },
  { id: "pinecone",   label: "Pinecone",    icon: HiSparkles,      href: "https://www.pinecone.io" },
] as const satisfies TechnologyEntry[];

type TechnologyItem = (typeof technologies)[number];
export type TechId = (typeof technologies)[number]["id"];

export function tech<TKey extends TechId>(
  id: TKey,
): Extract<TechnologyItem, { id: TKey }> {
  return technologies.find((t) => t.id === id) as Extract<
    TechnologyItem,
    { id: TKey }
  >;
}