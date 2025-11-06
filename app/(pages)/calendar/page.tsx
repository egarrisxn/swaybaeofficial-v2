import type { Metadata } from "next";
import HybridCalendar from "@/components/calendar/hybrid-calendar";
import { NewDate } from "@/lib/dates";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "Stay up to date with everything going on with Sway Bae and The Bae Squad!",
};

export default async function CalendarPage() {
  const initialDate = await NewDate();

  return (
    <section className='pb-24'>
      <div className='container mx-auto max-w-3xl space-y-14 px-4 lg:max-w-8xl xl:gap-14 4xl:max-w-10xl'>
        <div className='flex flex-col justify-center gap-3 px-2 lg:gap-4 lg:px-4'>
          <h2 className='max-w-5xl font-serif text-3xl font-bold tracking-tight text-shadow-lg sm:text-4xl sm:leading-none lg:text-5xl 2xl:text-6xl'>
            Calendar
          </h2>
          <p className='max-w-xl font-light text-muted-foreground sm:text-lg sm:leading-snug lg:max-w-5xl lg:text-xl 2xl:text-[1.35rem] 2xl:leading-snug'>
            Stay up to date with everything going on.
          </p>
        </div>
        <div>
          <HybridCalendar initialDate={initialDate} showMonthNav={true} />
        </div>
      </div>
    </section>
  );
}
