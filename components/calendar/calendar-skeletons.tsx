"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { calendarDays } from "@/lib/constants";

interface LandingSkeletonProps {
  maxHeight: number;
}

export function HybridSkeleton() {
  return (
    <>
      {/* Desktop Skeleton */}
      <div className='hidden p-6 lg:block'>
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
      {/* Mobile Skeleton */}
      <div className='lg:hidden'>
        <div className='space-y-4 overflow-y-auto pr-2' aria-busy='true'>
          {Array.from({ length: 25 }).map((_, i) => (
            <div key={i} className='space-y-2 pt-1'>
              <Skeleton className='h-6 w-48' />
              <Skeleton className='h-24 w-full rounded-xl' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export function LandingSkeleton({ maxHeight }: LandingSkeletonProps) {
  return (
    <div
      className='space-y-4 overflow-y-auto pr-2 lg:hidden'
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
  );
}
