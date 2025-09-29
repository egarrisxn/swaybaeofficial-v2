"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, RefreshCwIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CalendarGrid } from "@/components/calendar/calendar-grid";
import { CalendarList } from "@/components/calendar/calendar-list";
import { CalendarSubscribe } from "@/components/calendar/calendar-subscribe";

import { useCalendar } from "@/hooks/use-calendar";

import { calendarDays } from "@/lib/constants";

interface HybridCalendarProps {
  initialDate?: Date;
  maxHeight?: number;
  showMonthNav?: boolean;
}

export default function HybridCalendar({
  initialDate,
  maxHeight = 600,
  showMonthNav = true,
}: HybridCalendarProps) {
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
            className='rounded-xl lg:size-10.5'
            onClick={() => navigateMonth(-1)}
          >
            <ChevronLeftIcon className='size-4.5 lg:size-5' aria-hidden />
            <span className='sr-only'>Previous month</span>
          </Button>
          <h2
            className='font-serif text-2xl font-semibold tracking-tight text-card-foreground sm:text-3xl lg:text-4xl 4xl:text-5xl'
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
            className='rounded-xl lg:size-10.5'
            onClick={() => navigateMonth(1)}
          >
            <ChevronRightIcon className='size-4.5 lg:size-5' aria-hidden />
            <span className='sr-only'>Next month</span>
          </Button>
        </CardHeader>
      )}

      <CardContent className='px-4 pt-1 lg:m-0 lg:p-0'>
        {loading ? (
          <>
            <div className='hidden lg:block'>
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
              <div className='grid grid-cols-7 gap-2'>
                {Array.from({ length: 35 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    className='aspect-square w-full animate-pulse rounded-xl'
                  />
                ))}
              </div>
            </div>
            <div
              className='block space-y-4 overflow-y-auto pr-2 lg:hidden'
              style={{ maxHeight }}
              aria-busy='true'
            >
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className='space-y-2 pt-1'>
                  <Skeleton className='h-6 w-40' />
                  <Skeleton className='h-24 w-full rounded-xl' />
                </div>
              ))}
            </div>
          </>
        ) : error ? (
          <div
            className='grid place-items-center text-center'
            style={{ minHeight: maxHeight }}
            role='alert'
          >
            <div>
              <p className='mb-2 text-lg font-medium text-destructive'>
                Error loading events
              </p>
              <p className='mb-4 text-sm text-muted-foreground'>{error}</p>
              <Button onClick={refetch}>
                <RefreshCwIcon className='mr-2 size-4' aria-hidden />
                Try Again
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className='hidden lg:block'>
              <CalendarGrid
                currentDate={currentDate}
                onDateChange={setCurrentDate}
                events={events}
              />
            </div>
            <div
              className='block overflow-y-auto border-b pr-2 lg:hidden'
              style={{ maxHeight }}
              role='list'
            >
              <CalendarList
                events={events}
                currentDate={currentDate}
                onDateChange={setCurrentDate}
              />
            </div>
          </>
        )}
      </CardContent>
      <CardFooter className='flex flex-row items-start justify-end lg:mt-0 lg:pt-0'>
        <CalendarSubscribe />
      </CardFooter>
    </Card>
  );
}
