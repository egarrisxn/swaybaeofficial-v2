// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { PostCard } from "@/components/blog/post-card";
// import type { Post } from "@/types";

// interface AllPostsProps {
//   posts: Post[];
// }

// export default function AllPosts({ posts }: AllPostsProps) {
//   const featuredPosts = posts.filter((post) => post.featured);

//   const reorderedPosts = [
//     ...posts.filter((post) => !post.featured),
//     ...featuredPosts,
//   ];

//   const articlesShown = 1;
//   const [loadMore, setLoadMore] = useState(articlesShown);

//   const showMoreArticles = () => {
//     setLoadMore((prev) => prev + 2);
//   };

//   const displayedPosts = reorderedPosts.slice(0, loadMore);

//   return (
//     <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
//       <div>
//         <h2 className='pb-6 leading-relaxed font-medium tracking-wide'>
//           Featured Article
//         </h2>
//         {featuredPosts.length > 0 && (
//           <section className='grid grid-cols-1'>
//             {featuredPosts.map((post) => (
//               <PostCard
//                 key={post._id}
//                 post={post}
//                 noTagColor={true}
//                 isFeatured
//               />
//             ))}
//           </section>
//         )}
//       </div>

//       <hr className='block lg:hidden' />

//       <div>
//         <h2 className='pb-6 leading-relaxed font-medium tracking-wide'>
//           All Posts
//         </h2>
//         <section className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
//           {displayedPosts.map((post) => (
//             <PostCard key={post._id} post={post} noTagColor={true} />
//           ))}
//         </section>

//         <div className='mt-16 flex justify-center p-4'>
//           {reorderedPosts.length > loadMore ? (
//             <Button
//               variant='contrast'
//               size='sm'
//               type='button'
//               onClick={showMoreArticles}
//             >
//               Load more posts.
//             </Button>
//           ) : (
//             <p className='text-center text-gray-500'>
//               {displayedPosts.length} of {reorderedPosts.length} posts
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// // "use client";

// // import { useState } from "react";
// // import { Button } from "@/components/ui/button";
// // import { PostCard } from "@/components/blog/post-card";

// // import type { Post } from "@/types";

// // interface AllPostsProps {
// //   posts: Post[];
// // }

// // export default function AllPosts({ posts }: AllPostsProps) {
// //   const featuredPosts = posts.filter((post) => post.featured);

// //   const articlesShown = 1;
// //   const [loadMore, setLoadMore] = useState(articlesShown);

// //   const showMoreArticles = () => {
// //     setLoadMore((prev) => prev + 2);
// //   };

// //   const displayedPosts = posts.slice(0, loadMore);

// //   return (
// //     <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
// //       <div>
// //         <h2 className='pb-6 leading-relaxed font-medium tracking-wide'>
// //           Featured Article
// //         </h2>
// //         {featuredPosts.length > 0 && (
// //           <section className='grid grid-cols-1'>
// //             {featuredPosts.map((post) => (
// //               <PostCard
// //                 key={post._id}
// //                 post={post}
// //                 noTagColor={true}
// //                 isFeatured
// //               />
// //             ))}
// //           </section>
// //         )}
// //       </div>

// //       <hr className='block lg:hidden' />

// //       <div>
// //         <h2 className='pb-6 leading-relaxed font-medium tracking-wide'>
// //           All Posts
// //         </h2>
// //         <section className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
// //           {displayedPosts.map((post) => (
// //             <PostCard key={post._id} post={post} noTagColor={true} />
// //           ))}
// //         </section>

// //         <div className='mt-16 flex justify-center p-4'>
// //           {posts.length > loadMore ? (
// //             <Button
// //               variant='contrast'
// //               size='sm'
// //               type='button'
// //               onClick={showMoreArticles}
// //             >
// //               Load more posts.
// //             </Button>
// //           ) : (
// //             <p className='text-center text-gray-500'>
// //               {displayedPosts.length} of {posts.length} posts
// //             </p>
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
