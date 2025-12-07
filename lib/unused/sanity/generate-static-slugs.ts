// import "server-only";

// import { groq } from "next-sanity";
// import { client } from "./client";
// import { token } from "./token";

// export function generateStaticSlugs(type: string) {
//   return client
//     .withConfig({
//       token,
//       useCdn: false,
//     })
//     .fetch(
//       groq`*[_type == $type && defined(slug.current)]{"slug": slug.current}`,
//       { type },
//       {
//         next: {
//           tags: [type],
//         },
//       }
//     );
// }
