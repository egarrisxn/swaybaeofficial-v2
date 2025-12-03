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

import type { HyperLink, Socials } from "@/types";

// Calendar
export const calendarDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

// Desktop Navbar
export const navLinks: HyperLink[] = [
  // { href: "/about", label: "About" },
  { href: "/calendar", label: "Calendar" },
  // { href: "/community", label: "Community" },
  // {
  //   href: "/blog",
  //   label: "Blog",
  // },
  { href: "https://shop.swaybae.net/", label: "Shop", external: true },
  { href: "/contact", label: "Contact" },
];

// Navbar
export const mobileNavLinks: HyperLink[] = [
  // { href: "/about", label: "About" },
  { href: "/calendar", label: "Calendar" },
  // { href: "/community", label: "Community" },
  // {
  //   href: "/blog",
  //   label: "Blog",
  // },
  { href: "https://shop.swaybae.net/", label: "Shop", external: true },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  { href: "/subathon/2024", label: "Subathon '24" },
  { href: "/subathon/2025", label: "Subathon '25" },
];

// Footer
export const quickLinks: HyperLink[] = [
  { href: "/about", label: "About" },
  { href: "/calendar", label: "Calendar" },
  { href: "/community", label: "Community" },
  { href: "https://shop.swaybae.net/", label: "Shop", external: true },
];
export const moreLinks: HyperLink[] = [
  // { href: "/blog", label: "Blog"},
  { href: "https://swaybae-v1.vercel.app/blog", label: "Blog", external: true },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
  // { href: "/media", label: "Media Kit" },
  {
    href: "https://beacons.ai/sway_bae/mediakit",
    label: "Media Kit",
    external: true,
  },
];
export const sharedLinks: HyperLink[] = [
  { href: "/accessibility", label: "Accessibility" },
  { href: "/cookies", label: "Cookies" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
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
