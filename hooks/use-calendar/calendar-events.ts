import { useState, useEffect, useRef, useCallback } from "react";

import type {
  CalendarEvent,
  UseCalendarEventsResult,
  EventsCache,
  CalendarEventResponse,
} from "@/types/calendar";

type FetchResult = { ok: true } | { ok: false; error: string };

export function useCalendarEvents(currentDate: Date): UseCalendarEventsResult {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const cacheRef = useRef<EventsCache>({});

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const key = `${year}-${month}`;

  const fetchEventsForMonth = useCallback(
    async (fetchMonth: number, fetchYear: number): Promise<FetchResult> => {
      const cacheKey = `${fetchYear}-${fetchMonth}`;

      if (cacheRef.current[cacheKey]) {
        return { ok: true };
      }

      let response: Response;

      try {
        response = await fetch(
          `/api/calendar?month=${fetchMonth}&year=${fetchYear}`
        );
      } catch (err) {
        console.error("Network error fetching calendar events:", err);
        return {
          ok: false,
          error:
            err instanceof Error
              ? err.message
              : "Network error fetching events",
        };
      }

      let data: { events: CalendarEventResponse[]; error?: string };

      try {
        data = await response.json();
      } catch (err) {
        console.error("Error parsing calendar events response:", err);
        return {
          ok: false,
          error: "Failed to parse events response",
        };
      }

      if (!response.ok) {
        const message = data.error || "Failed to fetch events";
        console.error("Failed to fetch events:", message);
        return { ok: false, error: message };
      }

      const transformedEvents: CalendarEvent[] = data.events.map((event) => ({
        ...event,
        start: new Date(event.start),
        end: new Date(event.end),
      }));

      cacheRef.current[cacheKey] = transformedEvents;

      return { ok: true };
    },
    []
  );

  const fetchEvents = useCallback(async () => {
    setLoading(true);
    setError(null);

    const cacheKey = key;

    if (cacheRef.current[cacheKey]) {
      setEvents(cacheRef.current[cacheKey]);
      setLoading(false);
    } else {
      const result = await fetchEventsForMonth(month, year);

      if (!result.ok) {
        setError(result.error);
      }

      setEvents(cacheRef.current[cacheKey] ?? []);
      setLoading(false);
    }

    const prevMonth = month === 0 ? 11 : month - 1;
    const prevYear = month === 0 ? year - 1 : year;
    const nextMonth = month === 11 ? 0 : month + 1;
    const nextYear = month === 11 ? year + 1 : year;

    void fetchEventsForMonth(prevMonth, prevYear);
    void fetchEventsForMonth(nextMonth, nextYear);
  }, [key, month, year, fetchEventsForMonth]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    void fetchEvents();
  }, [fetchEvents]);

  return {
    events,
    loading,
    error,
    refetch: fetchEvents,
  };
}

// import { useState, useEffect, useRef } from "react";

// import type {
//   CalendarEvent,
//   UseCalendarEventsResult,
//   EventsCache,
//   CalendarEventResponse,
// } from "@/types/calendar";

// export function useCalendarEvents(currentDate: Date): UseCalendarEventsResult {
//   const [events, setEvents] = useState<CalendarEvent[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const cacheRef = useRef<EventsCache>({});
//   const fetchRef = useRef<(() => Promise<void>) | undefined>(undefined);

//   const month = currentDate.getMonth();
//   const year = currentDate.getFullYear();
//   const key = `${year}-${month}`;

//   const fetchEventsForMonth = async (fetchMonth: number, fetchYear: number) => {
//     const cacheKey = `${fetchYear}-${fetchMonth}`;
//     if (cacheRef.current[cacheKey]) return;

//     try {
//       const response = await fetch(
//         `/api/calendar?month=${fetchMonth}&year=${fetchYear}`
//       );
//       const data = await response.json();

//       if (!response.ok) throw new Error(data.error || "Failed to fetch events");

//       const transformedEvents: CalendarEvent[] = data.events.map(
//         (event: CalendarEventResponse) => ({
//           ...event,
//           start: new Date(event.start),
//           end: new Date(event.end),
//         })
//       );

//       cacheRef.current[cacheKey] = transformedEvents;
//     } catch (err) {
//       console.error("Error prefetching calendar events:", err);
//     }
//   };

//   fetchRef.current = async () => {
//     setLoading(true);
//     setError(null);

//     if (cacheRef.current[key]) {
//       setEvents(cacheRef.current[key]);
//       setLoading(false);
//     } else {
//       try {
//         await fetchEventsForMonth(month, year);
//         setEvents(cacheRef.current[key] || []);
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "An error occurred");
//       } finally {
//         setLoading(false);
//       }
//     }

//     const prevMonth = month === 0 ? 11 : month - 1;
//     const prevYear = month === 0 ? year - 1 : year;
//     const nextMonth = month === 11 ? 0 : month + 1;
//     const nextYear = month === 11 ? year + 1 : year;

//     fetchEventsForMonth(prevMonth, prevYear);
//     fetchEventsForMonth(nextMonth, nextYear);
//   };

//   useEffect(() => {
//     fetchRef.current?.();
//   }, [key]);

//   return {
//     events,
//     loading,
//     error,
//     refetch: () => fetchRef.current?.(),
//   };
// }
