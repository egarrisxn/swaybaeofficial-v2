"use client";

import { useSmoothScroll } from "@/hooks/use-smooth-scroll";
import { useScrollVisibility } from "@/hooks/use-scroll-visibility";
import type { ScrollButtons } from "@/types";

export function ScrollUpButton({ targetId }: ScrollButtons) {
  const isVisible = useScrollVisibility("#hero");
  const scrollTo = useSmoothScroll();

  return (
    <button
      type='button'
      onClick={() => scrollTo(targetId)}
      className={`fixed right-4 bottom-4 z-40 cursor-pointer rounded-full border border-b-3 border-foreground border-b-foreground/90 bg-card p-3 text-card-foreground shadow-xl transition-all duration-300 ease-in-out 5xl:right-72 ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none translate-y-2 opacity-0"
      } `}
      aria-label='Scroll up'
    >
      <svg
        width={24}
        height={24}
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
        xmlns='http://www.w3.org/2000/svg'
        className='size-6 text-foreground'
      >
        <path d='M5 15l7-7 7 7' />
      </svg>
    </button>
  );
}
