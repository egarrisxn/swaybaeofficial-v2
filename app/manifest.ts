import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sway Bae",
    short_name: "Sway Bae",
    description: "The official page for Sway Bae & The Bae Squad!",
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
