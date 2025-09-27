import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const shadows = {
  light: {
    base: "inset_-4px_-4px_6px_rgba(255,255,255,0.7),inset_0px_1px_2px_rgba(220,220,220,0.6),inset_4px_-4px_6px_rgba(240,240,240,0.6),0px_4px_12px_rgba(200,200,200,0.25),inset_0px_2px_3px_rgba(230,230,230,0.5),inset_0px_3px_6px_rgba(180,180,180,0.35)",
    hover:
      "inset_-3px_-3px_4px_rgba(255,255,255,0.75),inset_0px_1px_2px_rgba(220,220,220,0.65),inset_3px_-3px_4px_rgba(240,240,240,0.65),0px_3px_10px_rgba(200,200,200,0.3),inset_0px_2px_3px_rgba(230,230,230,0.55),inset_0px_3px_6px_rgba(180,180,180,0.4)",
    active:
      "inset_-2px_-2px_2px_rgba(255,255,255,0.6),inset_0px_1px_2px_rgba(220,220,220,0.5),inset_2px_-2px_2px_rgba(240,240,240,0.6),0px_2px_6px_rgba(200,200,200,0.2),inset_0px_2px_3px_rgba(230,230,230,0.5),inset_0px_3px_6px_rgba(180,180,180,0.35)",
    dark: "inset_-3px_-4px_6px_rgba(0,0,0,0.6),inset_0px_1px_2px_rgba(20,20,20,0.6),inset_3px_-4px_6px_rgba(50,50,50,0.5),0px_4px_12px_rgba(0,0,0,0.25),inset_0px_2px_3px_rgba(30,30,30,0.5),inset_0px_3px_6px_rgba(60,60,60,0.35)",
    darkHover:
      "inset_-3px_-3px_4px_rgba(0,0,0,0.65),inset_0px_1px_2px_rgba(20,20,20,0.65),inset_3px_-3px_4px_rgba(50,50,50,0.55),0px_3px_10px_rgba(0,0,0,0.3),inset_0px_2px_3px_rgba(30,30,30,0.55),inset_0px_3px_6px_rgba(60,60,60,0.4)",
    darkActive:
      "inset_-2px_-2px_2px_rgba(0,0,0,0.5),inset_0px_1px_2px_rgba(20,20,20,0.55),inset_2px_-2px_2px_rgba(50,50,50,0.5),0px_2px_6px_rgba(0,0,0,0.2),inset_0px_2px_3px_rgba(30,30,30,0.5),inset_0px_3px_6px_rgba(60,60,60,0.35)",
  },
  dark: {
    base: "inset_-4px_-4px_4px_rgba(0,0,16,0.2),inset_0px_1px_2px_rgba(0,0,16,0.7),inset_4px_-4px_4px_rgba(0,0,16,0.2),0px_4px_10px_rgba(0,0,16,0.16),inset_0px_2px_3px_rgba(0,0,16,0.2),inset_0px_3px_6px_rgba(255,255,255,0.32)",
    hover:
      "inset_-2px_-2px_3px_rgba(0,0,16,0.25),inset_0px_1px_2px_rgba(0,0,16,0.7),inset_2px_-2px_3px_rgba(0,0,16,0.25),0px_3px_8px_rgba(0,0,16,0.2),inset_0px_2px_3px_rgba(0,0,16,0.25),inset_0px_3px_6px_rgba(255,255,255,0.3)",
    active:
      "inset_-2px_-2px_2px_rgba(0,0,16,0.2),inset_0px_1px_2px_rgba(0,0,16,0.6),inset_2px_-2px_2px_rgba(0,0,16,0.2),0px_2px_5px_rgba(0,0,16,0.16),inset_0px_2px_3px_rgba(0,0,16,0.2),inset_0px_3px_6px_rgba(255,255,255,0.25)",
  },
  blue: {
    base: "inset_-4px_-4px_6px_rgba(0,160,255,0.6),inset_0px_1px_2px_rgba(0,128,255,0.35),inset_4px_-4px_6px_rgba(0,200,255,0.5),0px_4px_12px_rgba(0,160,255,0.25),inset_0px_2px_3px_rgba(0,160,255,0.35),inset_0px_3px_6px_rgba(0,128,200,0.4)",
    hover:
      "inset_-3px_-3px_4px_rgba(0,160,255,0.65),inset_0px_1px_2px_rgba(0,128,255,0.4),inset_3px_-3px_4px_rgba(0,200,255,0.55),0px_3px_10px_rgba(0,160,255,0.3),inset_0px_2px_3px_rgba(0,160,255,0.4),inset_0px_3px_6px_rgba(0,128,200,0.45)",
    active:
      "inset_-2px_-2px_2px_rgba(0,160,255,0.5),inset_0px_1px_2px_rgba(0,128,255,0.35),inset_2px_-2px_2px_rgba(0,200,255,0.5),0px_2px_6px_rgba(0,160,255,0.2),inset_0px_2px_3px_rgba(0,160,255,0.35),inset_0px_3px_6px_rgba(0,128,200,0.4)",
    dark: "inset_-4px_-4px_6px_rgba(0,20,40,0.6),inset_0px_1px_2px_rgba(0,40,80,0.4),inset_4px_-4px_6px_rgba(0,60,120,0.5),0px_4px_12px_rgba(0,20,40,0.25),inset_0px_2px_3px_rgba(0,30,60,0.35),inset_0px_3px_6px_rgba(0,25,50,0.35)",
    darkHover:
      "inset_-3px_-3px_4px_rgba(0,20,40,0.65),inset_0px_1px_2px_rgba(0,40,80,0.45),inset_3px_-3px_4px_rgba(0,60,120,0.55),0px_3px_10px_rgba(0,20,40,0.3),inset_0px_2px_3px_rgba(0,30,60,0.4),inset_0px_3px_6px_rgba(0,25,50,0.4)",
    darkActive:
      "inset_-2px_-2px_2px_rgba(0,20,40,0.5),inset_0px_1px_2px_rgba(0,40,80,0.4),inset_2px_-2px_2px_rgba(0,60,120,0.5),0px_2px_6px_rgba(0,20,40,0.2),inset_0px_2px_3px_rgba(0,30,60,0.35),inset_0px_3px_6px_rgba(0,25,50,0.35)",
  },
  pink: {
    base: "inset_-4px_-4px_6px_rgba(255,0,255,0.6),inset_0px_1px_2px_rgba(200,0,200,0.35),inset_4px_-4px_6px_rgba(255,64,255,0.5),0px_4px_12px_rgba(255,0,255,0.25),inset_0px_2px_3px_rgba(255,0,255,0.35),inset_0px_3px_6px_rgba(200,0,200,0.4)",
    hover:
      "inset_-3px_-3px_4px_rgba(255,0,255,0.65),inset_0px_1px_2px_rgba(200,0,200,0.4),inset_3px_-3px_4px_rgba(255,64,255,0.55),0px_3px_10px_rgba(255,0,255,0.3),inset_0px_2px_3px_rgba(255,0,255,0.4),inset_0px_3px_6px_rgba(200,0,200,0.45)",
    active:
      "inset_-2px_-2px_2px_rgba(255,0,255,0.5),inset_0px_1px_2px_rgba(200,0,200,0.35),inset_2px_-2px_2px_rgba(255,64,255,0.5),0px_2px_6px_rgba(255,0,255,0.2),inset_0px_2px_3px_rgba(255,0,255,0.35),inset_0px_3px_6px_rgba(200,0,200,0.4)",
    dark: "inset_-4px_-4px_6px_rgba(50,0,50,0.6),inset_0px_1px_2px_rgba(80,0,80,0.4),inset_4px_-4px_6px_rgba(120,0,120,0.5),0px_4px_12px_rgba(50,0,50,0.25),inset_0px_2px_3px_rgba(70,0,70,0.35),inset_0px_3px_6px_rgba(40,0,40,0.35)",
    darkHover:
      "inset_-3px_-3px_4px_rgba(50,0,50,0.65),inset_0px_1px_2px_rgba(80,0,80,0.45),inset_3px_-3px_4px_rgba(120,0,120,0.55),0px_3px_10px_rgba(50,0,50,0.3),inset_0px_2px_3px_rgba(70,0,70,0.4),inset_0px_3px_6px_rgba(40,0,40,0.4)",
    darkActive:
      "inset_-2px_-2px_2px_rgba(50,0,50,0.5),inset_0px_1px_2px_rgba(80,0,80,0.4),inset_2px_-2px_2px_rgba(120,0,120,0.5),0px_2px_6px_rgba(50,0,50,0.2),inset_0px_2px_3px_rgba(70,0,70,0.35),inset_0px_3px_6px_rgba(40,0,40,0.35)",
  },
};

