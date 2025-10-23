// import type { ReactNode } from "react";
// import { Link } from "next-view-transitions";
// import { ArrowLeftIcon } from "@/components/icons";
// import SearchBar from "@/components/blog/search-bar";

// interface PageHeaderProps {
//   id: string;
//   className?: string;
//   children?: ReactNode;
//   showHr?: boolean;
//   showLink?: boolean;
//   linkHref?: string;
//   linkText?: string;
//   showSearch?: boolean;
// }

// export default function PageHeader({
//   id,
//   className,
//   children,
//   showHr = false,
//   showLink = false,
//   linkHref = "",
//   linkText = "",
//   showSearch = false,
// }: PageHeaderProps) {
//   return (
//     <div
//       className={`mx-auto w-full px-2 sm:px-4 ${
//         showSearch
//           ? "flex flex-row items-center justify-end gap-1 sm:justify-between"
//           : "block"
//       } ${className || ""}`}
//     >
//       {showHr && <hr className='rounded-lg border' />}

//       {showLink && (
//         <div className='hidden flex-row items-center gap-1 sm:flex'>
//           <Link
//             href={linkHref}
//             className='group mb-12 flex cursor-pointer items-center gap-1 text-muted-foreground hover:text-primary'
//           >
//             <ArrowLeftIcon className='ml-1 size-4 transition group-hover:-translate-x-1' />{" "}
//             <span id={id} className='-tracking-widest uppercase'>
//               {linkText}
//             </span>
//           </Link>
//         </div>
//       )}

//       {!showLink && (
//         <div className='hidden items-center sm:flex'>
//           <span id={id} className='tracking-wider'>
//             {children}
//           </span>
//         </div>
//       )}

//       {showSearch && <SearchBar placeholder='Search..' />}
//     </div>
//   );
// }
