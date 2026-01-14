// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import TagBadge from "@/components/blog/tag-badge";
// import { ArrowRightIcon } from "@/components/icons";
// // import { urlFor } from "@/lib/sanity/client";
// import type { Post } from "@/types";

// interface PostCardProps {
//   post: Post;
//   noTagColor?: boolean;
//   isFeatured?: boolean;
// }

// export function PostCard({
//   post,
//   noTagColor = false,
//   isFeatured = false,
// }: PostCardProps) {
//   const { _id, coverImage, title, excerpt, tags, postSlug } = post;
//   return (
//     <>
//       <article key={_id} className='grid grid-cols-1 gap-2 pb-4'>
//         <section
//           className={`rounded-2xl transition hover:opacity-85 ${
//             isFeatured ? "mb-2" : "mb-1"
//           }`}
//         >
//           <Link href={`/blog/post/${postSlug}`}>
//             <Image
//               className='rounded-2xl object-cover object-center'
//               src={coverImage?.image || ""}
//               alt={coverImage?.alt || "Post cover image"}
//               width={1000}
//               height={400}
//             />
//           </Link>
//         </section>
//         <hr
//           className={`mb-0 h-0.5 bg-foreground ${isFeatured ? "mt-3" : "mt-2"}`}
//         />
//         <section
//           className={`flex flex-row flex-wrap gap-1 ${isFeatured ? "text-sm" : "text-xs"}`}
//         >
//           {tags?.length > 0 &&
//             tags.map((tag) => (
//               <div key={tag._id} className='hover:font-medium hover:shadow-sm'>
//                 <TagBadge tag={tag} noColor={noTagColor} />
//               </div>
//             ))}
//         </section>
//         <section>
//           <h2
//             className={`my-3 hover:underline hover:underline-offset-4 ${isFeatured ? "text-3xl leading-snug lg:text-4xl lg:leading-[1]" : "truncate text-lg leading-normal lg:text-xl lg:leading-[1]"}`}
//           >
//             <Link href={`/blog/post/${postSlug}`}>{title}</Link>
//           </h2>
//           <p
//             className={`mb-2 font-light text-muted-foreground ${isFeatured ? "max-w-5xl text-lg leading-snug" : "line-clamp-3 text-sm leading-normal"}`}
//           >
//             {excerpt}
//           </p>
//         </section>
//         <section className='group'>
//           <Button
//             asChild
//             variant='link'
//             size='sm'
//             className={`font-semibold group-hover:font-bold group-hover:no-underline ${isFeatured ? "text-lg" : "text-sm"}`}
//           >
//             <Link href={`/blog/post/${postSlug}`}>
//               Continue Reading{" "}
//               <ArrowRightIcon
//                 width={16}
//                 height={16}
//                 className='-translate-x-1 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105'
//               />
//             </Link>
//           </Button>
//         </section>
//       </article>
//     </>
//   );
// }
