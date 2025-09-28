export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  start: Date;
  end: Date;
  location?: string;
  type: "stream" | "family" | "content" | "other";
  url?: string;
}

export interface CalendarEvents {
  currentDate: Date;
  events: CalendarEvent[];
  onDateChange?: (date: Date) => void;
}

export type EventsCache = Record<string, CalendarEvent[]>;

export type CalendarEventResponse = Omit<CalendarEvent, "start" | "end"> & {
  start: string;
  end: string;
};

export interface UseCalendarEventsResult {
  events: CalendarEvent[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export interface GoogleCalendarEvent {
  id: string;
  summary: string;
  description?: string;
  start: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  end: {
    dateTime?: string;
    date?: string;
    timeZone?: string;
  };
  location?: string;
  status: string;
  htmlLink: string;
  colorId?: string;
}
