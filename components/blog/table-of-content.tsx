// "use client";

// import React, { useCallback, useEffect, useState } from "react";
// import { motion } from "motion/react";
// import { cn } from "@/lib/utils";

// import type { Heading } from "@/types";

// type TableOfContentsProps = {
//   headings?: Heading[];
// };

// export function TableOfContents({
//   headings: initialHeadings,
// }: TableOfContentsProps) {
//   const [headings, setHeadings] = useState<Heading[]>(initialHeadings || []);
//   const [activeHeading, setActiveHeading] = useState<string | null>(null);

//   const getDomHeadings = useCallback((): Heading[] => {
//     return Array.from(
//       document.querySelectorAll<HTMLHeadingElement>("h1[id], h2[id], h3[id]")
//     ).map((heading) => ({
//       id: heading.id,
//       text: (heading.textContent || "").replace(/#$/, ""),
//       level: heading.tagName.toLowerCase() as Heading["level"],
//       top: heading.offsetTop,
//     }));
//   }, []);

//   useEffect(() => {
//     const collected = initialHeadings?.length
//       ? initialHeadings
//       : getDomHeadings();
//     setHeadings(collected);

//     const observer = new IntersectionObserver(
//       (entries) => {
//         let closest: string | null = null;
//         let minDistance = Infinity;

//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const distance = Math.abs(entry.boundingClientRect.top);
//             if (distance < minDistance) {
//               minDistance = distance;
//               closest = entry.target.id;
//             }
//           }
//         });

//         if (closest) setActiveHeading(closest);
//       },
//       { threshold: 0 }
//     );

//     collected.forEach((h) => {
//       const el = document.getElementById(h.id);
//       if (el) observer.observe(el);
//     });

//     const handleScroll = () => {
//       let closestId: string | null = null;
//       let minDist = Infinity;
//       collected.forEach((h) => {
//         const el = document.getElementById(h.id);
//         if (!el) return;
//         const dist = Math.abs(el.getBoundingClientRect().top - 100);
//         if (dist < minDist) {
//           minDist = dist;
//           closestId = h.id;
//         }
//       });
//       if (closestId) setActiveHeading(closestId);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => {
//       observer.disconnect();
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, [getDomHeadings, initialHeadings]);

//   const scrollToHeading = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) {
//       const top = el.getBoundingClientRect().top + window.scrollY - 100;
//       window.scrollTo({ top, behavior: "smooth" });
//     }
//   };

//   return (
//     <motion.nav
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       transition={{ duration: 0.25 }}
//       className='fixed top-40 right-auto left-8 mt-0 hidden h-full w-48 justify-start space-y-4 transition lg:top-32 lg:right-4 xl:top-40 xl:left-auto xl:block 2xl:right-32'
//     >
//       <div className='mt-0 flex flex-col gap-0'>
//         {headings.map((heading, index) => (
//           <div key={`${heading.id}-${index}`} className='mt-0'>
//             <button
//               type='button'
//               onClick={() => scrollToHeading(heading.id)}
//               className={cn({
//                 "mt-0 ml-2 border-l border-l-muted py-1 text-left text-muted-foreground opacity-100 transition ease-in-out hover:opacity-50": true,
//                 "border-l-blue-500 font-bold text-blue-700":
//                   activeHeading === heading.id,
//                 "pl-4": heading.level === "h1",
//                 "pl-4.5": heading.level === "h2",
//                 "pl-5": heading.level === "h3",
//               })}
//               data-active={activeHeading === heading.id ? "true" : "false"}
//             >
//               {heading.text}
//             </button>
//           </div>
//         ))}
//       </div>
//     </motion.nav>
//   );
// }
