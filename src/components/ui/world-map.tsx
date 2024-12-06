"use client";

import { cn } from "@/lib/utils";
import { useMutationObserver } from "@react-hooks-library/core";
import DottedMap from "dotted-map";
import { useRef } from "react";

const DOTS_PER_SIDE = 28;
const map = new DottedMap({
  height: DOTS_PER_SIDE,
  width: DOTS_PER_SIDE,
  grid: "diagonal",
  countries: ["FRA", "ESP"],
});

map.addPin({
  lat: 42.5423,
  lng: 1.5977,
  svgOptions: { color: "Andorra", radius: 0.35 },
});
map.addPin({
  lat: 41.390205,
  lng: 2.154007,
  svgOptions: { color: "Barcelona", radius: 0.35 },
});
const svgMap = map.getSVG({
  radius: 0.22,
  shape: "hexagon",
});

export function LocationMap() {
  const ref = useRef<HTMLDivElement>(null);
  useMutationObserver(
    ref,
    (mutations) => {
      for (const mutation of mutations) {
        if (mutation.type !== "childList") {
          continue;
        }
        const target = mutation.target as SVGElement;
        target
          .querySelectorAll('polyline:not([fill="current"])')
          .forEach((_el) => {});
        // TODO: show info abount andorra
        // if (target.getAttribute("fill") === "current") {
        //   continue;
        // }
        // if (target.getAttribute("data-label") !== null) {
        //   continue;
        // }
        // target.setAttribute(
        //   "data-label",
        //   target.getAttribute("fill") ?? "Uhhh...",
        // );
      }
    },
    {
      childList: true,
      subtree: true,
    },
  );
  return (
    // eslint-disable-next-line react-dom/no-dangerously-set-innerhtml
    <div
      ref={ref}
      className={cn(
        "relative w-full p-2 [&_polyline]:fill-foreground/30",
        "[&_polyline:not([fill='current'])]:fill-orange-500",
        "[&_polyline:not([fill='current'])]:hover:scale-150",
        "[&_polyline:not([fill='current'])]:animate-subtle-pulse",
        "[&_polyline:not([fill='current'])]:hover:animate-none",
        "[&_polyline:not([fill='current'])]:transition-transform",
        "[&_polyline[fill='Andorra']]:origin-[57%_59%]",
        "[&_polyline[fill='Barcelona']]:origin-[63%_68%]",
      )}
      dangerouslySetInnerHTML={{ __html: svgMap }}
    />
  );
}