const buttonVariants = cva(
  "inline-flex items-center justify-center cursor-pointer gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary/80 text-primary-foreground hover:bg-primary/90 border border-primary border-b-2 border-b-primary/90 shadow-md",
        secondary:
          "bg-secondary/80 text-secondary-foreground hover:bg-secondary/90 border border-secondary border-b-2 border-b-secondary/90 shadow-md",
        outline:
          "bg-muted/10 hover:bg-muted/20 dark:bg-muted/40 dark:hover:bg-muted/50 border border-border border-b-2 border-b-border/90 shadow-xs",
        ghost:
          "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        link: "text-link underline-offset-4 hover:underline",
        basic: "text-link ",
        neomorph:
          "border-2  bg-white text-black uppercase leading-relaxed active:translate-x-[0.07rem] active:translate-y-[0.07rem] shadow-[3px_3.5px_0px_#0f0f0f] hover:shadow-[1px_1px_0px_black,-1.5px_-1.5px_0px_#0f0f0f] active:shadow-[0px_0px_0px_#0f0f0f] dark:shadow-[2px_3px_0px_#fafafa] dark:hover:shadow-[1px_1.5px_0px_#fafafa] dark:active:shadow-[0px_0px_0px_#fafafa]",
        light: `bg-linear-to-b from-[#f9f9f9] to-[#e5e2e2] text-slate-900/90 hover:text-slate-900 shadow-[${shadows.light.base}] hover:bg-[right_top]  hover:shadow-[${shadows.light.hover}] active:shadow-[${shadows.light.active}] dark:shadow-[${shadows.light.dark}] dark:hover:shadow-[${shadows.light.darkHover}] dark:active:shadow-[${shadows.light.darkActive}]`,
        dark: `bg-linear-to-b from-[#232326] to-[#353538] text-slate-100/90 hover:text-slate-100 shadow-[${shadows.dark.base}] hover:bg-[right_top] hover:shadow-[${shadows.dark.hover}] active:shadow-[${shadows.dark.active}]`,
        blue: `bg-linear-to-b from-[#00f0ff] to-[#00ffea] text-slate-800/90 hover:text-slate-800 shadow-[${shadows.blue.base}] hover:bg-[right_top] hover:shadow-[${shadows.blue.hover}] active:shadow-[${shadows.blue.active}] dark:shadow-[${shadows.blue.dark}] dark:hover:shadow-[${shadows.blue.darkHover}] dark:active:shadow-[${shadows.blue.darkActive}]`,
        pink: `bg-linear-to-b from-[#ff00ff] to-[#ff00dd] text-slate-900/90 hover:text-slate-900 dark:text-slate-100/90 hover:bg-[right_top] dark:hover:text-slate-100 shadow-[${shadows.pink.base}] hover:shadow-[${shadows.pink.hover}] active:shadow-[${shadows.pink.active}] dark:shadow-[${shadows.pink.dark}] dark:hover:shadow-[${shadows.pink.darkHover}] dark:active:shadow-[${shadows.pink.darkActive}]`,
        contrast: `bg-gradient-to-b from-[#232326] to-[#353538] text-slate-100/90 hover:text-slate-100 shadow-[${shadows.dark.base}] hover:shadow-[${shadows.dark.hover}] active:shadow-[${shadows.dark.active}] dark:bg-gradient-to-b dark:from-[#f9f9f9] dark:to-[#e5e2e2] dark:text-slate-900/90 dark:hover:text-slate-900 dark:shadow-[${shadows.light.dark}] dark:hover:shadow-[${shadows.light.darkHover}] dark:active:shadow-[${shadows.light.darkActive}]`,
      },
      size: {
        default: "h-9 text-sm px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 text-xs gap-1.5 px-3 has-[>svg]:px-2.5",
        md: "h-9.5 text-sm px-5 py-3 has-[>svg]:px-3.5",
        lg: "h-10 text-base px-6 has-[>svg]:px-4",
        xl: "h-12 text-base px-9 has-[>svg]:px-5",
        icon: "size-9",
        dynamic:
          "h-9 px-4 py-2 text-sm md:h-11 md:px-7.5 md:text-base has-[>svg]:px-3 md:has-[>svg]:px-4.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
