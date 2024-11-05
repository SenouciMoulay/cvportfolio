import { Box } from "./box";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box
      as="footer"
      className="flex justify-center items-center p-4 h-14 border-t w-container mx-auto mt-auto border-b mb-6"
      tl
      tr
      bl
      br
    >
      &copy; {year}
    </Box>
  );
}
