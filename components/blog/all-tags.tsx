// "use client";

// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import TagBadge from "@/components/blog/tag-badge";

// import type { Tag } from "@/types";

// interface AllTagsProps {
//   tags: Tag[];
// }

// export default function AllTags({ tags }: AllTagsProps) {
//   const initialVisibleTags = 3;
//   const loadMoreCount = 3;
//   const maxVisibleTags = 9;
//   const [visibleTagsCount, setVisibleTagsCount] = useState(initialVisibleTags);

//   const handleLoadMore = () => {
//     setVisibleTagsCount((prevCount) =>
//       Math.min(prevCount + loadMoreCount, maxVisibleTags)
//     );
//   };

//   return (
//     <div className='fixed top-40 right-auto left-8 mt-0 hidden w-48 justify-start space-y-4 transition lg:top-32 lg:right-4 xl:top-40 xl:left-auto xl:block 3xl:right-32'>
//       <p className='mb-1 text-sm leading-relaxed font-medium text-muted-foreground'>
//         Popular Tags:
//       </p>
//       <div className='flex flex-col gap-1'>
//         {tags.slice(0, visibleTagsCount).map((tag) => (
//           <div key={tag._id}>
//             <TagBadge tag={tag} />
//           </div>
//         ))}
//       </div>
//       <div className='mt-1 flex'>
//         {tags.length > visibleTagsCount && visibleTagsCount < maxVisibleTags ? (
//           <Button variant='link' size='sm' onClick={handleLoadMore}>
//             Load more tags.
//           </Button>
//         ) : (
//           <p className='text-gray-500'>
//             {visibleTagsCount >= maxVisibleTags ? "" : "No more tags."}
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }
