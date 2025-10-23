import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
  duration?: number;
  gap?: string;
  children: ReactNode;
}

function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex gap-(--gap) overflow-hidden p-2 [--duration:30s] [--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "flex shrink-0 justify-around gap-(--gap)",
            vertical
              ? "animate-marquee-vertical flex-col"
              : "animate-marquee flex-row",
            {
              "group-hover:paused": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            }
          )}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

export { Marquee };
