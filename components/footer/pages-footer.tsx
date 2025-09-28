import { TooltipSocialIcon } from "@/components/shared/tooltip-social-icon";
import { CopyrightText } from "@/components/footer/copyright-text";
import { LinkRenderer } from "@/components/footer/link-renderer";
import { socialData, sharedLinks } from "@/lib/constants";

export default function PagesFooter() {
  return (
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
  );
}
