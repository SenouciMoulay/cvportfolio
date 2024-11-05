import { cn } from "@/lib/utils";
import React from "react";

type BoxProps = React.ComponentPropsWithoutRef<"div"> & {
  crossTopLeft?: boolean;
  crossBottomLeft?: boolean;
  crossTopRight?: boolean;
  crossBottomRight?: boolean;
};

const Cross = ({ className }: { className?: string }) => {
  return (
    <div className={cn('absolute z-10', className)}>
      <div className="h-6 border-r translate-y-1/2" />
      <div className="w-6 border-t translate-x-1/2" />
    </div>
  );
};

export const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  (
    {
      children,
      className,
      crossBottomLeft,
      crossBottomRight,
      crossTopLeft,
      crossTopRight,
      ...props
    },
    ref
  ) => {
    return (
      <div
        {...props}
        className={cn(
          "relative border border-b-0 last-of-type:border-b",
          className
        )}
        ref={ref}
      >
        {!crossTopLeft && (
          <Cross className="top-0 left-0 -translate-x-full -translate-y-full" />
        )}
        {!crossTopRight && (
          <Cross className="top-0 right-0 translate-x-px -translate-y-full" />
        )}
        {children}
        {!crossBottomLeft && (
          <Cross className="bottom-0 left-0 -translate-x-full translate-y-px" />
        )}
        {!crossBottomRight && (
          <Cross className="bottom-0 right-0 translate-x-px translate-y-px" />
        )}
      </div>
    );
  }
);
