"use client";

import { Navbar } from "@/components/nav/navbar";

import { useScrollVisibility } from "@/hooks/use-scroll-visibility";

export function LandingNavbar() {
  const isVisible = useScrollVisibility("#hero");

  return (
    <div
      className={`fixed inset-x-0 top-0 z-30 mx-auto flex w-full items-center bg-background text-foreground backdrop-blur-md transition-all duration-300 ease-in-out 4xl:mt-5 4xl:max-w-13xl 4xl:rounded-full 4xl:border 4xl:shadow-lg 4xl:backdrop-blur-lg ${
        isVisible
          ? "pointer-events-auto translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-2 opacity-0"
      } `}
    >
      <Navbar />
    </div>
  );
}
