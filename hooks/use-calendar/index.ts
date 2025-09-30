import { useMockCalendarEvents } from "./mock-calendar-events";
import { useCalendarEvents } from "./calendar-events";

const useCalendarImplementation =
  process.env.NODE_ENV === "development" &&
  process.env.NEXT_PUBLIC_USE_MOCK_EVENTS === "true"
    ? useMockCalendarEvents
    : useCalendarEvents;

export function useCalendar(currentDate: Date) {
  return useCalendarImplementation(currentDate);
}
