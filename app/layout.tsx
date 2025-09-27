import "./globals.css";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import Script from "next/script";
// import { Analytics } from "@vercel/analytics/react";
import { Poppins, Fira_Sans } from "next/font/google";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/app/providers/theme";
import { TooltipProvider } from "@/app/providers/tooltip";
import { CookieBanner } from "@/components/cookie-banner";
import { Toaster } from "@/components/ui/sonner";

import { SITE } from "@/data/config";

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

const firaSans = Fira_Sans({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-fira-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Creator of Chaos`,
    template: `${SITE.name} | %s`,
  },
  description: SITE.description,
  referrer: "origin-when-cross-origin",
  creator: "https://egxo.dev.",
  keywords: [
    "swaybae, sway_bae, swaybaetv, sway, bae, swaybaenet, swaybaecom, thebaesquad, the-bae-squad, baesquad, bae_squad, swaybae-twitch, swaybae-twitter, swaybae-youtube, swaybae-discord, swaybae-instagram, swaybae-tiktok, swaybae-merch, swaybae-store, swaybae-shop, swaybae-gaming, hearthstone, blizzard, streamer, stream, twitch, twitch-streamer, twitchtv, blog, swaybae-blog",
  ],
  openGraph: {
    locale: "en_US",
    type: "website",
    title: SITE.name,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
    creator: SITE.social,
    site: SITE.social,
  },
  verification: {},
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <ViewTransitions>
      <html lang='en' suppressHydrationWarning>
        <head>
          <meta name='apple-mobile-web-app-title' content='Sway Bae Official' />
          <Script
            id='gtag-init'
            strategy='afterInteractive'
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'analytics_storage': 'denied'
              });
              gtag('js', new Date());
              gtag('config', 'G-823SZT7XNY', { anonymize_ip: true });
            `,
            }}
          />
        </head>
        <body
          className={`${poppins.variable} ${firaSans.variable} font-sans antialiased`}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
            <CookieBanner />
            <Toaster richColors position='bottom-center' />
          </ThemeProvider>
          {/* <Analytics /> */}
        </body>
      </html>
    </ViewTransitions>
  );
}
