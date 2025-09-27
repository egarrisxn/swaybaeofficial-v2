import type { ButtonHTMLAttributes } from "react";

type DropdownButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function DropdownToggle({ className, ...props }: DropdownButtonProps) {
  return (
    <button
      className={`group text-text-foreground inline-flex cursor-pointer items-center justify-center transition-all ${className ?? ""}`}
      {...props}
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
        className='size-5 md:size-6'
      >
        <path
          d='M4 12L20 12'
          className='origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]'
        />
        <path
          d='M4 12H20'
          className='origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45'
        />
        <path
          d='M4 12H20'
          className='origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]'
        />
      </svg>
    </button>
  );
}
