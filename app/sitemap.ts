import type { MetadataRoute } from "next";
// import { sitemapData } from "@/lib/sanity/sitemap";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // If you re-enable dynamic routes from Sanity later:
  // const { posts, tags } = await sitemapData();

  const siteUrl = "https://swaybae.net";

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: siteUrl, changeFrequency: "weekly", priority: 1.0 },
    { url: `${siteUrl}/about`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/accessibility`, priority: 0.1 },
    { url: `${siteUrl}/blog`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteUrl}/calendar`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteUrl}/community`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${siteUrl}/contact`, changeFrequency: "yearly", priority: 0.6 },
    { url: `${siteUrl}/cookies`, priority: 0.1 },
    { url: `${siteUrl}/faq`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${siteUrl}/media`, priority: 0.1 },
    { url: `${siteUrl}/portfolio`, priority: 0.1 },
    { url: `${siteUrl}/privacy`, priority: 0.1 },
    { url: `${siteUrl}/subathon/2024`, priority: 0.1 },
    { url: `${siteUrl}/subathon/2025`, priority: 0.1 },
    { url: `${siteUrl}/terms`, priority: 0.1 },
  ];

  // const postRoutes = posts.map((post: { slug: string; _updatedAt: string }) => ({
  //   url: `${siteUrl}/blog/post/${post.slug}`,
  //   lastModified: post._updatedAt,
  // }));

  // const tagRoutes = tags.map((tag: { slug: string; _updatedAt: string }) => ({
  //   url: `${siteUrl}/blog/tag/${tag.slug}`,
  //   lastModified: tag._updatedAt,
  // }));

  // return [...staticRoutes, ...postRoutes, ...tagRoutes];

  return staticRoutes;
}
