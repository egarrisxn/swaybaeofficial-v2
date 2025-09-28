const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const SITE = {
  name: "Sway Bae",
  description: "The official page for Sway Bae & The Bae Squad!",
  url: SITE_URL,
  ogImage: `${SITE_URL}/opengraph-image.png`,
  social: "@sway_baeTV",
};
