"use client";

import { ClockIcon, ExternalLinkIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { cn } from "@/lib/utils";
import {
  getEventLabelColor,
  getEventLabelType,
  formatEventTime,
} from "@/lib/calendar";

import type { CalendarEvent, CalendarEvents } from "@/types/calendar";

export function CalendarList({ currentDate, events }: CalendarEvents) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const lastDay = new Date(year, month + 1, 0).getDate();

  const monthDates = Array.from(
    { length: lastDay },
    (_, i) => new Date(year, month, i + 1)
  );

  const eventsByDate = events.reduce<Record<string, CalendarEvent[]>>(
    (acc, e) => {
      const key = e.start.toDateString();
      (acc[key] ||= []).push(e);
      return acc;
    },
    {}
  );

  return (
    <div className='space-y-6'>
      {monthDates.map((dateObj) => {
        const key = dateObj.toDateString();
        const dayEvents = eventsByDate[key] ?? [];
        const isToday = new Date().toDateString() === key;

        return (
          <div key={key} className='space-y-2'>
            <DayHeader date={dateObj} isToday={isToday} />
            {dayEvents.length > 0 ? (
              <div className='space-y-3' role='list'>
                {dayEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <p className='text-sm text-muted-foreground'>No events</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

function DayHeader({ date, isToday }: { date: Date; isToday: boolean }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 border-b border-border pb-2",
        isToday && "text-primary"
      )}
    >
      <h3 className='text-base font-semibold'>
        {date.toLocaleDateString("en-US", {
          weekday: "long",
          month: "long",
          day: "numeric",
        })}
      </h3>
      {isToday && (
        <Badge variant='secondary' className='rounded-full'>
          Today
        </Badge>
      )}
    </div>
  );
}

function EventCard({ event }: { event: CalendarEvent }) {
  return (
    <div className='flex flex-col justify-between gap-8 rounded-lg border border-border p-4 shadow-sm transition-shadow hover:shadow-md'>
      <div className='flex items-center justify-between gap-2'>
        <h4 className='text-xl leading-snug font-semibold'>{event.title}</h4>
        <Badge
          className={cn(
            "rounded-full text-xs font-medium",
            getEventLabelColor(event.type)
          )}
        >
          {getEventLabelType(event.type)}
        </Badge>
      </div>

      <div className='flex items-center justify-between gap-2'>
        <div className='flex items-center gap-1 text-muted-foreground'>
          <ClockIcon className='size-4' />
          {formatEventTime(event)}
        </div>

        {event.url && (
          <a
            href={event.url}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center text-link transition-all hover:text-link/90'
          >
            <ExternalLinkIcon className='size-4' />
          </a>
        )}
      </div>
    </div>
  );
}
