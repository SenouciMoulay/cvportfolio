import { Box } from "@/components/box";
import MarqueeAnimation from "@/components/marquee-animation";
import { interleave } from "@/lib/utils";
import { DotIcon } from "lucide-react";

const qualities = [
  "innovative thinker",
  "results and detail oriented",
  "strong mentor and leader",
  "adaptable",
  "effective communicator",
  "collaborative team player",
  "problem solver",
  "driven by efficiency",
  "customer-focused",
];

export function QualitiesCarousel() {
  return (
    <Box className="border-b border-t-0 py-2">
      <MarqueeAnimation
        baseVelocity={0.5}
        direction="start-to-end"
        pauseOnHover
        className="gap-2"
        betweenElement={<DotIcon className="size-4" />}
      >
        <div className="flex items-center gap-2">
          {interleave(
            qualities.map((q) => (
              <span key={q} className="hover:scale-105">
                {q}
              </span>
            )),
            (i) => (
              <DotIcon className="size-4" key={i} />
            ),
          )}
        </div>
      </MarqueeAnimation>
    </Box>
  );
}
