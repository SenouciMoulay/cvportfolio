import { ArrowUpRight } from "lucide-react";
import { Box, BoxTitle } from "@/components/box";

export function EducationSection() {
  return (
    <Box tr tl br bl as="section">
      <BoxTitle className="px-4 py-4 text-center">Education</BoxTitle>
      <div className="grid w-full grid-cols-6 [&>*]:p-4">
        <Box className="col-span-6 border-l-0 sm:col-span-3" br tr>
          <div className="flex flex-col flex-nowrap items-start gap-1 whitespace-nowrap sm:flex-row sm:items-center">
            <h3 className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text font-black text-transparent print:text-foreground">
              Computer and Information Systems Master
            </h3>
            <a
              href="https://www.francecompetences.fr/recherche/rncp/35078/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 rounded-sm border bg-foreground px-1 py-0.5 text-sm font-bold uppercase text-background print:hidden"
            >
              RNCP 35078
              <ArrowUpRight className="size-4" />
            </a>
          </div>
          <span className="text-sm leading-none text-muted-foreground">
            Toulouse Ynov Campus / <time>2022</time> - <time>2024</time>
          </span>
        </Box>
        <Box className="col-span-6 border-l-0 sm:col-span-3" br tr>
          <div className="flex flex-col flex-nowrap items-start gap-1 whitespace-nowrap sm:flex-row sm:items-center">
            <h3 className="bg-gradient-to-r from-fuchsia-600 to-blue-600 bg-clip-text font-black text-transparent print:text-foreground">
              Mathematics and Computer Science Bachelor</h3>
            <a
                href="https://www.francecompetences.fr/recherche/rncp/39486/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 rounded-sm border bg-foreground px-1 py-0.5 text-sm font-bold uppercase text-background print:hidden"
            >
              RNCP 39486
              <ArrowUpRight className="size-4" />
            </a>
          </div>
          <span className="text-sm leading-none text-muted-foreground">
            University Toulouse Jean Jaures / <time>2019</time> - <time>2022</time>
          </span>
        </Box>
        <Box className="col-span-6 border-l-0 sm:col-span-4">
          <div className="flex flex-col flex-nowrap items-start gap-1 whitespace-nowrap sm:flex-row sm:items-center">
            <h3>Containers w/ Docker, Kubernetes & OpenShift</h3>
            <a
                href="https://coursera.org/share/91e8d385c4885c6f0f805359cab49894"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 rounded-sm border bg-foreground px-1 py-0.5 text-sm font-bold uppercase text-background print:hidden"
            >
              Verify
              <ArrowUpRight className="size-4" />
            </a>
          </div>
          <span className="text-sm leading-none text-muted-foreground">
            IBM / <time>2025</time>
          </span>
        </Box>
        <Box className="col-span-6 border-l-0 sm:col-span-2">
          <div className="flex flex-col flex-nowrap items-start gap-1 whitespace-nowrap sm:flex-row sm:items-center">
            <h3>Meta Front-End Developer</h3>
            <a
                href="https://coursera.org/share/5949e68a0787e0bad73cfad8fa4089d6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-0.5 rounded-sm border bg-foreground px-1 py-0.5 text-sm font-bold uppercase text-background print:hidden"
            >
              Verify
              <ArrowUpRight className="size-4" />
            </a>
          </div>
          <span className="text-sm leading-none text-muted-foreground">
            Meta / <time>2025</time>
          </span>
        </Box>
      </div>
    </Box>
  );
}
