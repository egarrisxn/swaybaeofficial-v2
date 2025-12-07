import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Poppins, Fira_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ViewTransitions } from "next-view-transitions";
import { ThemeProvider } from "@/app/context/theme";
import { TooltipProvider } from "@/app/context/tooltip";
import { Toaster } from "@/components/ui/sonner";
import { SITE_URL, SITE_TITLE, SITE_DESC, SITE_HANDLE } from "@/lib/config";
import "./globals.css";

// import { CookieBanner } from "@/components/cookie-banner";
// import Script from "next/script";

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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_TITLE} | Creator of Chaos`,
    template: `${SITE_TITLE} | %s`,
  },
  description: SITE_DESC,
  referrer: "origin-when-cross-origin",
  creator: "egxo.dev.",
  keywords: [
    "swaybae",
    "sway_bae",
    "swaybaetv",
    "sway",
    "bae",
    "swaybaenet",
    "swaybaecom",
    "thebaesquad",
    "the-bae-squad",
    "baesquad",
    "bae_squad",
    "swaybae-twitch",
    "swaybae-twitter",
    "swaybae-youtube",
    "swaybae-discord",
    "swaybae-instagram",
    "swaybae-tiktok",
    "swaybae-merch",
    "swaybae-store",
    "swaybae-shop",
    "swaybae-gaming",
    "hearthstone",
    "blizzard",
    "streamer",
    "stream",
    "twitch",
    "twitch-streamer",
    "twitchtv",
    "blog",
    "swaybae-blog",
  ],

  openGraph: {
    locale: "en_US",
    type: "website",
    title: SITE_TITLE,
    description: SITE_DESC,
    url: SITE_URL,
    siteName: SITE_TITLE,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESC,
    creator: SITE_HANDLE,
    site: SITE_HANDLE,
  },
  // verification: {},
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f5fc" },
    { media: "(prefers-color-scheme: dark)", color: "#1b1b1a" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransitions>
      <html lang='en' suppressHydrationWarning>
        <head>
          <meta name='apple-mobile-web-app-title' content='Sway Bae' />
          {/* <Script
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
          /> */}
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
            {/* <CookieBanner /> */}
            <Toaster richColors position='bottom-center' />
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </ViewTransitions>
  );
}
