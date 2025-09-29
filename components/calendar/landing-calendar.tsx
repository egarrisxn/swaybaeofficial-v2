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
import { CalendarList } from "@/components/calendar/calendar-list";
import { CalendarSubscribe } from "@/components/calendar/calendar-subscribe";

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
            className='rounded-xl'
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
            className='rounded-xl'
            onClick={() => navigateMonth(1)}
          >
            <ChevronRightIcon className='size-4.5' aria-hidden />
            <span className='sr-only'>Next month</span>
          </Button>
        </CardHeader>
      )}
      <CardContent className='mb-0 px-4 pt-1 pb-0'>
        {loading ? (
          <div
            className='space-y-4 overflow-y-auto pr-2'
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
