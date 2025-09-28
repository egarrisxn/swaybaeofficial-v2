// "use client";

// import { useEffect, useState } from "react";
// import { getNowPlayingItem } from "@/app/actions/spotify";
// import { SpotifyColored } from "@/components/icons";
// import type { Spotify } from "@/types";

// export function SpotifyNowPlaying() {
//   const [loading, setLoading] = useState(true);
//   const [result, setResult] = useState<Spotify | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const nowPlayingItem = await getNowPlayingItem();
//         setResult(nowPlayingItem);
//       } catch (error) {
//         console.error("Error fetching now playing item:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <>
//       {loading || !result ? (
//         <h3 className='grow font-medium tracking-tight text-white'>
//           Loading..
//         </h3>
//       ) : (
//         <div className='flex flex-row text-white'>
//           <div className='flex w-fit pt-0.5'>
//             <SpotifyColored className='h-4' />
//           </div>
//           {result.isPlaying ? "" : "Currently Offline"}
//           {result.isPlaying && (
//             <a
//               href={result.songUrl}
//               target='_blank'
//               rel='noopener noreferrer'
//               className='group flex w-full flex-1 flex-row'
//             >
//               <p className='text-sm tracking-tight whitespace-normal'>
//                 Currently listening to{" "}
//                 <span className='font-medium transition-all group-hover:text-green-500'>
//                   {`"${result.title}"`}{" "}
//                 </span>
//                 by <span className='font-medium'> {result.artist}</span>.
//               </p>
//             </a>
//           )}
//         </div>
//       )}
//     </>
//   );
// }
