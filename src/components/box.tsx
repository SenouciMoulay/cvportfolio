import { cn } from "@/lib/utils";
import React from "react";

type BoxProps = React.ComponentPropsWithoutRef<"div"> & {
  tl?: boolean;
  bl?: boolean;
  tr?: boolean;
  br?: boolean;
  crossColor?: string;
  as?: React.ElementType;
};

const Cross = ({
  className,
  crossColor,
}: {
  className?: string;
  crossColor?: string;
}) => {
  return (
    <div className={cn("absolute z-10", className)}>
      <div className={`h-6 translate-y-1/2 border-r ${crossColor}`} />
      <div className={`w-6 translate-x-1/2 border-t ${crossColor}`} />
    </div>
  );
};

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      children,
      className,
      tl: crossTopLeft,
      tr: crossTopRight,
      bl: crossBottomLeft,
      br: crossBottomRight,
      crossColor = "border-border",
      as,
      ...props
    },
    ref,
  ) => {
    const Comp = as || "div";
    return (
      <Comp
        {...props}
        className={cn("relative border border-b-0", className)}
        ref={ref}
      >
        <>
          {!!crossTopLeft && (
            <Cross
              className="left-0 top-0 -translate-x-full -translate-y-full"
              crossColor={crossColor}
            />
          )}
          {!!crossTopRight && (
            <Cross
              className="right-0 top-0 -translate-y-full translate-x-px"
              crossColor={crossColor}
            />
          )}
          {children}
          {!!crossBottomLeft && (
            <Cross
              className="bottom-0 left-0 -translate-x-full translate-y-px"
              crossColor={crossColor}
            />
          )}
          {!!crossBottomRight && (
            <Cross
              className="bottom-0 right-0 translate-x-px translate-y-px"
              crossColor={crossColor}
            />
          )}
        </>
      </Comp>
    );
  },
);
