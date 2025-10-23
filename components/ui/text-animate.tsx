"use client";

import { memo, useRef, type ElementType } from "react";
import {
  motion,
  AnimatePresence,
  MotionProps,
  Variants,
  useInView,
} from "motion/react";
import { cn } from "@/lib/utils";

// We pre-cache the most common motion components outside the render scope.
type NativeMotionElement = "p" | "div" | "h1" | "h2" | "h3" | "span" | "a";

// Statically declare motion components for common HTML elements.
// This ensures that the component being rendered is ALWAYS static and predefined.
const staticMotionComponents: Partial<
  Record<NativeMotionElement, ElementType>
> = {
  p: motion.create("p"),
  div: motion.create("div"),
  h1: motion.create("h1"),
  h2: motion.create("h2"),
  h3: motion.create("h3"),
  span: motion.create("span"),
  a: motion.create("a"),
};

// Fallback component type for safety (e.g., if 'as' is a custom React component)
const FallbackMotionComponent = motion.create("div");

type AnimationType = "text" | "word" | "character" | "line";

type AnimationVariant =
  | "fadeIn"
  | "blurIn"
  | "blurInUp"
  | "blurInDown"
  | "slideUp"
  | "slideDown"
  | "slideLeft"
  | "slideRight"
  | "scaleUp"
  | "scaleDown";

interface TextAnimateProps extends MotionProps {
  children: string;
  className?: string;
  segmentClassName?: string;
  delay?: number;
  duration?: number;
  variants?: Variants;
  as?: ElementType;
  by?: AnimationType;
  startOnView?: boolean;
  once?: boolean;
  animation?: AnimationVariant;
  accessible?: boolean;
}

const staggerTimings: Record<AnimationType, number> = {
  text: 0.06,
  word: 0.05,
  character: 0.03,
  line: 0.06,
};

const defaultContainerVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0, staggerChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const defaultItemVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  exit: { opacity: 0 },
};

const defaultItemAnimationVariants: Record<
  AnimationVariant,
  { container: Variants; item: Variants }
> = {
  fadeIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0, transition: { duration: 0.3 } },
      exit: { opacity: 0, y: 20, transition: { duration: 0.3 } },
    },
  },
  blurIn: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)" },
      show: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.3 } },
      exit: { opacity: 0, filter: "blur(10px)", transition: { duration: 0.3 } },
    },
  },
  blurInUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)", y: 20 },
      show: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          y: { duration: 0.3 },
          opacity: { duration: 0.4 },
          filter: { duration: 0.3 },
        },
      },
      exit: {
        opacity: 0,
        filter: "blur(10px)",
        y: 20,
        transition: {
          y: { duration: 0.3 },
          opacity: { duration: 0.4 },
          filter: { duration: 0.3 },
        },
      },
    },
  },
  blurInDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, filter: "blur(10px)", y: -20 },
      show: {
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        transition: {
          y: { duration: 0.3 },
          opacity: { duration: 0.4 },
          filter: { duration: 0.3 },
        },
      },
      exit: {
        opacity: 0,
        filter: "blur(10px)",
        y: -20,
        transition: {
          y: { duration: 0.3 },
          opacity: { duration: 0.4 },
          filter: { duration: 0.3 },
        },
      },
    },
  },
  slideUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { y: 20, opacity: 0 },
      show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
      exit: { y: -20, opacity: 0, transition: { duration: 0.3 } },
    },
  },
  slideDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { y: -20, opacity: 0 },
      show: { y: 0, opacity: 1, transition: { duration: 0.3 } },
      exit: { y: 20, opacity: 0, transition: { duration: 0.3 } },
    },
  },
  slideLeft: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: 20, opacity: 0 },
      show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
      exit: { x: -20, opacity: 0, transition: { duration: 0.3 } },
    },
  },
  slideRight: {
    container: defaultContainerVariants,
    item: {
      hidden: { x: -20, opacity: 0 },
      show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
      exit: { x: 20, opacity: 0, transition: { duration: 0.3 } },
    },
  },
  scaleUp: {
    container: defaultContainerVariants,
    item: {
      hidden: { scale: 0.5, opacity: 0 },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.3,
          scale: { type: "spring", damping: 15, stiffness: 300 },
        },
      },
      exit: { scale: 0.5, opacity: 0, transition: { duration: 0.3 } },
    },
  },
  scaleDown: {
    container: defaultContainerVariants,
    item: {
      hidden: { scale: 1.5, opacity: 0 },
      show: {
        scale: 1,
        opacity: 1,
        transition: {
          duration: 0.3,
          scale: { type: "spring", damping: 15, stiffness: 300 },
        },
      },
      exit: { scale: 1.5, opacity: 0, transition: { duration: 0.3 } },
    },
  },
};

