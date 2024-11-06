"use client";

import { useTechWindow } from "./tech-window-context";

export function TechWindowView() {
  const [window] = useTechWindow();
  const showing = (() => {
    switch (window) {
      case null:
        return <span>todo: tech carousel</span>;
      default:
        return <span>todo: implement {window} infographics</span>;
    }
  })();
  return <div className="grid h-full w-full place-items-center">{showing}</div>;
}
