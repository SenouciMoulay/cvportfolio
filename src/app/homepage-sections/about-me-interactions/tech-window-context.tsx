"use client";

import React from "react";

export type TechWindowContextType =
  | "react"
  | "typescript"
  | "next"
  | "postgres"
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
    <TechWindowContext.Provider value={state}>
      {children}
    </TechWindowContext.Provider>
  );
}

export function useTechWindow() {
  return React.useContext(TechWindowContext);
}
