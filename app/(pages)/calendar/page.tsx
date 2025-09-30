import type { Metadata } from "next";
import HybridCalendar from "@/components/calendar/hybrid-calendar";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "Stay up to date with everything going on with Sway Bae and The Bae Squad!",
};

export default function CalendarPage() {
  return (
    <section className='pt-32 pb-40'>
      <div className='container mx-auto max-w-3xl px-4 lg:max-w-8xl 4xl:max-w-10xl'>
        <HybridCalendar initialDate={new Date()} showMonthNav={true} />
      </div>
    </section>
  );
}
