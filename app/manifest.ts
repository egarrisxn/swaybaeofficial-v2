import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sway Bae Official",
    short_name: "SWAY BAE",
    description: "The official Page for Sway Bae & The Bae Squad!",
    theme_color: "#ffffff",
    background_color: "#ffffff",
    id: "/",
    start_url: "/",
    orientation: "any",
    display: "standalone",
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
