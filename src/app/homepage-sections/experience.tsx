import type { ReactNode } from 'react';
import { Box, BoxTitle } from "@/components/box";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CheckCircle, DotIcon } from "lucide-react";
import { TbLivePhoto } from "react-icons/tb";
import { type ExperienceEntry, experiences } from "../data/experience";
import { tech, type TechId } from "../data/technologies";

export function ExperienceSection() {
  return (
    <Box tr tl br bl as="section">
      <BoxTitle className="px-4 pt-4">Experience</BoxTitle>
      <ol>
        {experiences.map((entry) => (
          <Experience key={entry.id} entry={entry} />
        ))}
      </ol>
    </Box>
  );
}

function Experience({ entry }: { entry: ExperienceEntry }) {
  return (
    <li
      className={cn(
        "relative p-4 last-of-type:before:border-transparent",
        "before:absolute before:-left-px before:top-6 before:h-full before:border-l before:border-dashed",
        {
          "before:border-red-500": entry.endDate === undefined,
          "before:border-green-400": entry.endDate !== undefined,
        },
      )}
    >
      {entry.endDate === undefined ? (
        <div className="absolute -left-2 top-5 grid size-4 place-items-center bg-background text-red-500">
          <TbLivePhoto className="size-4 animate-subtle-pulse p-0.5" />
        </div>
      ) : (
        <CheckCircle className="absolute -left-2 top-5 size-4 bg-background p-0.5 text-green-400" />
      )}
      <div className="flex items-center justify-between">
        <ExperienceDates entry={entry} />
        <span className="inline-flex space-x-0.5">
          {entry.company.name !== undefined && (
            <>
              <span className="hidden sm:inline">{entry.company.name}</span>
              <span className="sm:hidden">{entry.company.shortname}</span>
              <DotIcon />
            </>
          )}
          <span className="text-muted-foreground">
            {entry.company.location}
          </span>
        </span>
      </div>
      <h3 className="text-lg font-bold">{entry.title}</h3>
      <ul>
        {entry.bulletpoints.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      {entry.technologies !== undefined && entry.technologies.length > 0 && (
        <ExperienceTechnologies techs={entry.technologies} />
      )}
    </li>
  );
}

const formatDate = (date: string | Date) => format(new Date(date), "MMM yyyy");
const formatDateMobile = (date: string | Date) =>
  format(new Date(date), "yyyy");
function ExperienceDates({ entry }: { entry: ExperienceEntry }) {
  let result: ReactNode;
  if (!entry.endDate) {
    result = (
      <>
        <time className="hidden sm:inline">{formatDate(entry.startDate)} - present</time>
        <time className="sm:hidden">{formatDateMobile(entry.startDate)} - present</time>
      </>
    );
  } else if (entry.startDate.getTime() === entry.endDate.getTime()) {
    result = (
      <>
        <time className="hidden sm:inline">{formatDate(entry.startDate)}</time>
        <time className="sm:hidden">{formatDateMobile(entry.startDate)}</time>
      </>
    );
  } else {
    result = (
      <>
        <time className="hidden sm:inline">
          {formatDate(entry.startDate)} - {formatDate(entry.endDate)}
        </time>
        <time className="sm:hidden">
          {formatDateMobile(entry.startDate)} -{" "}
          {formatDateMobile(entry.endDate)}
        </time>
      </>
    );
  }
  return result;
}

function ExperienceTechnologies({ techs }: { techs: TechId[] }) {
  const techlist = techs.map((id) => tech(id));
  return (
    <div className="flex w-full gap-4 overflow-x-auto">
      {techlist.map((tech) => (
        <Button asChild key={tech.id} variant="link" className="p-0">
          <a
            href={tech.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 whitespace-nowrap text-muted-foreground"
          >
            <tech.icon size={16} />
            {tech.label}
          </a>
        </Button>
      ))}
    </div>
  );
}
