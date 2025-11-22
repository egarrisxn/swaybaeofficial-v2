import type { MetadataRoute } from "next";
import { SITE_TITLE, SITE_DESC } from "@/lib/config";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_TITLE,
    description: SITE_DESC,
    short_name: SITE_TITLE,
    theme_color: "#000000",
    background_color: "#000000",
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
