"use client";

import { Button } from "@/components/ui/button";
import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useScrollVisibility } from "@/hooks/use-scroll-visibility";
import type { TargetId } from "@/types";

export function ScrollUpButton({ targetId }: TargetId) {
  const isVisible = useScrollVisibility("#hero");
  const scrollTo = useSmoothScroll();

  return (
    <Button
      aria-hidden={!isVisible}
      aria-label='Scroll up'
      onClick={() => scrollTo(targetId)}
      variant='contrast'
      size='icon'
      className={`fixed right-4 bottom-4 z-40 cursor-pointer rounded-full 5xl:right-72 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      } `}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
        width={24}
        height={24}
        className='size-4.5 lg:size-5'
      >
        <path d='M5 15l7-7 7 7' />
      </svg>
    </Button>
  );
}
