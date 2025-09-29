"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DropdownToggle } from "@/components/nav/dropdown-toggle";

import { navLinks } from "@/lib/constants";

export function MobileMenu() {
  const pathname = usePathname();
  const activeStyle = { color: "var(--link)" };

  return (
    <div className='lg:hidden'>
      <Popover>
        <PopoverTrigger asChild>
          <DropdownToggle />
        </PopoverTrigger>
        <PopoverContent
          align='start'
          side='top'
          className='inset-0 mt-3 h-screen w-screen max-w-none rounded-none border-none bg-background p-6'
        >
          <NavigationMenu className='w-full'>
            <NavigationMenuList className='flex flex-col items-start justify-start gap-6'>
              {navLinks.map((link, index) => (
                <NavigationMenuItem
                  key={index}
                  className='w-full text-lg font-medium'
                >
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
                    >
                      {link.label}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </PopoverContent>

        {/* <PopoverContent align='start' className='w-32'>
          <NavigationMenu className='max-w-none'>
            <NavigationMenuList className='flex flex-col items-start justify-start gap-1'>
              {navLinks.map((link, index) => (
                <NavigationMenuItem
                  key={index}
                  className='w-full cursor-pointer text-sm font-medium transition-all hover:text-link'
                >
                  {link.external ? (
                    <a
                      href={link.href}
                      target='_blank'
                      rel='noreferrer noopener'
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      style={pathname === link.href ? activeStyle : {}}
                    >
                      {link.label}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </PopoverContent> */}
      </Popover>
    </div>
  );
}
