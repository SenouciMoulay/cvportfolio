import { Box } from "@/components/box";
import MarqueeAnimation from "@/components/marquee-animation";
import { interleave } from "@/lib/utils";
import { DotIcon } from "lucide-react";
import {getTranslations} from 'next-intl/server';

export async function QualitiesCarousel() {
  const t = await getTranslations();
  const qualitiesArray = [
    t('Qualities.0'),
    t('Qualities.1'),
    t('Qualities.2'),
    t('Qualities.3'),
    t('Qualities.4'),
    t('Qualities.5'),
    t('Qualities.6'),
    t('Qualities.7'),
    t('Qualities.8'),
  ];
  
  return (
    <Box className="py-2 print:hidden">
      <MarqueeAnimation
        baseVelocity={0.5}
        direction="start-to-end"
        pauseOnHover
        className="gap-2"
        betweenElement={<DotIcon className="size-4" />}
      >
        <div className="flex items-center gap-2">
          {interleave(
            qualitiesArray.map((q, index) => (
              <span key={`quality-${index}`} className="hover:scale-105">
                {q}
              </span>
            )),
            (i) => (
              <DotIcon className="size-4" key={`dot-${i}`} />
            ),
          )}
        </div>
      </MarqueeAnimation>
    </Box>
  );
}
