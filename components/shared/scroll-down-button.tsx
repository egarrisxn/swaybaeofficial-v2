"use client";

import { ArrowDownIcon } from "@/components/icons";

import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

import type { TargetId } from "@/types";

export function ScrollDownButton({ targetId }: TargetId) {
  const scrollTo = useSmoothScroll();

  return (
    <button
      type='button'
      onClick={() => scrollTo(targetId)}
      className='absolute bottom-5 left-1/2 z-30 -translate-x-1/2 animate-bounce cursor-pointer rounded-full p-3 transition-transform hover:scale-110'
      aria-label='Scroll down'
    >
      <ArrowDownIcon className='size-8 text-white' />
    </button>
  );
}
