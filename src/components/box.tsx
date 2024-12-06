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

export const BoxCross = ({
  className,
  crossColor,
  small,
}: {
  className?: string;
  crossColor?: string;
  small?: boolean;
}) => {
  return (
    <div className={cn("absolute z-10", className)}>
      <div
        className={`${small ? "h-4" : "h-6"} translate-y-1/2 border-r ${crossColor}`}
      />
      <div
        className={`${small ? "w-4" : "w-6"} translate-x-1/2 border-t ${crossColor}`}
      />
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
            <BoxCross
              className="left-0 top-0 -translate-x-full -translate-y-full"
              crossColor={crossColor}
            />
          )}
          {!!crossTopRight && (
            <BoxCross
              className="right-0 top-0 -translate-y-full translate-x-px"
              crossColor={crossColor}
            />
          )}
          {children}
          {!!crossBottomLeft && (
            <BoxCross
              className="bottom-0 left-0 -translate-x-full translate-y-px"
              crossColor={crossColor}
            />
          )}
          {!!crossBottomRight && (
            <BoxCross
              className="bottom-0 right-0 translate-x-px translate-y-px"
              crossColor={crossColor}
            />
          )}
        </>
      </Comp>
    );
  },
);

export const BoxTitle = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"span"> & {
    as?: React.ElementType;
  }
>(({ as, className, ...props }, ref) => {
  const Comp = as || "span";
  return (
    <Comp
      {...props}
      ref={ref}
      className={cn("inline-block font-bold", className)}
    />
  );
});