interface MotionWrapperProps extends MotionProps {
  as: ElementType;
  children: React.ReactNode;
  className?: string;
}

// Named static function for 'display-name'
function MotionWrapper({
  as: Component,
  children,
  ...props
}: MotionWrapperProps) {
  // Determine the component to use by checking the static cache.
  // If the Component prop is a string (native element), use the pre-cached motion component.
  // Otherwise (if it's a custom React component or an unrecognized string), fall back to a safe motion.div.
  const FinalMotionComponent =
    typeof Component === "string" &&
    staticMotionComponents[Component as NativeMotionElement]
      ? staticMotionComponents[Component as NativeMotionElement]!
      : FallbackMotionComponent;

  return <FinalMotionComponent {...props}>{children}</FinalMotionComponent>;
}

// Memoize the NAMED component
const MotionComponentWrapper = memo(MotionWrapper);

const TextAnimateBase = ({
  children,
  delay = 0,
  duration = 0.3,
  variants,
  className,
  segmentClassName,
  as: Component = "p",
  by = "word",
  animation = "fadeIn",
  accessible = true,
  startOnView = true,
  once = true,
  ...props
}: TextAnimateProps) => {
  let segments: string[] = [];
  switch (by) {
    case "word":
      segments = children.split(/(\s+)/);
      break;
    case "character":
      segments = children.split("");
      break;
    case "line":
      segments = children.split("\n");
      break;
    default:
      segments = [children];
  }

  // Determine variants
  const finalVariants = variants
    ? {
        container: {
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              opacity: { duration: 0.01, delay },
              delayChildren: delay,
              staggerChildren: duration / segments.length,
            },
          },
          exit: {
            opacity: 0,
            transition: {
              staggerChildren: duration / segments.length,
              staggerDirection: -1,
            },
          },
        },
        item: variants,
      }
    : {
        container: {
          ...defaultItemAnimationVariants[animation].container,
          show: {
            ...defaultItemAnimationVariants[animation].container.show,
            transition: {
              delayChildren: delay,
              staggerChildren: duration / segments.length,
            },
          },
          exit: {
            ...defaultItemAnimationVariants[animation].container.exit,
            transition: {
              staggerChildren: duration / segments.length,
              staggerDirection: -1,
            },
          },
        },
        item: defaultItemAnimationVariants[animation].item,
      };

  const wrapperRef = useRef(null);
  const isInView = useInView(wrapperRef, { once });

  return (
    <div ref={wrapperRef}>
      <AnimatePresence mode='popLayout'>
        {/* Render the static wrapper component, passing 'as' as a prop */}
        <MotionComponentWrapper
          as={Component}
          variants={finalVariants.container as Variants}
          initial='hidden'
          animate={
            startOnView && isInView ? "show" : startOnView ? "hidden" : "show"
          }
          exit='exit'
          className={cn("whitespace-pre-wrap", className)}
          aria-label={accessible ? children : undefined}
          {...props}
        >
          {accessible && <span className='sr-only'>{children}</span>}
          {segments.map((segment, i) => (
            <motion.span
              key={`${by}-${segment}-${i}`}
              variants={finalVariants.item}
              custom={i * staggerTimings[by]}
              className={cn(
                by === "line" ? "block" : "inline-block whitespace-pre",
                segmentClassName
              )}
              aria-hidden={accessible ? true : undefined}
            >
              {segment}
            </motion.span>
          ))}
        </MotionComponentWrapper>
      </AnimatePresence>
    </div>
  );
};

export const TextAnimate = memo(TextAnimateBase);
