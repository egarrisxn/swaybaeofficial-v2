// import type { PortableTextBlock } from "next-sanity";

// export type DocumentType = "home" | "blog" | "post" | "tag";

// export type Heading = {
//   id: string;
//   text: string;
//   level: "h1" | "h2" | "h3";
//   top: number;
// };

// export interface Post {
//   [key: string]: unknown;
//   _id: string;
//   title: string;
//   postSlug: string;
//   coverImage?: {
//     alt?: string;
//     image?: string;
//   };

//   content: PortableTextBlock[];
//   headings: Heading[];
//   tags: Tag[];
//   publishedAt: string;
//   featured: boolean;
//   excerpt?: string;
// }

// export interface PortableTextSpan {
//   _type: "span";
//   text: string;
//   marks: string[];
// }

// export type SanityBlock = {
//   _key: string;
//   style: string;
//   children: { text: string }[];
// };

// export interface SanityImage {
//   _type: "image";
//   asset: {
//     _ref: string;
//     _type: "reference";
//   };
//   alt?: string;
// }

// export interface SearchResult {
//   _id: string;
//   title: string;
//   slug: { current: string };
// }

// export interface Tag {
//   _id: string;
//   title: string;
//   color?: string;
//   tagSlug: string;
// }

// export interface TagWithPosts extends Tag {
//   posts: Post[];
// }
