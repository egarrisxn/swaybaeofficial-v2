"use client";

import { Button } from "@/components/ui/button";
import { RefreshCwIcon } from "lucide-react";

interface CalendarErrorProps {
  errorMessage?: string;
  refetch: () => void;
  maxHeight?: number;
}

export function CalendarError({
  errorMessage,
  refetch,
  maxHeight,
}: CalendarErrorProps) {
  return (
    <div
      className='grid place-items-center text-center'
      style={{ minHeight: maxHeight }}
      role='alert'
    >
      <div>
        <p className='mb-2 text-lg font-medium text-destructive'>
          Error loading events
        </p>
        <p className='mb-4 text-sm text-muted-foreground'>{errorMessage}</p>
        <Button onClick={refetch}>
          <RefreshCwIcon className='mr-2 size-4' aria-hidden />
          Try Again
        </Button>
      </div>
    </div>
  );
}
