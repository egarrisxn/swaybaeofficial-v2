import Link from "next/link";
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
      <div className='container mx-auto grid w-full max-w-xl grid-cols-1 gap-12 px-4 lg:max-w-6xl lg:grid-cols-2 lg:place-items-start xl:max-w-7xl xl:place-items-center 2xl:gap-16 2xl:px-0'>
        <div className='order-1 mx-auto flex w-full flex-col justify-center gap-3 lg:order-2 lg:mt-4 lg:gap-4 xl:mt-0 xl:mb-24 xl:max-w-2xl xl:px-4 2xl:pr-16 2xl:pl-6'>
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
          <Link href='/calendar' className='pt-1'>
            <Button variant='contrast'>Check Schedule</Button>
          </Link>
        </div>
        <div className='order-2 mx-auto flex w-full flex-col justify-center lg:order-1 xl:max-w-xl'>
          <LandingCalendar />
        </div>
      </div>
    </section>
  );
}

// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { LandingCalendar } from "@/components/calendar/landing-calendar";

// import type { TextBlurb } from "@/types";

// export const calendarText: TextBlurb = {
//   badge: "Stay up to date",
//   heading: `Check out my calendar to see what's coming up next!`,
//   body: `The calendar is the best source of knowing what's coming up for the month ahead. It is always updated with upcoming Twitch streams, YouTube videoeos, and special events!`,
// };

// export default function CalendarSection() {
//   return (
//     <section
//       id='calendar'
//       aria-labelledby='calendar-heading'
//       className='py-24 4xl:py-40'
//     >
//       <div className='container mx-auto grid max-w-xl grid-cols-1 gap-16 px-4 lg:max-w-3xl xl:max-w-7xl xl:grid-cols-[43%_57%] xl:gap-0 xl:px-0 2xl:max-w-7xl 4xl:max-w-8xl'>
//         <div className='order-1 flex flex-col justify-center gap-3 px-4 xs:px-6 xl:order-2 xl:max-w-none xl:items-start xl:gap-5 xl:px-8 xl:pb-24 xl:text-start'>
//           <span className='text-sm font-extrabold tracking-wide text-muted-foreground uppercase xs:text-base'>
//             {calendarText.badge}
//           </span>
//           <h2
//             id='calendar-heading'
//             className='max-w-5xl font-serif text-3xl font-bold tracking-tight text-shadow-lg sm:text-4xl sm:leading-none lg:text-5xl 2xl:text-6xl'
//           >
//             {calendarText.heading}
//           </h2>
//           <p className='max-w-5xl font-light text-muted-foreground sm:text-lg sm:leading-snug lg:text-xl 2xl:text-[1.35rem] 2xl:leading-snug'>
//             {calendarText.body}
//           </p>
//           <Link href='/calendar' className='pt-1'>
//             <Button variant='contrast'>Check Schedule</Button>
//           </Link>
//         </div>
//         <div className='order-2 w-full xs:px-1 xl:order-1 xl:mx-auto xl:flex xl:flex-col xl:items-start xl:justify-center xl:px-0'>
//           <LandingCalendar />
//         </div>
//       </div>
//     </section>
//   );
// }
