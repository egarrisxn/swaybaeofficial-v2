// import Image from "next/image";
// import Link from "next/link";
// import { PortableText, type PortableTextComponents } from "next-sanity";
// import { urlFor } from "@/lib/sanity/client";
// import { hrefResolver } from "@/lib/sanity/utils";
// import type { PortableTextBlock } from "@portabletext/types";

// type CustomPortableTextProps = {
//   value: PortableTextBlock[];
//   className?: string;
// };

// export default function CustomPortableText({
//   value,
//   className,
// }: CustomPortableTextProps) {
//   const components: PortableTextComponents = {
//     block: {
//       h1: ({ children, value }) => (
//         <h1 id={value._key} className='my-4 text-4xl font-extrabold'>
//           {children}
//         </h1>
//       ),
//       h2: ({ children, value }) => (
//         <h2 id={value._key} className='my-4 text-3xl font-bold'>
//           {children}
//         </h2>
//       ),
//       h3: ({ children, value }) => (
//         <h3 id={value._key} className='my-8 text-2xl font-medium'>
//           {children}
//         </h3>
//       ),
//       h4: ({ children }) => <h4 className='text-lg font-medium'>{children}</h4>,
//       normal: ({ children }) => (
//         <p className='my-4 text-sm lg:text-base'>{children}</p>
//       ),
//       blockquote: ({ children }) => (
//         <blockquote className='border-l-4 pl-4 italic'>{children}</blockquote>
//       ),
//     },
//     list: {
//       bullet: ({ children }) => <ul>{children}</ul>,
//       number: ({ children }) => <ol>{children}</ol>,
//     },
//     listItem: {
//       bullet: ({ children }) => <li>{children}</li>,
//       number: ({ children }) => <li>{children}</li>,
//     },
//     marks: {
//       link: ({ children, value }) => {
//         const href = hrefResolver(value) ?? "#";
//         return (
//           <Link href={href} className='text-blue-500 hover:text-blue-600'>
//             {children}
//           </Link>
//         );
//       },
//       strong: ({ children }) => (
//         <strong className='font-bold'>{children}</strong>
//       ),
//       em: ({ children }) => <em className='italic'>{children}</em>,
//       code: ({ children }) => <code className='p-1'>{children}</code>,
//       underline: ({ children }) => <u>{children}</u>,
//       highlight: ({ children }) => (
//         <span className='bg-yellow-200 px-1'>{children}</span>
//       ),
//     },
//     types: {
//       image: ({ value, isInline }) => (
//         <div>
//           <Image
//             className='rounded border-2 object-cover object-center p-2 shadow-md'
//             src={urlFor(value)
//               .width(isInline ? 100 : 800)
//               .fit("max")
//               .auto("format")
//               .url()}
//             alt={value.alt || "No alt text provided for this image."}
//             loading='lazy'
//             width={800}
//             height={450}
//             style={{
//               display: isInline ? "inline-block" : "block",
//             }}
//           />
//           {value.caption && (
//             <p className='text-sm text-gray-500 italic'>{value.caption}</p>
//           )}
//         </div>
//       ),
//       youtube: ({ value }) => {
//         if (!value?.video?.id) return null;
//         return (
//           <div className='aspect-video flex-1'>
//             <iframe
//               src={`https://www.youtube.com/embed/${value.video.id}`}
//               allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
//               allowFullScreen
//               className='w-full rounded border-2 object-center p-2 shadow-md'
//             />
//           </div>
//         );
//       },
//     },
//   };

//   return (
//     <div className={className ?? ""}>
//       <PortableText value={value} components={components} />
//     </div>
//   );
// }
