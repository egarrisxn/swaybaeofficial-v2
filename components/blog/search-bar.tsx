// "use client";

// import Link from "next/link";
// import { useSearchParams, usePathname, useRouter } from "next/navigation";
// import { useState, useEffect, ChangeEvent } from "react";
// import { useDebouncedCallback } from "use-debounce";
// import { SearchIcon } from "@/components/icons";
// import { searchQuery } from "@/lib/sanity/queries";
// import { client } from "@/lib/sanity/client";

// import type { SearchResult } from "@/types";

// interface SearchBarProps {
//   placeholder: string;
// }

// export default function SearchBar({ placeholder }: SearchBarProps) {
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();

//   const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = useDebouncedCallback(async (term: string) => {
//     const params = new URLSearchParams(searchParams);
//     if (term) {
//       params.set("query", term);
//     } else {
//       params.delete("query");
//     }
//     replace(`${pathname}?${params.toString()}`);

//     if (term) {
//       try {
//         const response: SearchResult[] = await client.fetch(searchQuery, {
//           term,
//         });
//         setSearchResults(response);
//       } catch (error) {
//         console.error("Error fetching search results:", error);
//       }
//     } else {
//       setSearchResults([]);
//     }
//   }, 300);

//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       const searchElement = document.getElementById("search-container");

//       if (searchElement && !searchElement.contains(event.target as Node)) {
//         setSearchResults([]);
//       }
//     }

//     document.body.addEventListener("click", handleClickOutside);
//     return () => {
//       document.body.removeEventListener("click", handleClickOutside);
//     };
//   }, []);

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { value } = e.target;
//     setSearchTerm(value);
//     if (value.length >= 3) {
//       handleSearch(value);
//     } else {
//       setSearchResults([]);
//     }
//   };

//   return (
//     <div id='search-container' className='relative z-20'>
//       <div className='flex items-center space-x-2 rounded-md border-2 border-foreground/50 bg-background p-2 shadow-lg'>
//         <label htmlFor='search' className='sr-only'>
//           Search
//         </label>
//         <input
//           id='search'
//           className='w-40 appearance-none bg-background outline-none sm:w-auto'
//           placeholder={placeholder}
//           onChange={handleChange}
//           value={searchTerm}
//         />
//         <SearchIcon width={16} height={16} strokeWidth={2.25} />
//       </div>
//       {searchResults.length > 0 && (
//         <div className='absolute top-full left-0 my-1 w-full overflow-y-auto rounded-md border bg-background tracking-tight shadow-sm 2xl:text-base'>
//           <p className='rounded-t bg-muted p-2 text-center font-semibold text-muted-foreground'>
//             Search Results
//           </p>
//           <hr />
//           <ul>
//             {searchResults.map((result) => (
//               <li
//                 key={result._id}
//                 className='inline-flex w-full justify-start transition ease-in-out'
//               >
//                 <Link
//                   href={`/blog/post/${result.slug.current}`}
//                   className='w-full border-t px-1.5 py-2 hover:bg-accent hover:text-accent-foreground'
//                   onClick={() => setSearchResults([])}
//                 >
//                   {result.title}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }
