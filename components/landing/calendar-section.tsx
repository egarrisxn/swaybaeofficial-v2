import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LandingCalendar } from "@/components/calendar/landing-calendar";

import { calendarText } from "@/data/landing";

export default function CalendarSection() {
  return (
    <section id='calendar' aria-labelledby='calendar-heading' className='py-24'>
      <div className='container mx-auto grid max-w-xl grid-cols-1 gap-16 px-4 lg:max-w-3xl xl:max-w-7xl xl:grid-cols-2 xl:gap-16 2xl:max-w-8xl 2xl:gap-24 2xl:px-8 4xl:flex 4xl:max-w-11xl 4xl:items-center 4xl:px-0'>
        <div className='order-1 flex flex-col justify-center gap-3 px-4 xs:px-6 xl:order-2 xl:mb-24 xl:gap-5 xl:px-0 4xl:w-[55%]'>
          <span className='text-sm font-extrabold tracking-wide text-muted-foreground uppercase xs:text-base'>
            {calendarText.b}
          </span>
          <h2
            id='calendar-heading'
            className='max-w-3xl font-serif text-3xl font-bold tracking-tight text-shadow-lg sm:text-4xl sm:leading-none lg:text-5xl 2xl:text-6xl'
          >
            {calendarText.h2}
          </h2>
          <p className='max-w-3xl font-light text-muted-foreground sm:text-lg sm:leading-snug lg:text-xl 2xl:text-[1.35rem] 2xl:leading-snug'>
            {calendarText.p}
          </p>
          <Link href='/calendar' className='pt-2 lg:pt-0'>
            <Button variant='contrast'>Check Schedule</Button>
          </Link>
        </div>
        <div className='order-2 flex flex-col justify-center xs:px-1 xl:order-1 4xl:w-[45%]'>
          <LandingCalendar />
        </div>
      </div>
    </section>
  );
}
