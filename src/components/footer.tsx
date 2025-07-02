import { ArrowUpRight } from "lucide-react";
import { Box } from "./box";
import { Button } from "./ui/button";
import {getTranslations} from 'next-intl/server';

export async function Footer() {
  const year = new Date().getFullYear();
  const t = await getTranslations('Footer');
  
  return (
    <Box
      as="footer"
      className="mx-auto mb-6 mt-auto flex h-14 w-container items-center justify-center gap-2 border-b border-t p-4 print:hidden"
      tl
      tr
      bl
      br
    >
      <Button asChild variant="link">
        <a
          href="https://github.com/kopenkinda/portfolio"
          rel="noreferrer noopener"
          target="_blank"
          className="px-0"
        >
          {t('source')}
          <ArrowUpRight size={16} className="ml-1" />
        </a>
      </Button>
      <span>&copy; {year}</span>
    </Box>
  );
}
