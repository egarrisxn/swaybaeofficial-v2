"use client";

import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { navLinks } from "@/lib/constants";

export function DesktopMenu() {
  const pathname = usePathname();
  const activeStyle = { color: "var(--link)" };

  return (
    <div className='hidden lg:block'>
      <NavigationMenu className='flex' viewport={false}>
        <NavigationMenuList className='md:gap-6 xl:gap-8'>
          {navLinks.map((link, index) => (
            <NavigationMenuItem key={index}>
              {link.external ? (
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <a href={link.href} target='_blank' rel='noreferrer noopener'>
                    {link.label}
                  </a>
                </NavigationMenuLink>
              ) : (
                <NavigationMenuLink
                  asChild
                  className={navigationMenuTriggerStyle()}
                >
                  <Link
                    href={link.href}
                    style={pathname === link.href ? activeStyle : {}}
                  >
                    {link.label}
                  </Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Subathon</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className='grid w-25'>
                <li>
                  <NavigationMenuLink asChild>
                    <Link href='/subathon/2024'>2024</Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link href='/subathon/2025'>2025</Link>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
