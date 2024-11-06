import { Box } from "./box";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box
      as="footer"
      className="mx-auto mb-6 mt-auto flex h-14 w-container items-center justify-center border-b border-t p-4"
      tl
      tr
      bl
      br
    >
      &copy; {year}
    </Box>
  );
}
