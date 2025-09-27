"use client";

import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import type { ScrollButtons } from "@/types";

export function ScrollDownButton({ targetId }: ScrollButtons) {
  const scrollTo = useSmoothScroll();

  return (
    <Button
      size='dynamic'
      variant='outline'
      onClick={() => scrollTo(targetId)}
      className='text-white'
      aria-label='Scroll down'
    >
      Learn More
    </Button>
  );
}
