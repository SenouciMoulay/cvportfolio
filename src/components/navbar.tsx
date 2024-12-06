"use client";

import Link from "next/link";
import { Box } from "./box";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <>
      <div className="before:fixed before:left-0 before:right-0 before:top-0 before:z-[11] before:h-16 before:bg-background md:before:h-20" />
      <Box
        as="nav"
        className="sticky top-4 z-20 mx-auto mt-4 flex h-14 w-container items-center justify-between border-b bg-background p-4 md:top-6 md:mt-6"
        tl
        tr
        bl
        br
      >
        <Link href="/" className='text-lg'>
          <b>Kopenkin Dmitrii</b>
        </Link>
        <div className="flex items-center gap-1">
          {/* <Button asChild variant="link" size="icon-sm" disabled>
            <Link href="/blog">Blog</Link>
          </Button> */}
          <ThemeToggle />
        </div>
      </Box>
    </>
  );
}
