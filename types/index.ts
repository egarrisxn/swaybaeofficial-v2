import type { ComponentType, SVGProps, JSX, ReactNode } from "react";
import type { PortableTextBlock } from "next-sanity";

// Blog
export interface Blog {
  id: string;
  title: string;
  href: string;
}

// Brands
export interface Brands {
  id: number;
  name: string;
  src: string;
  href: string;
}

export interface BrandWithImg extends Brands {
  img: (props: { className?: string }) => JSX.Element;
}

// Buttons
export interface ActionButtonState {
  success: boolean | undefined;
  message: string;
}
export interface ScrollButtons {
  targetId: string;
}

// Calendars | Google Calendar
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
export interface UseCalendarEventsResult {
  events: CalendarEvent[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

// Forms
export interface FormState {
  message: string;
  errors?: Record<string, string[] | undefined>;
  success: boolean | undefined;
}
export type FormResult =
  | { success: true; res: unknown }
  | { success: false; err: unknown };

// Icons
export interface Icons extends SVGProps<SVGSVGElement> {
  width?: string | number;
  height?: string | number;
}
export type IconComponent = ComponentType<Icons>;

// Links
export interface Links {
  href: string;
  label: string;
  external?: boolean;
  icon?: JSX.Element;
}
export interface LinkLists {
  title: string;
  links: Links[];
}
export interface Contact extends Links {
  title: string;
  description?: string;
  Icon: IconComponent;
}
export interface ContactLinks {
  title: string;
  links: Contact[];
}

// Lists
export interface Lists {
  title?: string;
  description?: string;
  link?: string;
  linkText?: string;
}
export interface ReusableLists {
  title: string;
  description?: string | ReactNode;
  items?: Lists[];
}

// Merch
export interface Merch {
  id: string;
  title: string;
  src?: string;
}

// Navbar
export interface NavState {
  open?: boolean;
  setOpen: (open: boolean) => void;
}

// Portable Text
export interface PortableTextSpan {
  _type: "span";
  text: string;
  marks: string[];
}

// Sanity
// export type DocumentType = "home" | "blog" | "post" | "tag";
// export type Heading = {
//   id: string;
//   text: string;
//   level: "h1" | "h2" | "h3";
//   top: number;
// };
// export interface Post {
//   [key: string]: unknown;
//   _id: string;
//   title: string;
//   postSlug: string;
//   coverImage?: {
//     alt?: string;
//     image?: string;
//   };
//   content: PortableTextBlock[];
//   headings: Heading[];
//   tags: Tag[];
//   publishedAt: string;
//   featured: boolean;
//   excerpt?: string;
// }
// export type SanityBlock = {
//   _key: string;
//   style: string;
//   children: { text: string }[];
// };
// export interface SanityImage {
//   _type: "image";
//   asset: {
//     _ref: string;
//     _type: "reference";
//   };
//   alt?: string;
// }
// export interface SearchResult {
//   _id: string;
//   title: string;
//   slug: { current: string };
// }
// export interface Tag {
//   _id: string;
//   title: string;
//   color?: string;
//   tagSlug: string;
// }
// export interface TagWithPosts extends Tag {
//   posts: Post[];
// }

// Server Actions
export interface ServerActionResult {
  success: boolean | undefined;
  message: string;
}

// Socials
export interface Socials {
  id: string;
  title: string;
  href: string;
  username?: string;
  className?: string;
  Icon: IconComponent;
}

// Spotify
export interface SpotifyPlayer {
  albumImageUrl: string;
  albumName: string;
  albumId: string;
  artist: string;
  artistId: string;
  songUrl: string;
  title: string;
  isPlaying: boolean;
}
export interface SpotifyArtist {
  id: string;
  name: string;
}

// Stats
export interface Stats {
  value: number;
  suffix: string;
  label: string;
}

// Text Blurb
export interface TextBlurb {
  b?: string;
  h1?: string;
  h2?: string;
  p?: string;
  btn?: string;
  vid?: string;
}

// Videos | YouTube
export type VideoAnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";
export interface VideoAnimationVariants {
  initial: { [key: string]: string | number };
  animate: { [key: string]: string | number };
  exit: { [key: string]: string | number };
}
export interface YouTubeVideo {
  post_id: string;
  title: string;
  url: string;
  published_at: string;
  thumbnail_url: string;
}
export interface YouTubeApiItem {
  id: { videoId: string };
  snippet: {
    title: string;
    publishedAt: string;
    thumbnails: {
      high: { url: string };
    };
  };
}
