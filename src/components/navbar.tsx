"use client";

import { Box } from "./box";

export function Navbar() {
  return (
    <Box className="flex p-4 h-14 max-w-5xl w-full mx-auto sticky top-6 mt-6 z-20 bg-background before:fixed before:w-svw before:h-6 before:top-0 before:left-0 before:bg-background before:-z-10">
      <b>Kopenkin Dmitrii</b>
    </Box>
  );
}
