"use client";

import { useSmoothScroll } from "@/hooks/use-smooth-scroll";

import type { TargetId } from "@/types";

export function BackToTopButton({ targetId }: TargetId) {
  const scrollTo = useSmoothScroll();

  return (
    <button
      type='button'
      onClick={() => scrollTo(targetId)}
      className='inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-b from-[#232326] to-[#353538] px-5 py-2.5 text-sm font-semibold text-gray-50 uppercase shadow-[inset_-4px_-4px_4px_rgba(0,0,16,0.2),inset_0px_1px_2px_rgba(0,0,16,0.7),inset_4px_-4px_4px_rgba(0,0,16,0.2),0px_4px_10px_rgba(0,0,16,0.16),inset_0px_2px_3px_rgba(0,0,16,0.2),inset_0px_3px_6px_rgba(255,255,255,0.32)] transition hover:shadow-[inset_-2px_-2px_3px_rgba(0,0,16,0.25),inset_0px_1px_2px_rgba(0,0,16,0.7),inset_2px_-2px_3px_rgba(0,0,16,0.25),0px_3px_8px_rgba(0,0,16,0.2),inset_0px_2px_3px_rgba(0,0,16,0.25),inset_0px_3px_6px_rgba(255,255,255,0.3)] active:shadow-[inset_-2px_-2px_2px_rgba(0,0,16,0.2),inset_0px_1px_2px_rgba(0,0,16,0.6),inset_2px_-2px_2px_rgba(0,0,16,0.2),0px_2px_5px_rgba(0,0,16,0.16),inset_0px_2px_3px_rgba(0,0,16,0.2),inset_0px_3px_6px_rgba(255,255,255,0.25)] disabled:cursor-not-allowed disabled:bg-gradient-to-b disabled:from-[#2b2b2d] disabled:to-[#353537] disabled:text-gray-500 disabled:shadow-none'
      aria-label='Scroll to top'
    >
      <span>Back to top</span>
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
        className='size-3.5'
      >
        <path d='M5 15l7-7 7 7' />
      </svg>
    </button>
  );
}
