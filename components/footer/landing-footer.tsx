import Link from "next/link";
import { UserNewsletterForm } from "@/components/resend/user-newsletter-form";
import { TooltipSocialIcon } from "@/components/shared/tooltip-social-icon";
import { CopyrightText } from "@/components/footer/copyright-text";
import { LinkRenderer } from "@/components/footer/link-renderer";
import { LinkList } from "@/components/footer/link-list";
import { BackToTopButton } from "@/components/footer/back-to-top-button";
import { CurrentlyPlayingSpotify } from "@/components/footer/currently-playing-spotify";

import {
  quickLinks,
  moreLinks,
  sharedLinks,
  socialData,
} from "@/lib/constants";

export function LandingFooter() {
  return (
    <footer className='mx-auto w-full max-w-13xl md:mb-6 md:px-6 2xl:mb-8 2xl:px-8 4xl:px-0'>
      <div className='rounded-t-3xl bg-shaded bg-[url(/graphics/grainy.png)] bg-repeat p-6 md:rounded-3xl md:shadow-lg'>
        <div className='mx-auto w-full max-w-12xl'>
          <div className='px-4 pt-8 sm:px-6 md:pb-16 lg:px-8 lg:pb-0 xl:px-16 4xl:px-24'>
            <div className='flex flex-wrap gap-12 md:justify-between md:gap-0'>
              {/* Column 1 */}

              <section className='flex w-full flex-col justify-between pb-4 md:w-[75%] md:items-start md:pb-6 lg:w-[30%] lg:pb-0 xl:w-[25%]'>
                <Link
                  href='/'
                  className='text-6xl font-black tracking-[-0.1em] text-primary text-shadow-black text-shadow-sm md:mb-5'
                >
                  Sway Bae
                </Link>
                <div className='hidden lg:block'>
                  <CurrentlyPlayingSpotify />
                </div>
              </section>

              {/* Column 2 */}

              <section className='flex w-full flex-col gap-8 text-shaded-foreground md:flex-row md:justify-between md:gap-0 lg:w-[65%] xl:w-[60%]'>
                <div className='mb-6 md:hidden'>
                  <h4 className='mb-6 text-sm font-medium'>Newsletter</h4>
                  <p className='mb-1.5 text-sm'>
                    Subscribe for the <span className='font-bold'>latest</span>{" "}
                    updates!
                  </p>
                  <UserNewsletterForm />
                </div>
                <LinkList title='Quick Links' links={quickLinks} />
                <LinkList title='More Links' links={moreLinks} />
                <div>
                  <div className='hidden md:block'>
                    <h4 className='mb-6 text-sm font-medium'>Newsletter</h4>
                    <p className='mb-1.5 text-sm'>
                      Subscribe for the{" "}
                      <span className='font-bold'>latest</span> updates!
                    </p>
                    <UserNewsletterForm />
                  </div>
                  <div className='hidden flex-row items-center gap-4 text-shaded-foreground lg:mt-9 lg:flex'>
                    {socialData.map(({ id, title, href, className, Icon }) => (
                      <TooltipSocialIcon
                        key={id}
                        id={id}
                        title={title}
                        href={href}
                        Icon={Icon}
                        className={`group transition-color size-4.5 text-shaded-foreground hover:text-link lg:size-5 ${className ?? ""}`}
                      />
                    ))}
                  </div>
                  <div className='md:hidden'>
                    <CurrentlyPlayingSpotify />
                  </div>
                  <div className='hidden md:mt-11 md:flex lg:mt-13 lg:mr-1 lg:justify-end'>
                    <BackToTopButton targetId='hero' />
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Column 3 */}

          <section className='flex flex-col flex-wrap items-center justify-center gap-4 border-t pt-8 pb-2 text-shaded-foreground lg:flex-row lg:justify-between lg:gap-0 lg:px-8 xl:px-16 4xl:px-24'>
            <ul className='flex flex-wrap items-center gap-1 lg:gap-1.5 4xl:gap-2'>
              {sharedLinks.map(({ href, label, icon, external }, i) => (
                <li
                  key={label}
                  className='flex items-center text-xs font-medium tracking-tight lg:text-base 4xl:text-lg'
                >
                  <LinkRenderer
                    href={href}
                    label={label}
                    icon={icon}
                    external={external}
                  />
                  {i < sharedLinks.length - 1 && (
                    <span
                      className='pl-1 lg:pl-1.5 4xl:pl-2'
                      aria-hidden='true'
                    >
                      •
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <div className='flex flex-row items-center gap-3 lg:hidden'>
              {socialData.map(({ id, title, href, className, Icon }) => (
                <TooltipSocialIcon
                  key={id}
                  id={id}
                  title={title}
                  href={href}
                  Icon={Icon}
                  className={`size-4 ${className ?? ""}`}
                />
              ))}
            </div>
            <p className='text-xs font-medium tracking-tight lg:text-base 4xl:text-lg'>
              <CopyrightText />
            </p>
          </section>
        </div>
      </div>
    </footer>
  );
}
