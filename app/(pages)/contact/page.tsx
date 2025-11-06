"use client";

import { UserContactForm } from "@/components/resend/user-contact-form";

export default function ContactPage() {
  return (
    <section className='pb-24'>
      <div className='container mx-auto max-w-3xl space-y-14 px-4 lg:max-w-4xl xl:gap-14'>
        <div className='flex flex-col justify-center gap-3 px-2 lg:gap-4 lg:px-4'>
          <h2 className='max-w-5xl font-serif text-3xl font-bold tracking-tight text-shadow-lg sm:text-4xl sm:leading-none lg:text-5xl 2xl:text-6xl'>
            Contact
          </h2>
          <p className='max-w-xl font-light text-muted-foreground sm:text-lg sm:leading-snug lg:max-w-5xl lg:text-xl 2xl:text-[1.35rem] 2xl:leading-snug'>
            Response within a few days.
          </p>
        </div>
        <div>
          <UserContactForm />
        </div>
      </div>
    </section>
  );
}
