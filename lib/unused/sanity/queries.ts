// import { groq } from "next-sanity";

// const commonPostQuery = groq`
//   _id,
//   _createdAt,
//   title,
//   excerpt,
//   publishedAt,
//   coverImage {
//     'image': asset->url,
//     alt,
//   },
//   'tags': tags[]->{
//     _id,
//     'tagSlug': slug.current,
//     title,
//     color,
//   },
// `;

// const commonTagQuery = groq`
//   _id,
//   _createdAt,
//   title,
//   color,
// `;

// export const allPostsQuery = groq`
//   *[_type == 'post'] | order(_createdAt desc) {
//     ${commonPostQuery}
//     'postSlug': slug.current,
//     featured,
//   }
// `;

// export const singlePostQuery = groq`
//   *[_type == 'post' && slug.current == $slug] {
//     ${commonPostQuery}
//     'content': content[] {
//     ...,
//     markDefs[]{
//       ...,
//       _type == "link" => {
//         ...,
//         internalLink->{_type,slug,title}
//       }
//     }
//   },
//     "headings": content[length(style) == 2 && string::startsWith(style, "h")],
//   }[0]
// `;

// export const allTagsQuery = groq`
//   *[_type == 'tag'] | order(_createdAt desc) {
//     ${commonTagQuery}
//     'tagSlug': slug.current,
//   }
// `;

// export const singleTagQuery = groq`
//   *[_type == 'tag' && slug.current == $slug] {
//     ${commonTagQuery}
//     'posts': *[_type == 'post' && references(^._id)] | order(_createdAt desc) {
//       ${commonPostQuery}
//       'postSlug': slug.current,
//     },
//   }[0]
// `;

// export const searchQuery = groq`
//   *[(_type == "post" && !(_id in path("drafts.**")) && (pt::text(content) match $term || excerpt match $term || title match $term || tags[]->title match $term))]
//   {
//     _id,
//     title,
//     slug,
//     excerpt,
//     content,
//     tags,
//   }
// `;

// export const postRssQuery = groq`
//   *[_type == 'post'] | order(publishedAt desc) {
//     title,
//     excerpt,
//     publishedAt,
//     "postSlug": slug.current,
//     "coverImage": coverImage.asset->url,
//     "tags": tags[]->{title},
//   }
// `;

// export const postSitemapQuery = groq`
//   *[_type == 'post'] | order(_createdAt desc) {
//     'postSlug': slug.current,
//     _updatedAt,
//   }
// `;
// export const tagSitemapQuery = groq`
//   *[_type == 'tag'] | order(_createdAt desc) {
//     'tagSlug': slug.current,
//     _updatedAt,
//   }
// `;
