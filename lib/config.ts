function getSiteUrl() {
  const rawUrl = process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL;
  const devUrl = "http://localhost:3000";

  return (rawUrl || devUrl).replace(/\/$/, ""); // Strip trailing slash
}

export const SITE_URL = getSiteUrl();

export const SITE_TITLE = "Sway Bae";
export const SITE_DESC = "The official page for Sway Bae & The Bae Squad!";
export const SITE_HANDLE = "@sway_baeTV";

// For CORS / APIs / etc.
export const SITE_PRODUCTION_URL = "https://swaybae.net";
