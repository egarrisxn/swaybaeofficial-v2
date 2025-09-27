"use client";

import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useMotionValue,
  useTransform,
  useInView,
} from "motion/react";

import { cn } from "@/lib/utils";

interface StatItem {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
}

interface StatsCountProps {
  stats?: StatItem[];
  title?: string;
  showDividers?: boolean;
  className?: string;
}

const defaultStats: StatItem[] = [
  {
    value: 50,
    suffix: "+",
    label: "Handcrafted animated components",
    duration: 5,
  },
  {
    value: 12,
    suffix: "K+",
    label: "Developers building with ScrollX-UI",
    duration: 6,
  },
  {
    value: 99,
    suffix: "%",
    label: "Performance optimized for web",
    duration: 5.5,
  },
];

const defaultTitle = "CREATE STUNNING INTERFACES WITH SCROLLX-UI COMPONENTS";

function AnimatedCounter({
  value,
  suffix = "",
  duration = 1,
  delay = 0,
  label,
}: {
  value: number;
  suffix?: string;
  duration?: number;
  delay?: number;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50px" });

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) =>
    Number(latest.toFixed(value % 1 === 0 ? 0 : 1))
  );

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      setDisplayValue(latest);
    });
    return () => unsubscribe();
  }, [rounded]);

  useEffect(() => {
    let controls: ReturnType<typeof animate> | null = null;
    let timeout: NodeJS.Timeout;

    if (isInView) {
      motionValue.set(0);
      timeout = setTimeout(() => {
        controls = animate(motionValue, value, {
          duration, // ✅ now controls speed
          ease: "easeOut",
        });
      }, delay * 300);
    } else {
      motionValue.set(0);
    }

    return () => {
      clearTimeout(timeout);
      controls?.stop();
    };
  }, [isInView, value, motionValue, delay, duration]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.8,
        delay: delay * 0.2,
        type: "spring",
        stiffness: 80,
      }}
      className={cn(
        "flex h-full min-w-0 flex-1 flex-col justify-center text-center"
      )}
    >
      <motion.div
        className={cn(
          "mb-2 text-2xl font-bold whitespace-nowrap sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl"
        )}
        initial={{ scale: 0.8 }}
        animate={isInView ? { scale: 1 } : { scale: 0.8 }}
        transition={{
          duration: 0.6,
          delay: delay * 0.2 + 0.3,
          type: "spring",
          stiffness: 100,
        }}
      >
        {displayValue}
        {suffix}
      </motion.div>
      <motion.p
        className={cn(
          "px-1 text-xs leading-relaxed break-words hyphens-auto text-gray-600 sm:px-2 sm:text-sm dark:text-gray-400"
        )}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: delay * 0.2 + 0.6, duration: 0.6 }}
      >
        {label}
      </motion.p>
    </motion.div>
  );
}

export default function StatsCount({
  stats = defaultStats,
  title = defaultTitle,
  showDividers = true,
  className = "",
}: StatsCountProps) {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { margin: "-100px" });

  return (
    <motion.section
      ref={containerRef}
      className={cn(
        "w-full overflow-hidden px-2 py-8 sm:px-4 sm:py-12 md:px-8 lg:py-20",
        className
      )}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className={cn("mb-8 text-center sm:mb-12 lg:mb-16")}
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2
          className={cn(
            "leading-snug font-medium tracking-tight text-black lg:text-lg xl:text-xl 3xl:text-2xl dark:text-white"
            // "px-4 text-sm font-medium tracking-wide sm:text-base md:text-lg lg:text-xl"
          )}
        >
          <span className='hidden sm:inline'>
            {title.includes("WITH") ? (
              <>
                {title.split("WITH")[0]}WITH{" "}
                <span
                  className={cn(
                    "font-semibold text-blue-600 dark:text-blue-400"
                  )}
                >
                  {title.split("WITH")[1]}
                </span>
              </>
            ) : (
              title
            )}
          </span>
          <div
            className={cn("flex flex-col items-center leading-tight sm:hidden")}
          >
            {title.includes("WITH") ? (
              <>
                <span>{title.split("WITH")[0].trim()}</span>
                <span className={cn("text-center")}>WITH</span>
                <span
                  className={cn(
                    "font-semibold text-blue-600 dark:text-blue-400"
                  )}
                >
                  {title.split("WITH")[1].trim()}
                </span>
              </>
            ) : (
              <span>{title}</span>
            )}
          </div>
        </h2>
      </motion.div>

      <div className={cn("mx-auto w-full max-w-6xl")}>
        <div
          className={cn(
            "flex min-h-[120px] w-full flex-row items-stretch justify-between gap-2 sm:min-h-[140px] sm:gap-4 lg:gap-8"
          )}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className={cn(
                "relative flex h-full min-w-0 flex-1 flex-col justify-center"
              )}
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                duration={stat.duration}
                delay={index}
                label={stat.label}
              />
              {index < stats.length - 1 && showDividers && (
                <motion.div
                  className={cn(
                    "absolute top-1/2 -right-1 h-12 w-px -translate-y-1/2 transform bg-gray-200 sm:-right-2 sm:h-16 lg:-right-4 lg:h-20 dark:bg-gray-700"
                  )}
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={
                    isInView
                      ? { opacity: 1, scaleY: 1 }
                      : { opacity: 0, scaleY: 0 }
                  }
                  transition={{ delay: 1.5 + index * 0.2, duration: 0.6 }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
