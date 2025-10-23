import { Link } from "next-view-transitions";
import { MobileMenu } from "@/components/nav/mobile-menu";
import { ThemeToggle } from "@/components/nav/theme-toggle";
import { DesktopMenu } from "@/components/nav/desktop-menu";

export function Navbar() {
  return (
    <nav className='container mx-auto flex max-w-13xl items-center p-4 4xl:px-6 4xl:py-5'>
      <section className='flex flex-1 items-center justify-start pb-1'>
        <Link
          href='/'
          className='text-3xl font-black -tracking-widest text-primary text-shadow-black text-shadow-sm'
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
