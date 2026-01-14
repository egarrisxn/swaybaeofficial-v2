"use client";

import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import type { TargetId } from "@/types";

export function BackToTopButton({ targetId }: TargetId) {
  const scrollTo = useSmoothScroll();

  return (
    <Button
      aria-label='Back to top'
      variant='contrast'
      onClick={() => scrollTo(targetId)}
    >
      BACK TO TOP
    </Button>
  );
}
