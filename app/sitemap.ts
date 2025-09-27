import type { MetadataRoute } from "next";
// import { sitemapData } from "@/lib/sanity/sitemap";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const { posts, tags } = await sitemapData();

  const BASE_URL = "https://swaybae.net";

  const staticRoutes = [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/auth`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/accessibility`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/calendar`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/community`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/cookies`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/media`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/subathon`,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/terms`,
      lastModified: new Date(),
    },
  ];

  // const postRoutes = posts.map((post: { slug: any; _updatedAt: any }) => ({
  //   url: `${BASE_URL}/blog/post/${post.slug}`,
  //   lastModified: post._updatedAt,
  // }));

  // const tagRoutes = tags.map((tag: { slug: any; _updatedAt: any }) => ({
  //   url: `${BASE_URL}/blog/tag/${tag.slug}`,
  //   lastModified: tag._updatedAt,
  // }));

  // return [...staticRoutes, ...postRoutes, ...tagRoutes];

  return [...staticRoutes];
}
