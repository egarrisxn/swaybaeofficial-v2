// import "server-only";

// import * as queryStore from "@sanity/react-loader";
// import { client } from "./client";
// import { token } from "./token";
// import {
//   singlePostQuery,
//   allPostsQuery,
//   singleTagQuery,
//   allTagsQuery,
// } from "./queries";

// import type { TagWithPosts, Post, Tag } from "@/types";

// const serverClient = client.withConfig({ token });
// queryStore.setServerClient(serverClient);

// const usingCdn = serverClient.config().useCdn;

// export const loadQuery = async <T>(
//   query: string,
//   params: Record<string, any> = {},
//   options: any = {}
// ): Promise<queryStore.QueryResponseInitial<T>> => {
//   let revalidate: number | false = 0;
//   if (!usingCdn && Array.isArray(options.next?.tags)) {
//     revalidate = false;
//   } else if (usingCdn) {
//     revalidate = 60;
//   }
//   return queryStore.loadQuery<T>(query, params, {
//     ...options,
//     next: {
//       revalidate,
//       ...(options.next || {}),
//     },
//   });
// };

// export async function loadPosts(): Promise<Post[]> {
//   const res = await loadQuery<Post[]>(
//     allPostsQuery,
//     {},
//     { next: { tags: ["post"] } }
//   );
//   return res.data ?? [];
// }

// export async function loadTags(): Promise<Tag[]> {
//   const res = await loadQuery<Tag[]>(
//     allTagsQuery,
//     {},
//     { next: { tags: ["tag"] } }
//   );
//   return res.data ?? [];
// }

// export async function loadPost(slug: string): Promise<Post | null> {
//   const res = await loadQuery<Post>(
//     singlePostQuery,
//     { slug },
//     { next: { tags: [`post:${slug}`] } }
//   );
//   return res.data ?? null;
// }

// export async function loadBlog(
//   params: any
// ): Promise<{ posts: Post[]; tags: Tag[] }> {
//   const posts = await loadPosts();
//   const tags = await loadTags();
//   return { posts, tags };
// }

// export async function loadTag(
//   slug: string
// ): Promise<{ tag: TagWithPosts | null; tags: Tag[] }> {
//   const tagRes = await loadQuery<TagWithPosts>(
//     singleTagQuery,
//     { slug },
//     { next: { tags: [`tag:${slug}`] } }
//   );
//   const tags = await loadTags();
//   return {
//     tag: tagRes.data ?? null,
//     tags,
//   };
// }
