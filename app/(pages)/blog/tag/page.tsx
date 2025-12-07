import type { Metadata } from "next";
import ComingSoon from "@/components/shared/coming-soon";

export const metadata: Metadata = {
  title: "Tag",
  description: "Blog Tag page coming soon.",
};

export default function TagPage() {
  return <ComingSoon />;
}

// import { notFound } from "next/navigation";
// import PageHeader from "@/components/blog/page-header";
// import TagCard from "@/components/blog/tag-card";
// import { generateStaticSlugs } from "@/lib/sanity/generate-static-slugs";
// import { loadTag } from "@/lib/sanity/load-query";

// import type { TagWithPosts } from "@/types";

// export function generateStaticParams() {
//   return generateStaticSlugs("tag");
// }

// export default async function TagSlugPage(props: any) {
//   const params = await props.params;
//   const result = await loadTag(params.slug);

//   if (!result.tag) notFound();

//   return <TagSlug tag={result.tag} />;
// }

// const TagSlug = ({ tag }: { tag: TagWithPosts }) => {
//   const { title, posts } = tag;

//   return (
//     <section className='min-h-screen pt-12 pb-28'>
//       <div className='container mx-auto max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
//         <div className='mx-auto grid grid-cols-1 items-center'>
//           <PageHeader
//             id='tags'
//             showSearch={true}
//             showLink={true}
//             linkHref='/blog'
//             linkText='Back'
//           />
//           <h2 className='my-5 font-serif text-3xl font-bold tracking-tight text-shadow-lg sm:text-4xl sm:leading-none lg:text-5xl 2xl:text-6xl'>
//             {title}
//           </h2>
//           <hr className='mb-12' />
//           <div className='mx-auto mt-8 mb-4 grid grid-cols-1 gap-8 px-4'>
//             <div className='grid grid-cols-1 gap-8'>
//               {posts.map((post) => (
//                 <TagCard key={post._id} post={post} />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
