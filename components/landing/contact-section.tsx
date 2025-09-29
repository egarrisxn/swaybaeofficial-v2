import Link from "next/link";
import { UserContactForm } from "@/components/resend/user-contact-form";
import {
  MailsIcon,
  MapPinIcon,
  MessageCircleIcon,
  TvPlayIcon,
} from "@/components/icons";

import type { TextBlurb, Links, IconComponent } from "@/types";

export const contactText: TextBlurb = {
  badge: `Let's connect`,
  heading: `I'd love to hear from you!`,
  body: `Please feel free to reach out below with any inquiries, collaborations, or thoughts!`,
};

interface Contact extends Links {
  title: string;
  description?: string;
  Icon: IconComponent;
}

interface ContactLinks {
  title: string;
  links: Contact[];
}

const contactItems: ContactLinks = {
  title: "Contact",
  links: [
    {
      title: "Stream",
      description: "Catch me live on Twitch :",
      href: "https://www.twitch.tv/sway_bae",
      label: "www.twitch.tv/sway_bae",
      external: true,
      Icon: TvPlayIcon,
    },
    {
      title: "Chat",
      description: "Keep up with me over at",
      href: "https://discord.com/invite/K73uN9k",
      label: "Our Discord Server",
      external: true,
      Icon: MessageCircleIcon,
    },
    {
      title: "Email",
      description: "Prefer direct communication?",
      href: "mailto:sway.bae9000@gmail.com",
      label: "sway.bae9000@gmail.com",
      external: true,
      Icon: MailsIcon,
    },
    {
      title: "IRL",
      description: "Cons and Events are always on",
      href: "/calendar",
      label: "The Calendar Page",
      external: false,
      Icon: MapPinIcon,
    },
  ],
};

export default function ContactSection() {
  return (
    <section
      id='contact'
      aria-labelledby='contact-heading'
      className='pt-24 pb-16'
    >
      <div className='container mx-auto grid max-w-xl grid-cols-1 gap-12 px-4 md:max-w-3xl lg:max-w-7xl lg:gap-8 lg:px-12 xl:gap-12 2xl:max-w-8xl 2xl:gap-16 2xl:px-0 4xl:max-w-10xl'>
        <div className='flex flex-col justify-center gap-3 px-4 xs:px-6 md:px-0 lg:gap-5'>
          <span className='text-sm font-extrabold tracking-wide text-muted-foreground uppercase xs:text-base'>
            {contactText.badge}
          </span>
          <h2
            id='contact-heading'
            className='max-w-5xl font-serif text-3xl font-bold tracking-tight text-shadow-lg sm:text-4xl sm:leading-none lg:text-5xl 2xl:text-6xl'
          >
            {contactText.heading}
          </h2>
          <p className='max-w-xl font-light text-muted-foreground sm:text-lg sm:leading-snug lg:max-w-5xl lg:text-xl 2xl:text-[1.35rem] 2xl:leading-snug'>
            {contactText.body}
          </p>
        </div>
        <div className='mx-auto grid w-full gap-12 md:grid-cols-2 md:place-items-start md:gap-0 lg:place-items-stretch'>
          <div className='order-2 grid grid-cols-1 items-center gap-y-10 px-4 xs:px-6 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-4 sm:px-4 md:order-1 md:grid-cols-1 md:gap-y-10 md:px-0 lg:mb-8 lg:grid-cols-2 lg:gap-y-0 lg:pr-4'>
            {contactItems.links.map(
              ({ title, description, href, label, external, Icon }) => (
                <div key={title}>
                  <div className='flex flex-row items-center gap-1 xl:gap-1.5'>
                    <Icon className='size-4.5 shrink-0 md:size-3.5 lg:size-4 xl:size-5' />{" "}
                    <h3 className='font-semibold xs:text-lg sm:text-base md:text-sm lg:text-base xl:text-lg 2xl:text-xl'>
                      {title}
                    </h3>
                  </div>
                  {description && (
                    <p className='mt-1 text-sm tracking-tight text-muted-foreground xs:text-base sm:text-sm md:mt-0.5 md:text-xs lg:mt-1 lg:text-sm xl:text-base 4xl:text-lg'>
                      {description}
                    </p>
                  )}
                  {external ? (
                    <a
                      href={href}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-sm font-medium tracking-tight text-primary xs:text-base sm:text-sm md:text-xs lg:text-sm xl:text-base 4xl:text-lg'
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      className='text-sm font-medium tracking-tight text-primary xs:text-base sm:text-sm md:text-xs lg:text-sm xl:text-base 4xl:text-lg'
                    >
                      {label}
                    </Link>
                  )}
                </div>
              )
            )}
          </div>
          <div className='order-1 w-full pt-8 xs:px-1 md:px-0 md:pt-0 lg:order-2'>
            <UserContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
