"use client";

import { Box } from "./box";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <Box
      as="nav"
      className="sticky top-4 z-20 mx-auto mt-4 flex h-14 w-container items-center justify-between border-b bg-background p-4 before:fixed before:left-0 before:top-0 before:-z-10 before:h-4 before:w-svw before:bg-background md:top-6 md:mt-6 md:before:h-6"
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
