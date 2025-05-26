"use client";

import DottedMap from "dotted-map";
import { useRef, useState } from "react";
import {PiCityDuotone, PiHandTap, PiSmileyDuotone} from "react-icons/pi";
import { cn } from "@/lib/utils";

const DOTS_PER_SIDE = 28;
const map = new DottedMap({
  height: DOTS_PER_SIDE,
  width: DOTS_PER_SIDE,
  grid: "diagonal",
  countries: ["FRA"],
});
map.addPin({
  lat: 43.6045,
  lng: 1.444,
  svgOptions: { color: "Toulouse", radius: 0.35 },
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
      { }
      <div
        ref={ref}
        className={cn(
            "[&_polyline]:fill-foreground/30",
            "[&_polyline[fill='Toulouse']]:fill-orange-500",
            "[&_polyline[fill='Toulouse']]:animate-pulse",
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
          Toulouse
        </span>
        <br />
        <p className="hidden text-sm leading-none sm:inline">
          is a vibrant city in the south of France, known for its rich culture and history. <PiCityDuotone
            className="inline size-5"/>{" "}
          <br/> It's also a major hub for the aerospace industry and{" "}
          <span className="italic">the place I call home</span>{" "}
          <PiSmileyDuotone className="inline size-4 -translate-y-0.5"/>
        </p>
        <p className="inline leading-tight sm:hidden">Yep! I live here! 🏔</p>
      </div>
    </div>
  );
}
