"use client";

import { Box } from "./box";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <Box
      as="nav"
      className="flex justify-between items-center p-4 h-14 border-b w-container mx-auto sticky top-4 md:top-6 mt-4 md:mt-6 z-20 bg-background before:fixed before:w-svw before:h-4 md:before:h-6 before:top-0 before:left-0 before:bg-background before:-z-10"
      tl
      tr
      bl
      br
    >
      <b>Kopenkin Dmitrii</b>
      <ThemeToggle />
    </Box>
  );
}
