"use client";

import { useState } from "react";
import { CalendarDialog } from "@/components/calendar/calendar-dialog";
import { getEventLabelColor } from "@/lib/calendar";
import { cn } from "@/lib/utils";

import { calendarDays } from "@/lib/constants";

import type { CalendarEvent, CalendarEvents } from "@/types/calendar";

export function CalendarGrid({ currentDate, events }: CalendarEvents) {
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | undefined>(
    undefined
  );
  const [showEventDialog, setShowEventDialog] = useState(false);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const startingDayOfWeek = firstDay.getDay();

  const days: (number | null)[] = [];
  for (let i = 0; i < startingDayOfWeek; i++) days.push(null);
  for (let day = 1; day <= daysInMonth; day++) days.push(day);

  const getEventsForDate = (day: number) => {
    const targetDate = new Date(year, month, day);
    return events.filter((event) => {
      const eventDate = new Date(event.start);
      return (
        eventDate.getFullYear() === targetDate.getFullYear() &&
        eventDate.getMonth() === targetDate.getMonth() &&
        eventDate.getDate() === targetDate.getDate()
      );
    });
  };

  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setShowEventDialog(true);
  };

  return (
    <div className='p-6'>
      <div className='mb-4 grid grid-cols-7 gap-2'>
        {calendarDays.map((day) => (
          <div
            key={day}
            className='py-2 text-center text-sm font-medium text-muted-foreground'
          >
            {day}
          </div>
        ))}
      </div>

      <div className='grid grid-cols-7'>
        {days.map((day, idx) => {
          if (day === null)
            return <div key={`empty-${idx}`} className='aspect-square' />;

          const dayEvents = getEventsForDate(day);
          const isToday =
            new Date().toDateString() ===
            new Date(year, month, day).toDateString();

          return (
            <div
              key={`day-${day}-${idx}`}
              className={cn(
                "flex aspect-square flex-col border border-foreground/20 p-2 transition-all duration-200",
                isToday &&
                  "border-secondary bg-background/80 text-secondary dark:bg-background/30"
              )}
            >
              <span className='text-sm font-semibold'>{day}</span>
              <div className='flex flex-1 flex-col gap-2 overflow-hidden'>
                {dayEvents.length === 0 ? (
                  <p className='truncate py-1 text-xs text-foreground/80'>
                    No events today
                  </p>
                ) : (
                  <>
                    {dayEvents.slice(0, 2).map((event) => (
                      <div
                        key={event.id}
                        role='button'
                        tabIndex={0}
                        onClick={() => handleEventClick(event)}
                        className={cn(
                          "cursor-pointer rounded-[0.35rem] border-2 border-background px-2 py-1 text-xs font-medium text-black shadow-lg transition-opacity hover:opacity-80 dark:text-black",
                          getEventLabelColor(event.type)
                        )}
                        title={event.title}
                      >
                        {event.title}
                      </div>
                    ))}
                    {dayEvents.length > 2 && (
                      <div className='text-xs text-foreground'>
                        +{dayEvents.length - 2} more
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <CalendarDialog
        event={selectedEvent}
        open={showEventDialog}
        onOpenChange={(open) => {
          setShowEventDialog(open);
          if (!open) setSelectedEvent(undefined);
        }}
      />
    </div>
  );
}
