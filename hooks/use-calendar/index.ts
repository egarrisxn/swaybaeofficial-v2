import { useMockCalendarEvents } from "./mock-calendar-events";
import { useCalendarEvents } from "./calendar-events";

export function useCalendar(currentDate: Date) {
  const mock = useMockCalendarEvents(currentDate);
  const real = useCalendarEvents(currentDate);

  if (process.env.NODE_ENV === "development") {
    return mock;
  }
  return real;
}
