"use client";

import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { HybridSkeleton } from "@/components/calendar/calendar-skeletons";
import { CalendarError } from "@/components/calendar/calendar-error";
import { CalendarGrid } from "@/components/calendar/calendar-grid";
import { CalendarList } from "@/components/calendar/calendar-list";
import { CalendarSubscribe } from "@/components/calendar/calendar-subscribe";

import { useCalendar } from "@/hooks/use-calendar";
import { useMediaQuery } from "@/hooks/use-media-query";

interface HybridCalendarProps {
  initialDate?: Date;
  maxHeight?: number;
  showMonthNav?: boolean;
}

export default function HybridCalendar({
  initialDate,
  showMonthNav = true,
}: HybridCalendarProps) {
  const [currentDate, setCurrentDate] = useState(initialDate ?? new Date());
  const { events, loading, error, refetch } = useCalendar(currentDate);

  const isDesktop = useMediaQuery("(min-width: 1024px)");

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
            className='lg:size-10.5'
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
            className='lg:size-10.5'
            onClick={() => navigateMonth(1)}
          >
            <ChevronRightIcon className='size-4.5 lg:size-5' aria-hidden />
            <span className='sr-only'>Next month</span>
          </Button>
        </CardHeader>
      )}

      <CardContent className='px-4 pt-1 lg:m-0 lg:p-0'>
        {loading ? (
          <HybridSkeleton />
        ) : error ? (
          <CalendarError refetch={refetch} maxHeight={600} />
        ) : isDesktop ? (
          <CalendarGrid
            currentDate={currentDate}
            onDateChange={setCurrentDate}
            events={events}
          />
        ) : (
          <div className='overflow-y-auto border-b pr-2' role='list'>
            <CalendarList
              events={events}
              currentDate={currentDate}
              onDateChange={setCurrentDate}
            />
          </div>
        )}
      </CardContent>
      <CardFooter className='flex flex-row items-start justify-end lg:mt-0 lg:pt-0'>
        <CalendarSubscribe />
      </CardFooter>
    </Card>
  );
}
