import { Box, BoxTitle } from "@/components/box";
import { ArrowUpRight } from "lucide-react";

export function EducationSection() {
  return (
    <Box tr tl br bl as="section">
      <BoxTitle className="px-4 py-4 text-center">Education</BoxTitle>
      <div className="grid w-full grid-cols-6 [&>*]:p-4">
        <Box className="col-span-6 border-l-0 sm:col-span-4" br tr>
          <div className="flex flex-col flex-nowrap items-start gap-1 whitespace-nowrap sm:flex-row sm:items-center">
            <h3>Computer and Information Systems Expert</h3>
            <a
              href="https://www.francecompetences.fr/recherche/rncp/35078/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 rounded-sm border bg-foreground px-1 py-0.5 text-sm font-bold uppercase text-background"
            >
              RNCP 35078
              <ArrowUpRight className="size-4" />
            </a>
          </div>
          <span className="text-sm leading-none text-muted-foreground">
            Toulouse Ynov Campus / <time>2018</time> - <time>2024</time>
          </span>
        </Box>
        <Box className="col-span-6 border-l-0 border-r-0 sm:col-span-2">
          <div className="flex flex-col flex-nowrap items-start gap-1 whitespace-nowrap sm:flex-row sm:items-center">
            <h3>Meta Front-End Developer</h3>
            <a
              href="https://coursera.org/share/e80c8a8b0498f1bb918cae2abbd3907c"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 rounded-sm border bg-foreground px-1 py-0.5 text-sm font-bold uppercase text-background"
            >
              Verify
              <ArrowUpRight className="size-4" />
            </a>
          </div>
          <span className="text-sm leading-none text-muted-foreground">
            Meta / <time>2024</time>
          </span>
        </Box>
        <Box className="col-span-6 border-l-0 sm:col-span-2" br tl>
          <div className="flex flex-col flex-nowrap items-start gap-1 whitespace-nowrap sm:flex-row sm:items-center">
            <h3>TOEIC C1</h3>
            <a
              href="https://www.etsglobal.org/fr/en/digital-score-report/9D3BDAB4946D81D12AC1D209CC6F73DB0EAF21730F664DA26E24AA14FFD9F7FDWXFuemg1cUNINGg0aEFiVWp0dmZDd2VINjAzSm82b0JrT005T1JOYVBoQ2ZhWmpB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 rounded-sm border bg-foreground px-1 py-0.5 text-sm font-bold uppercase text-background"
            >
              Verify
              <ArrowUpRight className="size-4" />
            </a>
          </div>
          <span className="text-sm leading-none text-muted-foreground">
            ETS Global / <time>2023</time>
          </span>
        </Box>
        <Box className="col-span-6 border-l-0 border-r-0 sm:col-span-4">
          <div className="flex flex-col flex-nowrap items-start gap-1 whitespace-nowrap sm:flex-row sm:items-center">
            <h3>Solidity Developer</h3>
          </div>
          <span className="text-sm leading-none text-muted-foreground">
            GuideDAO (formerly Moscow Coding School) / <time>2019</time>
          </span>
        </Box>
      </div>
    </Box>
  );
}
