import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
// import { sitemapData } from "@/lib/sanity/sitemap";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // If you re-enable dynamic routes from Sanity later:
  // const { posts, tags } = await sitemapData();

  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
    },
    {
      url: `${SITE_URL}/accessibility`,
      lastModified: now,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
    },
    {
      url: `${SITE_URL}/calendar`,
      lastModified: now,
    },
    {
      url: `${SITE_URL}/community`,
      lastModified: now,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
    },
    {
      url: `${SITE_URL}/cookies`,
      lastModified: now,
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: now,
    },
    {
      url: `${SITE_URL}/media`,
      lastModified: now,
    },
    {
      url: `${SITE_URL}/portfolio`,
      lastModified: now,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
    },
    {
      url: `${SITE_URL}/subathon`,
      lastModified: now,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: now,
    },
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
