import type { ReactNode } from "react";
import { Link } from "next-view-transitions";
import { MobileMenu } from "@/components/navbar/mobile-menu";
import { ThemeToggle } from "@/components/navbar/theme-toggle";
import { DesktopMenu } from "@/components/navbar/desktop-menu";
import { CopyrightText } from "@/components/footer/copyright-text";
import { LinkRenderer } from "@/components/footer/link-renderer";
import { TooltipSocialIcon } from "@/components/shared/tooltip-social-icon";

import { socialData, sharedLinks } from "@/lib/constants";

export default function PagesLayout({ children }: { children: ReactNode }) {
  return (
    <div className='relative grid min-h-dvh w-full grid-rows-[auto_1fr_auto] overscroll-contain'>
      <header className='sticky inset-x-0 top-0 z-30 mx-auto flex w-full items-center bg-background text-foreground backdrop-blur-md transition-all duration-300 ease-in-out 4xl:mt-5 4xl:max-w-13xl 4xl:rounded-full 4xl:border 4xl:shadow-lg 4xl:backdrop-blur-lg'>
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

      <main className='pt-16 md:pt-20'>{children}</main>

      <footer className='w-full border-t 4xl:border-t-0'>
        <div className='mx-auto flex w-full flex-col items-center justify-center gap-4 py-8 xl:grid xl:grid-cols-3 xl:gap-0 xl:px-6 xl:py-6 4xl:max-w-13xl'>
          <section className='flex justify-center lg:justify-start'>
            <ul className='flex flex-wrap items-center gap-1 xl:gap-1.5'>
              {sharedLinks.map(({ href, label, icon, external }, i) => (
                <li
                  key={label}
                  className='flex items-center text-xs font-medium tracking-tight xl:text-base xl:tracking-tighter'
                >
                  <LinkRenderer
                    href={href}
                    label={label}
                    icon={icon}
                    external={external}
                  />
                  {i < sharedLinks.length - 1 && (
                    <span className='pl-1 xl:pl-1.5' aria-hidden='true'>
                      •
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
          <section className='order-3 flex justify-center text-center xl:order-2 xl:justify-center'>
            <p className='text-xs font-medium tracking-tight xl:text-base xl:tracking-tighter'>
              <CopyrightText />
            </p>
          </section>
          <section className='order-2 flex justify-center xl:order-3 xl:justify-end'>
            <ul className='flex flex-wrap items-center gap-3 xl:gap-3.5'>
              {socialData.map(({ id, title, href, className, Icon }) => (
                <TooltipSocialIcon
                  key={id}
                  id={id}
                  title={title}
                  href={href}
                  Icon={Icon}
                  className={`size-4.5 xl:size-5 ${className ?? ""}`}
                />
              ))}
            </ul>
          </section>
        </div>
      </footer>
    </div>
  );
}
