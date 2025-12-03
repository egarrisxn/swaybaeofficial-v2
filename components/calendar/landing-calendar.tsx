"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { LandingSkeleton } from "@/components/calendar/calendar-skeletons";
import { CalendarError } from "@/components/calendar/calendar-error";
import { CalendarList } from "@/components/calendar/calendar-list";
import { CalendarSubscribe } from "@/components/calendar/calendar-subscribe";
import { ChevronLeftIcon, ChevronRightIcon } from "@/components/icons";

import { useCalendar } from "@/hooks/use-calendar";

interface LandingCalendarProps {
  initialDate?: Date;
  maxHeight?: number;
  showMonthNav?: boolean;
}

export function LandingCalendar({
  initialDate,
  maxHeight = 600,
  showMonthNav = true,
}: LandingCalendarProps) {
  const [currentDate, setCurrentDate] = useState(initialDate ?? new Date());
  const { events, loading, error, refetch } = useCalendar(currentDate);

  const navigateMonth = (delta: number) =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + delta, 1)
    );

  return (
    <Card className='rounded-[2.5rem]'>
      {showMonthNav && (
        <CardHeader className='flex items-center justify-between'>
          <Button
            size='icon'
            variant='contrast'
            onClick={() => navigateMonth(-1)}
          >
            <ChevronLeftIcon className='size-4.5' aria-hidden />
            <span className='sr-only'>Previous month</span>
          </Button>

          <h2
            className='text-xl font-semibold'
            aria-live='polite'
            aria-atomic='true'
          >
            {currentDate.toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            })}
          </h2>

          <Button
            size='icon'
            variant='contrast'
            onClick={() => navigateMonth(1)}
          >
            <ChevronRightIcon className='size-4.5' aria-hidden />
            <span className='sr-only'>Next month</span>
          </Button>
        </CardHeader>
      )}
      <CardContent className='mb-0 px-4 pt-1 pb-0'>
        {loading ? (
          <LandingSkeleton maxHeight={maxHeight} />
        ) : error ? (
          <CalendarError refetch={refetch} maxHeight={maxHeight} />
        ) : (
          <div
            className='overflow-y-auto border-b pr-2'
            style={{ maxHeight }}
            role='list'
          >
            <CalendarList events={events} currentDate={currentDate} />
          </div>
        )}
      </CardContent>
      <CardFooter className='flex flex-row items-start justify-end'>
        <CalendarSubscribe />
      </CardFooter>
    </Card>
  );
}
