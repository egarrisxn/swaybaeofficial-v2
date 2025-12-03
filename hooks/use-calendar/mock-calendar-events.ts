import { useState, useEffect } from "react";
import type { CalendarEvent, UseCalendarEventsResult } from "@/types/calendar";
import { generateMockEvents } from "@/lib/mock/data"; // mockCalendarEvents

export function useMockCalendarEvents(
  currentDate: Date
): UseCalendarEventsResult {
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();

  useEffect(() => {
    const loadEvents = async () => {
      setLoading(true);

      // DEV: use mock data
      if (process.env.NODE_ENV === "development") {
        try {
          // Pick ONE of these
          setEvents(generateMockEvents(month, year));
          // setEvents(mockCalendarEvents);
        } catch (err) {
          setError(
            err instanceof Error
              ? err.message
              : "Failed to generate mock events"
          );
        }

        // end dev branch
        setLoading(false);
        return;
      }

      // PROD: fetch from API
      try {
        const response = await fetch(
          `/api/calendar?month=${month}&year=${year}`
        );
        const data = await response.json();

        setEvents(
          data.events.map((e: any) => ({
            ...e,
            start: new Date(e.start),
            end: new Date(e.end),
          }))
        );
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      }

      setLoading(false);
    };

    void loadEvents();
  }, [month, year]);

  return { events, loading, error, refetch: () => {} };
}

// import { useState, useEffect } from "react";
// import type { CalendarEvent, UseCalendarEventsResult } from "@/types/calendar";
// import { generateMockEvents } from "@/lib/mock/data"; // mockCalendarEvents

// export function useMockCalendarEvents(
//   currentDate: Date
// ): UseCalendarEventsResult {
//   const [events, setEvents] = useState<CalendarEvent[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   const month = currentDate.getMonth();
//   const year = currentDate.getFullYear();

//   useEffect(() => {
//     const loadEvents = async () => {
//       setLoading(true);
//       try {
//         if (process.env.NODE_ENV === "development") {
//           //! PICK ONE: Random events or fixed events
//           setEvents(generateMockEvents(month, year));
//           // setEvents(mockCalendarEvents);
//         } else {
//           const response = await fetch(
//             `/api/calendar?month=${month}&year=${year}`
//           );
//           const data = await response.json();

//           setEvents(
//             data.events.map((e: any) => ({
//               ...e,
//               start: new Date(e.start),
//               end: new Date(e.end),
//             }))
//           );
//         }
//       } catch (err) {
//         setError(err instanceof Error ? err.message : "An error occurred");
//       } finally {
//         setLoading(false);
//       }
//     };

//     loadEvents();
//   }, [month, year]);

//   return { events, loading, error, refetch: () => {} };
// }
