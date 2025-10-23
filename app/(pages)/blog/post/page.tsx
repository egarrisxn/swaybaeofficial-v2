export default function PostPage() {
  return (
    <section className='grid size-full place-items-center'>
      <h1 className='text-shadow pb-20 text-4xl font-black tracking-tighter text-wrap text-shadow-lg sm:text-6xl lg:text-7xl 2xl:text-9xl'>
        COMING SOON.
      </h1>
    </section>
  );
}

// import Image from "next/image";
// import { Link } from "next-view-transitions";
// import { notFound } from "next/navigation";
// import { ArrowLeftIcon } from "@/components/icons";
// import { TableOfContents } from "@/components/blog/table-of-content";
// import TagBadge from "@/components/blog/tag-badge";
// import DateBadge from "@/components/blog/date-badge";
// import CustomPortableText from "@/components/blog/portable-text";
// import { generateStaticSlugs } from "@/lib/sanity/generate-static-slugs";
// import { loadPost } from "@/lib/sanity/load-query";
// import { mapBlocksToHeadings, blocksToSanityBlocks } from "@/lib/sanity/toc";

// import type { Post } from "@/types";

// export function generateStaticParams() {
//   return generateStaticSlugs("post");
// }

// export default async function PostSlugPage(props: any) {
//   const params = await props.params;
//   const post = await loadPost(params.slug);

//   if (!post) notFound();

//   return <PostSlug post={post} />;
// }

// const PostSlug = ({ post }: { post: Post }) => {
//   const { title, content, publishedAt } = post;

//   const tocHeadings = mapBlocksToHeadings(blocksToSanityBlocks(post.content));

//   return (
//     <div className='min-h-screen pt-12 pb-108'>
//       <div className='container mx-auto max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
//         <article className='mx-auto mb-4 grid w-full max-w-4xl grid-cols-1 px-2 sm:px-4 lg:max-w-6xl lg:px-8'>
//           <section className='py-4'>
//             <Link
//               href='/blog'
//               className='group mb-12 flex cursor-pointer items-center gap-1 text-muted-foreground hover:text-primary'
//             >
//               <ArrowLeftIcon className='ml-1 size-4 transition group-hover:-translate-x-1' />{" "}
//               <span className='text-sm -tracking-widest uppercase'>Blog</span>
//             </Link>
//             <h2 className='mb-2 font-serif text-3xl font-bold tracking-tight text-shadow-lg sm:text-4xl sm:leading-none lg:text-5xl'>
//               {title}
//             </h2>
//             <div className='flex flex-wrap items-center space-x-1 text-sm text-muted-foreground sm:text-base'>
//               <DateBadge publishedAt={publishedAt} />
//               <div>•</div>
//               <div className='pl-1'>5 minute read</div>
//             </div>
//           </section>
//           <section className='mt-2 flex max-[300px]:max-w-60'>
//             {post.coverImage?.image && (
//               <Image
//                 src={post.coverImage.image}
//                 alt={post.coverImage.alt || "Cover Image"}
//                 width={820}
//                 height={310}
//                 className='w-full rounded border-2 bg-white object-cover object-center p-2'
//               />
//             )}
//           </section>
//           <section className='mt-8 mb-6 flex max-[300px]:max-w-60 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16'>
//             <div className='w-full text-sm text-muted-foreground/90 transition-all ease-in-out'>
//               <CustomPortableText value={content} />
//             </div>
//           </section>
//         </article>
//         <div className='flex max-w-4xl flex-row items-center justify-start px-2 max-[300px]:max-w-60 sm:px-4 lg:px-8 2xl:max-w-6xl'>
//           <p className='pb-2 font-semibold md:pr-2 md:pb-0'>Tags:</p>
//           <div className='flex flex-row gap-2'>
//             {post.tags.map((tag) => (
//               <TagBadge key={tag._id} tag={tag} />
//             ))}
//           </div>
//         </div>
//         <aside>
//           <section>
//             {tocHeadings.length > 0 && (
//               <TableOfContents headings={tocHeadings} />
//             )}
//           </section>
//         </aside>
//       </div>
//     </div>
//   );
// };
