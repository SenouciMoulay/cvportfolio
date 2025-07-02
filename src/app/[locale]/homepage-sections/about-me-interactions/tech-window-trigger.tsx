"use client";

import type { TechWindowContextType } from "./tech-window-context";

import React from "react";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { useTechWindow } from "./tech-window-context";
export type TechWindowTriggerProps = React.ComponentPropsWithoutRef<"a"> & {
  value: NonNullable<TechWindowContextType>;
};

export const TechWindowTrigger = ({ ref, children, value, className, ...props }: TechWindowTriggerProps & { ref?: React.RefObject<React.ComponentRef<"a"> | null> }) => {
  const [, setTechWindow] = useTechWindow();
  const handleIn = () => setTechWindow(value);
  const handleOut = () => setTechWindow(null);
  return (
    <Button
      asChild
      variant="link-hover-2"
      className={cn(
        "m-0 h-6 p-0 font-mono font-black after:bottom-0 after:w-full",
        className,
      )}
    >
      <a
        href="#"
        ref={ref}
        onMouseEnter={handleIn}
        onFocus={handleIn}
        onMouseLeave={handleOut}
        onBlur={handleOut}
        {...props}
      >
        {children}
      </a>
    </Button>
  );
};
