// import { Link } from "next-view-transitions";
// import Image from "next/image";
// import { Card } from "@/components/ui/card";
// import { ArrowRightIcon } from "@/components/icons";
// import DateBadge from "@/components/blog/date-badge";
// import { urlFor } from "@/lib/sanity/client";

// import type { Post } from "@/types";

// interface TagCardProps {
//   post: Post;
// }

// export default function TagCard({ post }: TagCardProps) {
//   const { coverImage, title, excerpt, publishedAt, postSlug } = post;

//   return (
//     <Card className='p-4 md:p-8 lg:p-2'>
//       <div className='grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-1 xl:gap-2'>
//         <section className='rounded-3xl transition hover:opacity-90 lg:mx-auto lg:flex lg:items-center lg:justify-center 2xl:p-4'>
//           <Link href={`/blog/post/${postSlug}`}>
//             <Image
//               className='rounded-3xl object-cover object-center'
//               src={
//                 coverImage?.image
//                   ? urlFor(coverImage.image).fit("max").auto("format").url()
//                   : "/other/faces.png"
//               }
//               alt={coverImage?.alt || "Post cover image"}
//               width={800}
//               height={300}
//             />
//           </Link>
//         </section>
//         <section className='flex flex-col gap-2 p-4 2xl:gap-3'>
//           <div className='flex justify-start lg:justify-end'>
//             <DateBadge publishedAt={publishedAt} />
//           </div>
//           <hr className='my-3' />
//           <div className='flex'>
//             <h2 className='line-clamp-2 max-w-2xl text-2xl underline-offset-4 hover:underline sm:text-3xl lg:line-clamp-1 xl:line-clamp-2 2xl:text-4xl 2xl:leading-[1] 2xl:tracking-tight'>
//               <Link href={`/blog/post/${postSlug}`}>{title}</Link>
//             </h2>
//           </div>
//           <div className='mt-1 flex h-full flex-col justify-between'>
//             <div className='flex items-start justify-start'>
//               <p className='mb-4 line-clamp-5 max-w-2xl font-light text-muted-foreground lg:line-clamp-3 xl:line-clamp-4 xl:text-lg 2xl:mb-3'>
//                 {excerpt}
//               </p>
//             </div>
//             <div className='flex flex-row items-end justify-end'>
//               <Link
//                 href={`/blog/post/${postSlug}`}
//                 className='group flex cursor-pointer items-center gap-1 text-muted-foreground hover:text-primary'
//               >
//                 <span className='tracking-widest uppercase'>Read Post</span>
//                 <ArrowRightIcon
//                   width={16}
//                   height={16}
//                   className='ml-1 size-4 -translate-x-1 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105'
//                 />{" "}
//               </Link>
//             </div>
//           </div>
//         </section>
//       </div>
//     </Card>
//   );
// }
