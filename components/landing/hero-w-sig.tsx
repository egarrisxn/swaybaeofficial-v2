"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import White from "@/public/icons/sig-wht.svg";

export function Hero() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='relative flex h-dvh flex-col'>
      {/* Background */}
      <div className='absolute inset-0 z-0 size-full bg-background'>
        <div className='relative size-full overflow-hidden brightness-50 saturate-75'>
          <Image
            src='/hero/desktop.png'
            alt='Fallback image for desktop video'
            className='absolute inset-0 size-full object-cover'
            height={1440}
            width={2560}
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className='relative z-10 flex h-full font-semibold text-white uppercase'>
        {/* Top-level Nav */}
        <div
          className={`z-20 hidden w-full justify-between p-6 backdrop-blur-md lg:fixed lg:top-0 lg:flex lg:px-8 ${
            scrolling ? "flex-grow-0 bg-black/70" : "flex-grow bg-transparent"
          }`}
        >
          {/* Left links */}
          <div className='flex items-center lg:gap-x-20 xl:gap-x-32 xl:text-lg 2xl:gap-x-52'>
            <Link href='/about' className='transition-colors hover:text-link'>
              ABOUT
            </Link>
            <Link
              href='/calendar'
              className='transition-colors hover:text-link'
            >
              CALENDAR
            </Link>
            <Link
              href='/merch'
              className={`transition-all duration-700 ease-in-out hover:text-link ${
                scrolling ? "ml-0" : "ml-12"
              }`}
            >
              MERCH
            </Link>
          </div>

          {/* Middle logo text (Sway Bae slot) */}
          <div className='transition-all duration-700 ease-in-out'>
            <span
              className={`opacity-0 lg:text-lg ${
                scrolling ? "flex-grow-0" : "flex-grow"
              }`}
            >
              SWAY BAE
            </span>
          </div>

          {/* Right links */}
          <div className='flex items-center lg:gap-x-20 xl:gap-x-32 xl:text-lg 2xl:gap-x-52'>
            <Link
              href='/blog'
              className={`transition-all duration-700 ease-in-out hover:text-link ${
                scrolling ? "mr-0" : "mr-12"
              }`}
            >
              BLOG
            </Link>
            <Link
              href='/community'
              className='transition-colors hover:text-link'
            >
              COMMUNITY
            </Link>
            <Link href='/contact' className='transition-colors hover:text-link'>
              CONTACT
            </Link>
          </div>
        </div>

        {/* Animated logo */}
        <White
          className={`absolute inset-x-0 z-20 mx-auto flex size-auto flex-row items-center justify-center tracking-tighter transition-all duration-700 ease-in-out lg:fixed lg:h-auto ${
            scrolling
              ? "mt-2 h-16 w-32 lg:top-0 lg:translate-y-0"
              : "size-full p-80 lg:top-1/2 lg:-translate-y-1/2"
          }`}
        />
      </div>
    </div>
  );
}

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Black from "@/public/icons/sig-blk.svg";
// import White from "@/public/icons/sig-wht.svg";

// export function Hero() {
//   const [scrolling, setScrolling] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolling(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className='relative flex h-dvh flex-col'>
//       <div className='absolute inset-0 z-0 size-full bg-background'>
//         <div className='relative size-full overflow-hidden opacity-125 brightness-75 saturate-75'>
//           <Image
//             src='/hero/desktop.png'
//             alt='Fallback image for desktop video'
//             className='absolute inset-0 size-full object-cover'
//             height={1440}
//             width={2560}
//             priority
//           />
//         </div>
//       </div>
//       {/* Hero Content Container */}
//       <div className='relative z-10 flex h-full font-semibold text-white uppercase'>
//         {/* Top-level Nav Container */}
//         <div
//           className={`z-20 hidden w-full justify-between p-6 backdrop-blur-md lg:fixed lg:top-0 lg:flex lg:p-8 ${scrolling ? "flex-grow-0 bg-black/70" : "flex-grow bg-transparent"} `}
//         >
//           {/* Left links  */}
//           <div className='flex items-center lg:gap-x-20 xl:gap-x-32 xl:text-lg 2xl:gap-x-52'>
//             <span className='x'>ABOUT</span>
//             <span className='x'>CALENDAR</span>
//             <span
//               className={`transition-all duration-700 ease-in-out ${scrolling ? "ml-0" : "ml-12"}`}
//             >
//               MERCH
//             </span>
//           </div>
//           {/* The space where "Sway Bae" will go */}
//           <div className='transition-all duration-700 ease-in-out'>
//             <span
//               className={`opacity-0 lg:text-lg ${scrolling ? "flex-grow-0" : "flex-grow"}`}
//             >
//               SWAY BAE
//             </span>
//           </div>
//           {/* Right link  */}
//           <div className='flex items-center lg:gap-x-20 xl:gap-x-32 xl:text-lg 2xl:gap-x-52'>
//             <span
//               className={`transition-all duration-700 ease-in-out ${scrolling ? "mr-0" : "mr-12"}`}
//             >
//               BLOG
//             </span>
//             <span className='x'>COMMUNITY</span>
//             <span className='x'>CONTACT</span>
//           </div>
//         </div>
//         {/* This is the Sway Bae text that animates */}
//         <White
//           className={`absolute inset-x-0 z-20 mx-auto flex size-auto flex-row items-center justify-center tracking-tighter transition-all duration-700 ease-in-out lg:fixed lg:h-auto ${scrolling ? "mt-4 h-16 w-32 lg:top-0 lg:translate-y-0" : "size-full lg:top-full lg:-translate-y-full"} `}
//         />
//       </div>
//     </div>
//   );
// }
