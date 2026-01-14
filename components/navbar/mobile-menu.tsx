"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import { mobileNavLinks } from "@/lib/constants";

export function MobileMenu() {
  const pathname = usePathname();
  const activeStyle = { color: "var(--link)" };
  const [open, setOpen] = useState(false);

  return (
    <div className='lg:hidden'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button className='group text-text-foreground inline-flex cursor-pointer items-center justify-center transition-all'>
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
                className='origin-center -translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135'
              />
              <path
                d='M4 12H20'
                className='origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45'
              />
              <path
                d='M4 12H20'
                className='origin-center translate-y-1.75 transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-135'
              />
            </svg>
          </button>
        </PopoverTrigger>
        <PopoverContent
          align='start'
          side='top'
          className='inset-0 mt-3 h-screen w-screen max-w-none rounded-none border-none bg-background p-6'
        >
          <div className='flex flex-col gap-6'>
            {mobileNavLinks.map((link, index) => (
              <div key={index} className='w-full text-lg font-medium'>
                {link.external ? (
                  <a
                    href={link.href}
                    target='_blank'
                    rel='noreferrer noopener'
                    className='block w-full'
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    style={pathname === link.href ? activeStyle : {}}
                    className='block w-full'
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
