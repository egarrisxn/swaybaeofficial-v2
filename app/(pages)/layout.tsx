import type { ReactNode } from "react";
import { Navbar } from "@/components/navbar/navbar";
import PagesFooter from "@/components/footer/pages-footer";

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <div className='relative grid min-h-dvh w-full grid-rows-[auto_1fr_auto] overscroll-contain'>
      <div className='sticky inset-x-0 top-0 z-30 mx-auto flex w-full items-center bg-background text-foreground backdrop-blur-md transition-all duration-300 ease-in-out 4xl:mt-5 4xl:max-w-13xl 4xl:rounded-full 4xl:border 4xl:shadow-lg 4xl:backdrop-blur-lg'>
        <Navbar />
      </div>
      <main className='pt-16 md:pt-20'>{children}</main>
      <PagesFooter />
    </div>
  );
}
