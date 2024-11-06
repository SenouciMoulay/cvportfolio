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
  return (
    <div className="relative grid h-full w-full place-items-center">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      {showing}
    </div>
  );
}
