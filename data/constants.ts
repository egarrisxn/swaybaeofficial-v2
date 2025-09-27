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
import type { Brands, Links, Socials } from "@/types";

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

// Footer
export const footerLinksOne: Links[] = [
  { href: "/about", label: "About" },
  { href: "/calendar", label: "Calendar" },
  { href: "/community", label: "Community" },
  { href: "https://shop.swaybae.net/", label: "Merch", external: true },
];
export const footerLinksTwo: Links[] = [
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
export const sharedFooterLinks: Links[] = [
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

export const brandsData: Brands[] = [
  {
    id: 1,
    name: "YouTube",
    src: "/brands/youtube.png",
    href: "https://youtube.com",
  },
  { id: 2, name: "GCX", src: "/brands/gcx.png", href: "https://gcxevent.com" },
  {
    id: 3,
    name: "Hello Fresh",
    src: "/brands/hellofresh.png",
    href: "https://hellofresh.com",
  },
  {
    id: 4,
    name: "Twitch",
    src: "/brands/twitch.png",
    href: "https://twitch.tv",
  },
  {
    id: 5,
    name: "1000 Dreams Fund",
    src: "/brands/1000dreams.png",
    href: "https://1000dreamsfund.org",
  },
  {
    id: 6,
    name: "Super Girl Gamer Pro",
    src: "/brands/supergirl.png",
    href: "https://supergirlgamerpro.com",
  },
  {
    id: 7,
    name: "Blizzard",
    src: "/brands/blizzard.png",
    href: "https://blizzard.com",
  },
  {
    id: 8,
    name: "Dreamhack",
    src: "/brands/dreamhack.png",
    href: "https://dreamhack.com",
  },
];
