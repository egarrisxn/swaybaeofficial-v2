import { Link } from "next-view-transitions";
import { MobileMenu } from "@/components/navbar/mobile-menu";
import { ThemeToggle } from "@/components/navbar/theme-toggle";
import { DesktopMenu } from "@/components/navbar/desktop-menu";

export function Navbar() {
  return (
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
  );
}
