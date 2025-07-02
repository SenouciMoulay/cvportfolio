"use client";

import type { TechId } from "@/app/data/technologies";
import React from "react";

export type TechWindowContextType =
  | Extract<TechId, "react" | "typescript" | "nextjs" | "postgres">
  | "other"
  | null;

const TechWindowContext = React.createContext<
  [
    TechWindowContextType,
    React.Dispatch<React.SetStateAction<TechWindowContextType>>,
  ]
>(null!);

export function TechWindowProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const state = React.useState<TechWindowContextType>(null);

  return (
    <TechWindowContext value={state}>
      {children}
    </TechWindowContext>
  );
}

export function useTechWindow() {
  return React.useContext(TechWindowContext);
}
