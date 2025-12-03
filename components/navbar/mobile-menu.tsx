"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { DropdownToggle } from "@/components/navbar/dropdown-toggle";

import { mobileNavLinks } from "@/lib/constants";

export function MobileMenu() {
  const pathname = usePathname();
  const activeStyle = { color: "var(--link)" };
  const [open, setOpen] = useState(false);

  return (
    <div className='lg:hidden'>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <DropdownToggle />
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
                    onClick={() => setOpen(false)} // <-- close popover
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
