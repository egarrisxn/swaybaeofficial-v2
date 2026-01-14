import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  const SITE_TITLE = "Sway Bae";
  const SITE_DESC = "The official page for Sway Bae & The Bae Squad!";

  return {
    name: SITE_TITLE,
    short_name: SITE_TITLE,
    description: SITE_DESC,
    lang: "en",
    start_url: "/",
    scope: "/",
    display: "standalone",
    theme_color: "#000000",
    background_color: "#000000",
    icons: [
      {
        src: "/manifest/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/manifest/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/manifest/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/manifest/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
