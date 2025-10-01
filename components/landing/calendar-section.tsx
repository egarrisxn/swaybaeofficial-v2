import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";
import { LandingCalendar } from "@/components/calendar/landing-calendar";

import type { TextBlurb } from "@/types";

export const calendarText: TextBlurb = {
  badge: "Stay up to date",
  heading: `Check out my calendar to see what's coming up!`,
  body: `The calendar is the best source of knowing what's coming up for the month ahead. It is always updated with upcoming Twitch streams, YouTube videos, and special events!`,
};

export default function CalendarSection() {
  return (
    <section
      id='calendar'
      aria-labelledby='calendar-heading'
      className='py-24 4xl:py-40'
    >
      <div className='container mx-auto grid w-full max-w-xl grid-cols-1 gap-12 px-4 lg:max-w-6xl lg:grid-cols-2 lg:place-items-start lg:px-8 xl:max-w-7xl 2xl:gap-20 4xl:max-w-9xl 4xl:px-0'>
        <div className='order-1 mx-auto flex w-full flex-col justify-center gap-3 lg:order-2 lg:mt-24 lg:max-w-2xl xl:gap-4 2xl:mt-32'>
          <span className='text-sm font-extrabold tracking-wide text-muted-foreground uppercase xs:text-base'>
            {calendarText.badge}
          </span>
          <h2
            id='calendar-heading'
            className='font-serif text-3xl font-bold tracking-tight text-shadow-lg sm:text-4xl sm:leading-none lg:text-5xl 2xl:text-6xl'
          >
            {calendarText.heading}
          </h2>
          <p className='font-light text-muted-foreground sm:text-lg sm:leading-snug lg:text-xl 2xl:text-[1.35rem] 2xl:leading-snug'>
            {calendarText.body}
          </p>
          <Link href='/calendar' className='pt-2'>
            <Button variant='contrast' size='dynamic'>
              Check Schedule
            </Button>
          </Link>
        </div>
        <div className='order-2 mx-auto flex w-full flex-col justify-center lg:order-1 xl:max-w-xl'>
          <LandingCalendar />
        </div>
      </div>
    </section>
  );
}
