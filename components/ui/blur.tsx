"use client";

import { useEffect, useState } from "react";
import { motion, type Variants } from "motion/react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

type MotionVariants = Variants;

const blurVariants = cva("will-change-transform", {
  variants: {
    strength: {
      sm: "blur-[2px]",
      md: "blur-[6px]",
      lg: "blur-[10px]",
    },
    direction: {
      up: "",
      down: "",
      none: "",
    },
  },
  defaultVariants: {
    strength: "md",
    direction: "up",
  },
});

type BlurVariantProps = VariantProps<typeof blurVariants>;

interface BlurProps extends BlurVariantProps {
  className?: string;
  children: React.ReactNode;
  variant?: MotionVariants;
  duration?: number;
  delay?: number;
}

/* ------------------- prefers-reduced-motion hook ------------------- */
function usePrefersReducedMotion() {
  const [prefers, setPrefers] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPrefers(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefers(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefers;
}

/* ------------------- For blocks/items ------------------- */
export function BlurItem({
  className,
  children,
  variant,
  duration = 0.4,
  delay = 0.4,
  strength,
  direction,
}: BlurProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const defaultVariants: MotionVariants = prefersReducedMotion
    ? {
        hidden: { y: 0, opacity: 1, filter: "blur(0px)" },
        visible: { y: 0, opacity: 1, filter: "blur(0px)" },
      }
    : {
        hidden: {
          y: direction === "up" ? -20 : direction === "down" ? 20 : 0,
          opacity: 0,
          filter: "blur(6px)",
        },
        visible: {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
        },
      };

  const finalVariants = prefersReducedMotion
    ? defaultVariants
    : variant || defaultVariants;

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      variants={finalVariants}
      viewport={
        prefersReducedMotion ? { once: true } : { once: true, margin: "-50px" }
      }
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              delay: 0.04 + delay,
              duration,
              ease: "easeOut",
            }
      }
      className={cn(blurVariants({ strength, direction }), className)}
    >
      {children}
    </motion.div>
  );
}

/* ------------------- For inline text ------------------- */
export function BlurText({
  className,
  children,
  variant,
  duration = 0.4,
  delay = 0,
  strength,
  direction,
}: BlurProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const defaultVariants: MotionVariants = prefersReducedMotion
    ? {
        hidden: { y: 0, opacity: 1, filter: "blur(0px)" },
        visible: { y: 0, opacity: 1, filter: "blur(0px)" },
      }
    : {
        hidden: {
          y: direction === "up" ? -20 : direction === "down" ? 20 : 0,
          opacity: 0,
          filter: "blur(6px)",
        },
        visible: {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
        },
      };

  const finalVariants = prefersReducedMotion
    ? defaultVariants
    : variant || defaultVariants;

  return (
    <motion.span
      initial='hidden'
      whileInView='visible'
      variants={finalVariants}
      viewport={{ once: true }}
      transition={
        prefersReducedMotion
          ? { duration: 0 }
          : {
              delay: 0.04 + delay,
              duration,
              ease: "easeOut",
            }
      }
      className={cn(
        "inline-block",
        blurVariants({ strength, direction }),
        className
      )}
    >
      {children}
    </motion.span>
  );
}

// import * as motion from "motion/react-client";
// import type { Variants } from "motion/react";
// import { cva, type VariantProps } from "class-variance-authority";
// import { cn } from "@/lib/utils";

// type MotionVariants = Variants;

// const blurVariants = cva("will-change-transform", {
//   variants: {
//     strength: {
//       sm: "blur-[2px]",
//       md: "blur-[6px]",
//       lg: "blur-[10px]",
//     },
//     direction: {
//       up: "",
//       down: "",
//       none: "",
//     },
//   },
//   defaultVariants: {
//     strength: "md",
//     direction: "up",
//   },
// });

// type BlurVariantProps = VariantProps<typeof blurVariants>;

// interface BlurProps extends BlurVariantProps {
//   className?: string;
//   children: React.ReactNode;
//   variant?: MotionVariants;
//   duration?: number;
//   delay?: number;
// }

// /* ------------------- For blocks/items ------------------- */
// export function BlurItem({
//   className,
//   children,
//   variant,
//   duration = 0.4,
//   delay = 0.4,
//   strength,
//   direction,
// }: BlurProps) {
//   const defaultVariants: MotionVariants = {
//     hidden: {
//       y: direction === "up" ? -20 : direction === "down" ? 20 : 0,
//       opacity: 0,
//       filter: "blur(6px)",
//     },
//     visible: {
//       y: 0,
//       opacity: 1,
//       filter: "blur(0px)",
//     },
//   };

//   return (
//     <motion.div
//       initial='hidden'
//       whileInView='visible'
//       variants={variant || defaultVariants}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{
//         delay: 0.04 + delay,
//         duration,
//         ease: "easeOut",
//       }}
//       className={cn(blurVariants({ strength, direction }), className)}
//     >
//       {children}
//     </motion.div>
//   );
// }

// /* ------------------- For inline text ------------------- */
// export function BlurText({
//   className,
//   children,
//   variant,
//   duration = 0.4,
//   delay = 0,
//   strength,
//   direction,
// }: BlurProps) {
//   const defaultVariants: MotionVariants = {
//     hidden: {
//       y: direction === "up" ? -20 : direction === "down" ? 20 : 0,
//       opacity: 0,
//       filter: "blur(6px)",
//     },
//     visible: {
//       y: 0,
//       opacity: 1,
//       filter: "blur(0px)",
//     },
//   };

//   return (
//     <motion.span
//       initial='hidden'
//       whileInView='visible'
//       variants={variant || defaultVariants}
//       viewport={{ once: true }}
//       transition={{
//         delay: 0.04 + delay,
//         duration,
//         ease: "easeOut",
//       }}
//       className={cn(
//         "inline-block",
//         blurVariants({ strength, direction }),
//         className
//       )}
//     >
//       {children}
//     </motion.span>
//   );
// }
