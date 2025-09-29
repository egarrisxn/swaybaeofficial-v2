import {
  BlueskyIcon,
  DiscordIcon,
  InstagramIcon,
  SpotifyIcon,
  TikTokIcon,
  TwitchIcon,
  TwitterIcon,
  YoutubeIcon,
} from "@/components/icons";

import type { Links, Socials } from "@/types";

// Calendar
export const calendarDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Footer
export const quickLinks: Links[] = [
  { href: "/about", label: "About" },
  { href: "/calendar", label: "Calendar" },
  { href: "/community", label: "Community" },
  { href: "https://shop.swaybae.net/", label: "Merch", external: true },
];
export const moreLinks: Links[] = [
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQs" },
  // { href: "/media", label: "Media Kit" },
  {
    href: "http://beacons.ai/sway_bae/mediakit",
    label: "Media Kit",
    external: true,
  },
];
export const sharedLinks: Links[] = [
  { href: "/accessibility", label: "Accessibility" },
  { href: "/cookies", label: "Cookies" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];

// Navbar
export const navLinks: Links[] = [
  { href: "/", label: "Home" },
  { href: "/calendar", label: "Calendar" },
  { href: "/subathon", label: "Subathon" },
  { href: "https://shop.swaybae.net/", label: "Merch", external: true },
  // { href: "/blog", label: "Blog" },
  // { href: "/contact", label: "Contact" },
  // { href: "/about", label: "About" },
  // { href: "/community", label: "Community" },
];

// Social
export const socialData: Socials[] = [
  {
    id: "twitch",
    title: "Twitch",
    username: "sway_bae",
    href: "https://www.twitch.tv/sway_bae",
    Icon: TwitchIcon,
  },
  {
    id: "youtube",
    title: "YouTube",
    username: "swaybae_tv",
    href: "https://www.youtube.com/swaybae_tv",
    Icon: YoutubeIcon,
  },
  {
    id: "instagram",
    title: "Instagram",
    username: "sway_baetv",
    href: "https://www.instagram.com/sway_baetv",
    Icon: InstagramIcon,
  },

  {
    id: "tiktok",
    title: "TikTok",
    username: "sway_baetv",
    href: "https://www.tiktok.com/@sway_baetv",
    Icon: TikTokIcon,
  },
  {
    id: "twitter",
    title: "X",
    username: "sway_baetv",
    href: "https://x.com/sway_baetv",
    Icon: TwitterIcon,
  },
  {
    id: "spotify",
    title: "Spotify",
    username: "swaybae",
    href: "https://open.spotify.com/user/31ozjeaf4ddidr2rgqunryvetrmq",
    Icon: SpotifyIcon,
  },
  {
    id: "bluesky",
    title: "Bluesky",
    username: "swaybae",
    href: "https://bsky.app/profile/swaybae.bsky.social",
    Icon: BlueskyIcon,
  },
  {
    id: "discord",
    title: "Discord",
    username: "swaybae",
    href: "https://discord.com/invite/K73uN9k",
    Icon: DiscordIcon,
  },
];
