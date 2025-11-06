import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/config";
// import { sitemapData } from "@/lib/sanity/sitemap";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const { posts, tags } = await sitemapData();

  const staticRoutes = [
    {
      url: SITE_URL,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/accessibility`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/calendar`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/community`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/cookies`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/faq`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/media`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/portfolio`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/subathon`,
      lastModified: new Date(),
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: new Date(),
    },
  ];

  // const postRoutes = posts.map((post: { slug: any; _updatedAt: any }) => ({
  //   url: `${SITE_URL}/blog/post/${post.slug}`,
  //   lastModified: post._updatedAt,
  // }));

  // const tagRoutes = tags.map((tag: { slug: any; _updatedAt: any }) => ({
  //   url: `${SITE_URL}/blog/tag/${tag.slug}`,
  //   lastModified: tag._updatedAt,
  // }));

  // return [...staticRoutes, ...postRoutes, ...tagRoutes];

  return [...staticRoutes];
}
