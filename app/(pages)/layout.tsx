import type { ReactNode } from "react";
import { Navbar } from "@/components/nav/navbar";
import PagesFooter from "@/components/footer/pages-footer";

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <div className='relative grid min-h-dvh w-full grid-rows-[auto_1fr_auto] overscroll-contain bg-[url(/graphics/noisey.svg)] bg-repeat'>
      <div className='mx-auto flex w-full items-center bg-background text-foreground backdrop-blur-md'>
        <Navbar />
      </div>
      <main>{children}</main>
      <PagesFooter />
    </div>
  );
}
