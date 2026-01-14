"use client";

import Link from "next/link";
import { MobileMenu } from "@/components/navbar/mobile-menu";
import { ThemeToggle } from "@/components/navbar/theme-toggle";
import { DesktopMenu } from "@/components/navbar/desktop-menu";
import { useScrollVisibility } from "@/hooks/use-scroll-visibility";

export function LandingNavbar() {
  const isVisible = useScrollVisibility("#hero");

  return (
    <header
      aria-hidden={!isVisible}
      className={`fixed inset-x-0 top-0 z-30 mx-auto flex w-full items-center bg-background text-foreground backdrop-blur-md transition-all duration-300 ease-in-out 4xl:mt-5 4xl:max-w-13xl 4xl:rounded-full 4xl:border 4xl:shadow-lg 4xl:backdrop-blur-lg ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0"
      } `}
    >
      <nav className='container mx-auto flex max-w-13xl items-center p-4 4xl:px-6 4xl:py-5'>
        <section className='flex flex-1 items-center justify-start pb-1'>
          <Link
            href='/'
            className='text-3xl leading-none font-black -tracking-widest text-primary text-shadow-black/50 text-shadow-sm'
          >
            Sway Bae
          </Link>
        </section>
        <section className='hidden flex-1 items-center justify-center md:flex'>
          <DesktopMenu />
        </section>
        <section className='flex flex-1 items-center justify-end gap-7 pt-1'>
          <ThemeToggle />
          <MobileMenu />
        </section>
      </nav>
    </header>
  );
}
