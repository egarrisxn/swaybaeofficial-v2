import {
  MailsIcon,
  MapPinIcon,
  MessageCircleIcon,
  TvPlayIcon,
} from "@/components/icons";
import type { Blog, Merch, ContactLinks, TextBlurb } from "@/types";

// Hero Section
export const heroText: TextBlurb = {
  h1: "Sway Bae",
  p: "Creator of Chaos.",
};

// About Section
export const aboutText: TextBlurb = {
  b: "Welcome!",
  h2: `I'm Sway!`,
  p: `I am a full-time, family-friendly gaming creator and entertainer with a passion for community building, engagement, and mental health advocacy! I am partnered with Twitch and YouTube and you can find me streaming and releasing videos multiple times per week. Thank you for being here!`,
  btn: "Learn More",
};

// YouTube Section
export const youTubeText: TextBlurb = {
  b: "Check this out",
  h2: `Watch some of my most recent YouTube videos.`,
  p: `Make sure to like and subscribe to the channel for all my new video updates!`,
  btn: "Subscribe!",
  vid: "Latest Videos",
};

// Twitter Section
export const twitterText: TextBlurb = {
  b: "Keeping up with my socials",
  h2: `Follow me on my adventures!`,
  p: `I post my adventures on Instagram, Bluesky, and X! Those are great places to keep up with me when I'm not streaming`,
};
export const tweetGrid: string[] = [
  "1843676470885134641",
  "1842955533697069347",
  "1845928542020030506",
];

// Calendar Section
export const calendarText: TextBlurb = {
  b: "Stay up to date",
  h2: `Check out my calendar to see what's coming up next!`,
  p: `The calendar is the best source of knowing what's coming up for the month ahead. It is always updated with upcoming Twitch streams, YouTube videos, and special events!`,
};

// Merch Section
export const merchText: TextBlurb = {
  b: "Merch store",
  h2: `Check out the most recent line of Bae Squad gear!`,
  p: `There's something for everyone, from t-shirts, to hoodies, to fanny packs! Merch is both stylish AND a great way to show support`,
  btn: "Shop Now",
};
export const merchCards: Merch[] = [
  {
    id: "School of Math Sweatshirt",
    title: "School of Math Sweatshirt",
    src: "/merch/sweatshirt.avif",
  },

  {
    id: "Pog Bottle",
    title: "Pog Bottle",
    src: "/merch/bottle.avif",
  },
  {
    id: "Bae Squad Dad Cap",
    title: "Bae Squad Dad Cap",
    src: "/merch/cap.avif",
  },
  {
    id: "School of Math Notebook",
    title: "School of Math Notebook",
    src: "/merch/notebook.avif",
  },
  {
    id: "Pog Long Sleeve",
    title: "Pog Long Sleeve",
    src: "/merch/ls.avif",
  },
  {
    id: "Not a Phase Crewneck",
    title: "Not a Phase Crewneck",
    src: "/merch/crew.avif",
  },
  {
    id: "Bae Squad Band Hoodie",
    title: "Bae Squad Band Hoodie",
    src: "/merch/hood.avif",
  },
  {
    id: "Blue Squad Band Tee",
    title: "Blue Squad Band Tee",
    src: "/merch/ss.avif",
  },
];

// Blog Section
export const blogText: TextBlurb = {
  h2: "Latest blog posts",
  btn: "Read More",
};
export const blogList: Blog[] = [
  {
    id: "#2",
    title: "The best FREE Ways to Support Your Favorite Content Creators!",
    href: "#",
  },
  {
    id: "#1",
    title: "Sway Starts a BLOG!",
    href: "#",
  },
];

// Contact Section
export const contactText: TextBlurb = {
  b: `Let's connect`,
  h2: `I'd love to hear from you!`,
  p: `Please feel free to reach out below with any inquiries, collaborations, or thoughts!`,
};
export const contactItems: ContactLinks = {
  title: "Contact",
  links: [
    {
      title: "Stream",
      description: "Catch me live on Twitch :",
      href: "https://www.twitch.tv/sway_bae",
      label: "www.twitch.tv/sway_bae",
      external: true,
      Icon: TvPlayIcon,
    },
    {
      title: "Chat",
      description: "Keep up with me over at",
      href: "https://discord.com/invite/K73uN9k",
      label: "Our Discord Server",
      external: true,
      Icon: MessageCircleIcon,
    },
    {
      title: "Email",
      description: "Prefer direct communication?",
      href: "mailto:sway.bae9000@gmail.com",
      label: "sway.bae9000@gmail.com",
      external: true,
      Icon: MailsIcon,
    },
    {
      title: "IRL",
      description: "Cons and Events are always on",
      href: "/calendar",
      label: "The Calendar Page",
      external: false,
      Icon: MapPinIcon,
    },
  ],
};

// Photo Grid
export const photoGrid: string[] = [
  "/grid/1.png",
  "/grid/2.png",
  "/grid/3.png",
  "/grid/4.png",
  "/grid/5.png",
  "/grid/6.png",
  "/grid/7.png",
  "/grid/8.png",
  "/grid/9.png",
];
