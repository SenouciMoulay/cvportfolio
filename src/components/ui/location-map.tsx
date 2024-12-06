"use client";

import { cn } from "@/lib/utils";
import DottedMap from "dotted-map";
import { useRef, useState } from "react";
import { PiHandTap, PiMountainsDuotone, PiSmileyDuotone } from "react-icons/pi";

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
const svgMap = map.getSVG({
  radius: 0.14,
  shape: "hexagon",
});

export function LocationMap() {
  const ref = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const showInfo = focused || hovered;

  return (
    <div
      className="relative w-full p-2 focus-within:outline-white focus:outline-white"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      tabIndex={0}
    >
      {/* eslint-disable-next-line react-dom/no-dangerously-set-innerhtml */}
      <div
        ref={ref}
        className={cn(
          "[&_polyline]:fill-foreground/30",
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
      <div className="absolute right-2 top-2 rounded border p-0.5">
        <PiHandTap />
      </div>
      <div
        className={cn(
          "absolute inset-2 origin-[57%_59%] rounded border bg-background/20 p-2 backdrop-blur-sm transition-all duration-300",
          {
            "scale-0 opacity-0": !showInfo,
            "opacity-100": showInfo,
          },
        )}
      >
        <span className="text-sm font-bold leading-tight sm:text-base">
          Andorra
        </span>
        <br />
        <p className="hidden text-sm leading-none sm:inline">
          is a small principality between France and Spain. It's an extremely
          beautiful country! <PiMountainsDuotone className="inline size-5" />{" "}
          <br /> It's also the{" "}
          <span className="italic">country where I live now</span>{" "}
          <PiSmileyDuotone className="inline size-4 -translate-y-0.5" />
        </p>
        <p className="inline leading-tight sm:hidden">Yep! I live here! 🏔</p>
      </div>
    </div>
  );
}
