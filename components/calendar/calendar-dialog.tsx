"use client";

import { Root } from "@radix-ui/react-visually-hidden";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ClockIcon, ExternalLinkIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { formatEventTime, getEventLabelColor } from "@/lib/calendar";

import type { CalendarEvent } from "@/types/calendar";

interface CalendarDialogProps {
  event?: CalendarEvent;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function CalendarDialog({
  event,
  open,
  onOpenChange,
}: CalendarDialogProps) {
  if (!event) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className='flex flex-col justify-between gap-8 rounded-2xl border border-border/50 p-3 shadow-xl sm:max-w-105'>
        <Badge
          className={cn(
            "w-fit rounded-full px-3 py-1 text-xs font-medium tracking-wide shadow-sm",
            getEventLabelColor(event.type)
          )}
        >
          {event.type.toUpperCase()}
        </Badge>

        <DialogHeader>
          <DialogTitle className='text-3xl leading-tight font-semibold tracking-tight text-muted-foreground'>
            {event.title}
          </DialogTitle>
        </DialogHeader>

        <DialogDescription aria-describedby='event-dialog-description'>
          <Root>Event for today.</Root>
        </DialogDescription>

        <div className='flex flex-row items-center justify-between gap-4 border-t pt-2'>
          <div className='flex items-center gap-2 text-sm text-muted-foreground'>
            <ClockIcon className='size-4 shrink-0 text-muted-foreground/80' />
            <span>{formatEventTime(event)}</span>
          </div>

          {event.url && (
            <a
              href={event.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-link transition-all hover:bg-link/10 hover:text-link/90'
            >
              <ExternalLinkIcon className='size-4' />
            </a>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
