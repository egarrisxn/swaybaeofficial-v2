import type { CalendarEvent } from "@/types/calendar";
import type { YouTubeVideo } from "@/types/youtube";
import type { Spotify } from "@/types/spotify";

// Mock Calendar Titles
const calendarMockTitles = [
  "Family Dinner",
  "Content Recording",
  "Live Stream",
  "Weekend Trip",
  "Workout",
  "Birthday",
  "Study Session",
  "Catch-up Call",
  "Conference",
  "Other Task",
];

// Mock Calendar Types
const calendarMockTypes: CalendarEvent["type"][] = [
  "stream",
  "family",
  "content",
  "other",
];

// Random Mock Event Generator
export function generateMockEvents(
  month: number,
  year: number
): CalendarEvent[] {
  const events: CalendarEvent[] = [];
  const numEvents = Math.floor(Math.random() * 15) + 10; // 10–25 events

  for (let i = 0; i < numEvents; i++) {
    const day = Math.floor(Math.random() * 28) + 1; // safe days
    const startHour = Math.floor(Math.random() * 8) + 8; // 8am–4pm
    const start = new Date(year, month, day, startHour, 0);
    const end = new Date(start);
    end.setHours(startHour + 1);

    events.push({
      id: `mock-${year}-${month}-${i}`,
      title:
        calendarMockTitles[
          Math.floor(Math.random() * calendarMockTitles.length)
        ],
      type: calendarMockTypes[
        Math.floor(Math.random() * calendarMockTypes.length)
      ],
      start,
      end,
      url: Math.random() > 0.7 ? "https://calendar.google.com" : undefined,
    });
  }

  return events;
}

// Mock Calendar Events
export const mockCalendarEvents: CalendarEvent[] = [
  {
    id: "1",
    title: "Weekly Family Dinner",
    type: "family",
    start: new Date(2025, 8, 18, 19, 0),
    end: new Date(2025, 8, 18, 21, 0),
  },
  {
    id: "2",
    title: "Content Recording Session",
    type: "content",
    start: new Date(2025, 8, 20, 10, 0),
    end: new Date(2025, 8, 20, 12, 0),
  },
  {
    id: "3",
    title: "Live Stream: Q&A",
    type: "stream",
    start: new Date(2025, 8, 21, 14, 0),
    end: new Date(2025, 8, 21, 15, 30),
    url: "https://calendar.google.com",
  },
  {
    id: "4",
    title: "Friend's Birthday Party",
    type: "other",
    start: new Date(2025, 8, 24, 18, 0),
    end: new Date(2025, 8, 24, 23, 0),
  },
  {
    id: "5",
    title: "Weekend Trip",
    type: "other",
    start: new Date(2025, 8, 27, 8, 0),
    end: new Date(2025, 8, 27, 20, 0),
  },
];

// Mock YouTube Feed
export const mockYouTubeFeed: YouTubeVideo[] = [
  {
    post_id: "Kb94KnS1pb8",
    title: "clean with an APM pirates in #hearthstonebattlegrounds",
    url: "https://www.youtube.com/watch?v=Kb94KnS1pb8",
    published_at: "2025-09-26T00:00:00Z",
    thumbnail_url: "/mock/1.webp",
  },
  {
    post_id: "7hvl-nN5JOg",
    title: "Deathrattle Demons Dominate Again! #hearthstonebattlegrounds",
    url: "https://www.youtube.com/watch?v=7hvl-nN5JOg",
    published_at: "2025-09-24T00:00:00Z",
    thumbnail_url: "/mock/2.webp",
  },
  {
    post_id: "0P08qRNYF2M",
    title:
      "Eudora Deathrattle build has INSANE scaling! #hearthstonebattlegrounds",
    url: "https://www.youtube.com/watch?v=0P08qRNYF2M",
    published_at: "2025-09-19T00:00:00Z",
    thumbnail_url: "/mock/3.webp",
  },
];

// Mock Spotify Now Playing
export const mockSpotifyNowPlaying: Spotify = {
  albumImageUrl:
    "https://i.scdn.co/image/ab67616d0000b2735689457006627002c29800ca",
  albumName: "Blood, Hair, And Eyeballs",
  albumId: "3BQK669H6FrqGVd7YtxNIs",
  artist: "Alkaline Trio",
  artistId: "1aEYCT7t18aM3VvM6y8oVR",
  songUrl: "https://open.spotify.com/track/1QzdUCuGse7e2o7oxBHJR6",
  title: "Bad Time",
  isPlaying: true,
};
