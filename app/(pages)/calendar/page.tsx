import HybridCalendar from "@/components/calendar/hybrid-calendar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "Stay up to date with everything going on with Sway Bae and The Bae Squad!",
};

export default function CalendarPage() {
  return (
    <section className='size-full bg-[url(/graphics/noisey.svg)] bg-repeat'>
      <div className='pt-12 pb-40 md:pt-16 lg:pt-20 2xl:pt-24'>
        <div className='container mx-auto max-w-3xl px-4 lg:max-w-8xl 4xl:max-w-10xl'>
          <HybridCalendar initialDate={new Date()} showMonthNav={true} />
        </div>
      </div>
    </section>
  );
}
