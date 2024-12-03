import { Box, BoxTitle } from "@/components/box";
import { Button } from "@/components/ui/button";
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
    <li className="relative p-4">
      {entry.endDate === undefined ? (
        <TbLivePhoto
          className="absolute -left-2 top-5 animate-subtle-pulse text-red-500"
          size={16}
        />
      ) : (
        <CheckCircle
          size={16}
          className="absolute -left-0.5 top-7 size-0.5 scale-[8] text-green-400"
        />
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
  let result: JSX.Element;
  if (!entry.endDate) {
    result = (
      <>
        <time className="hidden sm:inline">{formatDate(entry.startDate)}</time>
        <time className="sm:hidden">{formatDateMobile(entry.startDate)}</time>
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
