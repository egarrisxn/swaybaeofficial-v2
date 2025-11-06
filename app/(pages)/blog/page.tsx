import ComingSoon from "@/components/shared/coming-soon";

export default function BlogPage() {
  return <ComingSoon />;
}

// import { notFound } from "next/navigation";
// import PageHeader from "@/components/blog/page-header";
// import AllPosts from "@/components/blog/all-posts";
// import AllTags from "@/components/blog/all-tags";
// import { loadBlog } from "@/lib/sanity/load-query";

// import type { Post, Tag } from "@/types";

// interface BlogPageProps {
//   posts: Post[];
//   tags: Tag[];
// }

// export default async function BlogPage(props: { params: any }) {
//   const params = await props.params;
//   const initial: BlogPageProps = await loadBlog(params);

//   if (!initial.posts) {
//     notFound();
//   }

//   return (
//     <div className='min-h-screen pt-12 pb-28'>
//       <div className='container mx-auto max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
//         <div className='mx-auto mb-4 grid w-full max-w-4xl grid-cols-1 px-2 sm:px-4 lg:max-w-6xl lg:px-8'>
//           <PageHeader
//             id='tags'
//             showSearch={true}
//             showLink={true}
//             linkHref='/'
//             linkText='Home'
//           />
//           <h2 className='mb-2 font-serif text-3xl font-bold tracking-tight text-shadow-lg sm:text-4xl sm:leading-none lg:text-5xl 2xl:text-6xl'>
//             Welcome to my blog!
//           </h2>
//           <p className='font-light text-muted-foreground sm:text-lg sm:leading-snug lg:text-xl 2xl:text-[1.35rem] 2xl:leading-snug'>
//             Where I write about things and stuff.
//           </p>
//           <hr className='my-12' />
//           <div className='mx-auto mb-4 px-4'>
//             <AllPosts posts={initial.posts} />
//           </div>
//         </div>
//         <aside>
//           <section>
//             <AllTags tags={initial.tags} />
//           </section>
//         </aside>
//       </div>
//     </div>
//   );
// }
