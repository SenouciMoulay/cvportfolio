"use client";

import { wrap } from "@motionone/utils";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

interface MarqueeAnimationProps {
  children: React.ReactElement;
  className?: string;
  direction?: "end-to-start" | "start-to-end";
  baseVelocity: number;
  betweenElement?: React.ReactElement;
  pauseOnHover?: boolean;
}

export default function MarqueeAnimation({
  children,
  className,
  direction = "end-to-start",
  baseVelocity = 10,
  betweenElement,
  pauseOnHover = false,
}: MarqueeAnimationProps) {
  const baseX = useMotionValue(0);
  const [hovering, setHovering] = React.useState(false);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 0], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (direction === "start-to-end") {
      directionFactor.current = 1;
    } else if (direction === "end-to-start") {
      directionFactor.current = -1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    moveBy = pauseOnHover && hovering ? 0 : moveBy;

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative flex max-w-[100vw] flex-nowrap overflow-hidden text-nowrap">
      <motion.div
        className={cn("flex flex-nowrap items-center", className)}
        onHoverStart={() => setHovering(true)}
        onHoverEnd={() => setHovering(false)}
        style={{ x }}
      >
        {children}
        {betweenElement}
        {children}
        {betweenElement}
        {children}
        {betweenElement}
        {children}
        {betweenElement}
      </motion.div>
    </div>
  );
}
