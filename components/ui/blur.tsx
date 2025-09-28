import * as motion from "motion/react-client";
import type { Variants } from "motion/react";
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
  const defaultVariants: MotionVariants = {
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

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      variants={variant || defaultVariants}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      }}
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
  const defaultVariants: MotionVariants = {
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

  return (
    <motion.span
      initial='hidden'
      whileInView='visible'
      variants={variant || defaultVariants}
      viewport={{ once: true }}
      transition={{
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
      }}
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
//   },
//   defaultVariants: {
//     strength: "md",
//   },
// });

// type BlurVariantProps = VariantProps<typeof blurVariants>;

// interface BlurProps extends BlurVariantProps {
//   className?: string;
//   children: React.ReactNode;
//   variant?: MotionVariants;
//   duration?: number;
//   delay?: number;
//   direction?: "up" | "down" | "none";
// }

// // Helpers to build direction-aware variants
// function getVariants(direction: BlurProps["direction"]): MotionVariants {
//   switch (direction) {
//     case "up":
//       return {
//         hidden: { y: 20, opacity: 0, filter: "blur(6px)" },
//         visible: { y: 0, opacity: 1, filter: "blur(0px)" },
//       };
//     case "down":
//       return {
//         hidden: { y: -20, opacity: 0, filter: "blur(6px)" },
//         visible: { y: 0, opacity: 1, filter: "blur(0px)" },
//       };
//     default:
//       return {
//         hidden: { opacity: 0, filter: "blur(6px)" },
//         visible: { opacity: 1, filter: "blur(0px)" },
//       };
//   }
// }

// // For blocks (cards, sections, etc.)
// export function BlurItem({
//   className,
//   children,
//   variant,
//   duration = 0.4,
//   delay = 0.4,
//   strength,
//   direction = "up",
// }: BlurProps) {
//   const combinedVariants = variant || getVariants(direction);

//   return (
//     <motion.div
//       initial='hidden'
//       whileInView='visible'
//       variants={combinedVariants}
//       viewport={{ once: true, margin: "-50px" }}
//       transition={{
//         delay: 0.04 + delay,
//         duration,
//         ease: "easeOut",
//       }}
//       className={cn(blurVariants({ strength }), className)}
//     >
//       {children}
//     </motion.div>
//   );
// }

// // For inline text
// export function BlurText({
//   className,
//   children,
//   variant,
//   duration = 0.4,
//   delay = 0,
//   strength,
//   direction = "up",
// }: BlurProps) {
//   const combinedVariants = variant || getVariants(direction);

//   return (
//     <motion.span
//       initial='hidden'
//       whileInView='visible'
//       variants={combinedVariants}
//       viewport={{ once: true }}
//       transition={{
//         delay: 0.04 + delay,
//         duration,
//         ease: "easeOut",
//       }}
//       className={cn("inline-block", blurVariants({ strength }), className)}
//     >
//       {children}
//     </motion.span>
//   );
// }
