import { Link } from "next-view-transitions";
import { UserContactForm } from "@/components/resend/user-contact-form";

import { contactText, contactItems } from "@/data/landing";

export default function ContactSection() {
  return (
    <section
      id='contact'
      aria-labelledby='contact-heading'
      className='pt-24 pb-16'
    >
      <div className='container mx-auto grid max-w-xl grid-cols-1 gap-12 px-4 lg:max-w-7xl lg:gap-8 lg:px-12 xl:gap-12 2xl:max-w-8xl 2xl:gap-16 2xl:px-0 4xl:max-w-10xl'>
        <div className='flex flex-col justify-center gap-3 px-4 xs:px-6 md:px-0 lg:gap-5'>
          <span className='text-sm font-extrabold tracking-wide text-muted-foreground uppercase xs:text-base'>
            {contactText.b}
          </span>
          <h2
            id='contact-heading'
            className='max-w-5xl font-serif text-3xl font-bold tracking-tight text-shadow-lg sm:text-4xl sm:leading-none lg:text-5xl 2xl:text-6xl'
          >
            {contactText.h2}
          </h2>
          <p className='max-w-5xl font-light text-muted-foreground sm:text-lg sm:leading-snug lg:text-xl 2xl:text-[1.35rem] 2xl:leading-snug'>
            {contactText.p}
          </p>
        </div>
        <div className='mx-auto grid w-full gap-12 md:grid-cols-2 md:gap-2 xl:gap-0'>
          <div className='order-2 grid grid-cols-1 items-center gap-y-10 px-4 xs:px-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4 sm:px-4 md:order-1 md:grid-cols-1 md:gap-x-0 md:gap-y-0 md:px-0 lg:grid-cols-2 lg:gap-4 lg:px-4'>
            {contactItems.links.map(
              ({ title, description, href, label, external, Icon }) => (
                <div key={title}>
                  <div className='flex flex-row items-center gap-1 xl:gap-1 2xl:gap-1.5'>
                    <Icon className='size-4.5 shrink-0 lg:size-5' />{" "}
                    <h3 className='font-semibold xs:text-lg sm:text-base lg:text-lg 2xl:text-xl'>
                      {title}
                    </h3>
                  </div>
                  {description && (
                    <p className='mt-1 text-sm tracking-tight text-muted-foreground xs:text-base sm:text-sm xl:text-base 4xl:text-lg'>
                      {description}
                    </p>
                  )}
                  {external ? (
                    <a
                      href={href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm font-medium tracking-tight text-primary xs:text-base sm:text-sm xl:text-base 4xl:text-lg'
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className='text-sm font-medium tracking-tight text-primary xs:text-base sm:text-sm xl:text-base 4xl:text-lg'
                    >
                      {label}
                    </Link>
                  )}
                </div>
              )
            )}
          </div>
          <div className='order-1 w-full pt-8 xs:px-1 lg:order-2 lg:px-0 lg:pt-0'>
            <UserContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
