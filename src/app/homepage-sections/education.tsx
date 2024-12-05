import { Box, BoxTitle } from "@/components/box";

export function EducationSection() {
  return (
    <Box tr tl br bl as="section">
      <BoxTitle className="px-4 py-4 text-center">Education</BoxTitle>
      <div className="grid w-full grid-cols-6 [&>*]:p-4">
        <Box className="col-span-6 border-l-0 sm:col-span-4" br tr>
          1
        </Box>
        <Box className="col-span-6 border-l-0 border-r-0 sm:col-span-2">1</Box>
        <Box className="col-span-6 border-l-0 sm:col-span-2" br tl>
          1
        </Box>
        <Box className="col-span-6 border-l-0 border-r-0 sm:col-span-4">1</Box>
      </div>
    </Box>
  );
}
