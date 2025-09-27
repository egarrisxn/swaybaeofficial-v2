"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { ThemeToggle } from "@/components/nav/theme-toggle";
import { navLinks } from "@/data/constants";

export function Hero() {
  const pathname = usePathname();
  const activeStyle = { color: "var(--link)" };
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='relative flex h-dvh flex-col'>
      <div className='absolute inset-0 size-full bg-background'>
        <div className='relative size-full overflow-hidden opacity-150 brightness-75 saturate-75'>
          <Image
            src='/hero/desktop.png'
            alt='Fallback image for desktop video'
            className='absolute inset-0 z-30 size-full object-cover'
            height={1440}
            width={2560}
            priority
          />
        </div>
      </div>
      {/* Container */}
      <div className='relative flex h-full font-black text-secondary uppercase'>
        {/* Navigation */}
        <section
          className={`hidden w-full items-center justify-end py-4 pr-4 md:gap-8 lg:fixed lg:top-0 lg:flex lg:py-6 lg:pr-6 xl:gap-10 ${scrolling ? "flex-grow-0" : "flex-grow"}`}
        >
          <NavigationMenu className='flex'>
            <NavigationMenuList className='md:gap-8 xl:gap-10'>
              {navLinks.map((link, index) => (
                <NavigationMenuItem
                  key={index}
                  className='inline-flex w-max cursor-pointer items-center justify-center text-sm transition-all hover:text-link xl:text-lg'
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
          <ThemeToggle />
        </section>

        {/* Main Text */}
        <div
          className={`absolute z-30 flex h-full w-fit leading-none font-black tracking-tighter transition-all duration-700 ease-in-out lg:fixed lg:h-auto lg:p-6 ${scrolling ? "justify-start text-xl lg:top-0 lg:left-0 lg:translate-y-0 lg:text-2xl 2xl:text-4xl" : "text-4xl md:text-9xl lg:top-full lg:-translate-y-full lg:text-[12rem] xl:text-[15rem] 2xl:text-[17rem] 3xl:text-[20rem]"}`}
        >
          <span className='whitespace-nowrap'>SWAY BAE</span>
        </div>
      </div>
    </div>
  );
}
