import { ExternalLinkIcon } from "@/components/icons";

export function CalendarSubscribe() {
  const PUBLIC_ICS =
    "https://calendar.google.com/calendar/ical/63739436a2ea120a341ec13abffc4b1289f77240a837d12043bed81ce6c78e1c%40group.calendar.google.com/public/basic.ics";

  return (
    <a
      href={`https://calendar.google.com/calendar/u/0/r?cid=${encodeURIComponent(PUBLIC_ICS)}`}
      target='_blank'
      rel='noopener noreferrer'
      className='flex items-center text-link/90 transition-all hover:text-link'
    >
      <span className='text-sm sm:text-base'>Add to your Google Calendar </span>
      <ExternalLinkIcon className='ml-0.5 size-3.5 sm:size-4' />
    </a>
  );
}
