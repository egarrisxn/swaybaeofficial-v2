import type { MetadataRoute } from "next";
// import { sitemapData } from "@/lib/sanity/sitemap";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // If you re-enable dynamic routes from Sanity later:
  // const { posts, tags } = await sitemapData();

  const SITE_URL = "https://swaybae.net";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/auth`, priority: 0.1 },
    { url: `${SITE_URL}/auth/error`, priority: 0.1 },
    { url: `${SITE_URL}/accessibility`, priority: 0.1 },
    { url: `${SITE_URL}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${SITE_URL}/calendar`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/community`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${SITE_URL}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${SITE_URL}/cookies`, priority: 0.1 },
    { url: `${SITE_URL}/faq`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/media`, priority: 0.1 },
    { url: `${SITE_URL}/portfolio`, priority: 0.1 },
    { url: `${SITE_URL}/privacy`, priority: 0.1 },
    { url: `${SITE_URL}/subathon/2024`, priority: 0.1 },
    { url: `${SITE_URL}/subathon/2025`, priority: 0.1 },
    { url: `${SITE_URL}/terms`, priority: 0.1 },
  ];

  // const postRoutes = posts.map((post: { slug: string; _updatedAt: string }) => ({
  //   url: `${SITE_URL}/blog/post/${post.slug}`,
  //   lastModified: post._updatedAt,
  // }));

  // const tagRoutes = tags.map((tag: { slug: string; _updatedAt: string }) => ({
  //   url: `${SITE_URL}/blog/tag/${tag.slug}`,
  //   lastModified: tag._updatedAt,
  // }));

  // return [...staticRoutes, ...postRoutes, ...tagRoutes];

  return staticRoutes;
}
