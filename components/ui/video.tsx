"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { XCloseIcon, PlayIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface VideoProps {
  videoSrc: string;
  thumbnailSrc: string;
  reducedMotionThumbnailSrc?: string;
  thumbnailAlt?: string;
  className?: string;
}

function Video({
  videoSrc,
  thumbnailSrc,
  reducedMotionThumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: VideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setIsVideoOpen(false);
    }

    if (isVideoOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isVideoOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updatePreference = (event: MediaQueryListEvent | MediaQueryList) => {
      setPrefersReducedMotion(event.matches);
    };

    updatePreference(mediaQuery);

    const handleChange = (event: MediaQueryListEvent) => {
      updatePreference(event);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const effectiveThumbnailSrc =
    prefersReducedMotion && reducedMotionThumbnailSrc
      ? reducedMotionThumbnailSrc
      : thumbnailSrc;

  return (
    <div className={cn("relative", className)}>
      <button
        type='button'
        aria-label='Play video'
        className='group relative h-auto w-full cursor-pointer'
        onClick={() => setIsVideoOpen(true)}
      >
        <Image
          src={effectiveThumbnailSrc}
          alt={thumbnailAlt}
          width={1920}
          height={1080}
          unoptimized
          className='w-full rounded-2xl border border-b-2 border-border border-b-border/90 bg-card p-0.5 shadow-2xl transition-all duration-200 ease-out group-hover:brightness-[0.85]'
        />
        <div className='absolute inset-0 flex scale-[0.9] items-center justify-center rounded-[1.35rem] transition-all duration-200 ease-out group-hover:scale-100'>
          <div className='flex size-28 items-center justify-center rounded-full bg-primary/10 backdrop-blur-md'>
            <div className='relative flex size-20 scale-100 items-center justify-center rounded-full bg-linear-to-b from-primary/20 to-primary shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]'>
              <PlayIcon className='size-7 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105 dark:fill-slate-900 dark:text-slate-900' />
            </div>
          </div>
        </div>
      </button>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              if (e.currentTarget === e.target) setIsVideoOpen(false);
            }}
            className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md'
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className='relative mx-4 aspect-video w-full max-w-4xl md:mx-0'
            >
              <motion.button
                type='button'
                className='absolute -top-16 right-0 rounded-full border-2 border-white bg-black p-2 text-xl text-white backdrop-blur-md'
                onClick={() => setIsVideoOpen(false)}
                aria-label='Close video'
              >
                <XCloseIcon className='size-5' />
              </motion.button>

              <div className='relative isolate size-full overflow-hidden rounded-3xl border border-b-4 border-foreground border-b-foreground/90 bg-white p-1 dark:bg-black'>
                <iframe
                  src={videoSrc}
                  className='size-full rounded-[1.25rem]'
                  allowFullScreen
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export { Video };

// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { AnimatePresence, motion } from "motion/react";
// import { XCloseIcon, PlayIcon } from "@/components/icons";
// import { cn } from "@/lib/utils";

// type VideoAnimationStyle =
//   | "from-bottom"
//   | "from-center"
//   | "from-top"
//   | "from-left"
//   | "from-right"
//   | "fade"
//   | "top-in-bottom-out"
//   | "left-in-right-out";

// interface VideoAnimationVariants {
//   initial: { [key: string]: string | number };
//   animate: { [key: string]: string | number };
//   exit: { [key: string]: string | number };
// }

// const videoAnimationVariants: Record<
//   VideoAnimationStyle,
//   VideoAnimationVariants
// > = {
//   "from-bottom": {
//     initial: { y: "100%", opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//     exit: { y: "100%", opacity: 0 },
//   },
//   "from-center": {
//     initial: { scale: 0.5, opacity: 0 },
//     animate: { scale: 1, opacity: 1 },
//     exit: { scale: 0.5, opacity: 0 },
//   },
//   "from-top": {
//     initial: { y: "-100%", opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//     exit: { y: "-100%", opacity: 0 },
//   },
//   "from-left": {
//     initial: { x: "-100%", opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//     exit: { x: "-100%", opacity: 0 },
//   },
//   "from-right": {
//     initial: { x: "100%", opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//     exit: { x: "100%", opacity: 0 },
//   },
//   fade: {
//     initial: { opacity: 0 },
//     animate: { opacity: 1 },
//     exit: { opacity: 0 },
//   },
//   "top-in-bottom-out": {
//     initial: { y: "-100%", opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//     exit: { y: "100%", opacity: 0 },
//   },
//   "left-in-right-out": {
//     initial: { x: "-100%", opacity: 0 },
//     animate: { x: 0, opacity: 1 },
//     exit: { x: "100%", opacity: 0 },
//   },
// };

// interface VideoProps {
//   videoAnimationStyle?: VideoAnimationStyle;
//   videoSrc: string;
//   thumbnailSrc: string;
//   thumbnailAlt?: string;
//   className?: string;
// }

// function Video({
//   videoAnimationStyle = "from-center",
//   videoSrc,
//   thumbnailSrc,
//   thumbnailAlt = "Video thumbnail",
//   className,
// }: VideoProps) {
//   const [isVideoOpen, setIsVideoOpen] = useState(false);
//   const selectedAnimation = videoAnimationVariants[videoAnimationStyle];

//   useEffect(() => {
//     function handleKeyDown(e: KeyboardEvent) {
//       if (e.key === "Escape") setIsVideoOpen(false);
//     }
//     if (isVideoOpen) window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [isVideoOpen]);

//   return (
//     <div className={cn("relative", className)}>
//       <button
//         type='button'
//         aria-label='Play video'
//         className='group relative h-auto w-full cursor-pointer'
//         onClick={() => setIsVideoOpen(true)}
//       >
//         <Image
//           src={thumbnailSrc}
//           alt={thumbnailAlt}
//           width={1920}
//           height={1080}
//           unoptimized
//           className='w-full rounded-2xl border border-b-2 border-border border-b-border/90 bg-card p-0.5 shadow-2xl transition-all duration-200 ease-out group-hover:brightness-[0.85]'
//         />
//         <div className='absolute inset-0 flex scale-[0.9] items-center justify-center rounded-[1.35rem] transition-all duration-200 ease-out group-hover:scale-100'>
//           <div className='flex size-28 items-center justify-center rounded-full bg-primary/10 backdrop-blur-md'>
//             <div className='relative flex size-20 scale-100 items-center justify-center rounded-full bg-linear-to-b from-primary/20 to-primary shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]'>
//               <PlayIcon className='size-7 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105 dark:fill-slate-900 dark:text-slate-900' />
//             </div>
//           </div>
//         </div>
//       </button>

//       <AnimatePresence>
//         {isVideoOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={(e) => {
//               if (e.currentTarget === e.target) setIsVideoOpen(false);
//             }}
//             className='fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md'
//           >
//             <motion.div
//               {...selectedAnimation}
//               transition={{ type: "spring", damping: 30, stiffness: 300 }}
//               className='relative mx-4 aspect-video w-full max-w-4xl md:mx-0'
//             >
//               <motion.button
//                 type='button'
//                 className='absolute -top-16 right-0 rounded-full border-2 border-white bg-black p-2 text-xl text-white backdrop-blur-md'
//                 onClick={() => setIsVideoOpen(false)}
//                 aria-label='Close video'
//               >
//                 <XCloseIcon className='size-5' />
//               </motion.button>

//               <div className='relative isolate size-full overflow-hidden rounded-3xl border border-b-4 border-foreground border-b-foreground/90 bg-white p-1 dark:bg-black'>
//                 <iframe
//                   src={videoSrc}
//                   className='size-full rounded-[1.25rem]'
//                   allowFullScreen
//                   allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
//                 ></iframe>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export { Video };
