import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

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
        basic: "text-link",
        neomorph:
          "border-2 bg-white text-black uppercase leading-relaxed active:translate-x-[0.07rem] active:translate-y-[0.07rem] shadow-[3px_3.5px_0px_#0f0f0f] hover:shadow-[1px_1px_0px_black,-1.5px_-1.5px_0px_#0f0f0f] active:shadow-[0px_0px_0px_#0f0f0f] dark:shadow-[2px_3px_0px_#fafafa] dark:hover:shadow-[1px_1.5px_0px_#fafafa] dark:active:shadow-[0px_0px_0px_#fafafa]",

        light:
          "bg-linear-to-b from-[#f9f9f9] to-[#e5e2e2] text-slate-900/90 hover:text-slate-900 hover:bg-top-right " +
          "shadow-(--shadow-btn-light) hover:shadow-(--shadow-btn-light-hover) active:shadow-(--shadow-btn-light-active) " +
          "dark:shadow-(--shadow-btn-light-dark) dark:hover:shadow-(--shadow-btn-light-dark-hover) dark:active:shadow-(--shadow-btn-light-dark-active)",

        dark:
          "bg-linear-to-b from-[#232326] to-[#353538] text-slate-100/90 hover:text-slate-100 hover:bg-top-right " +
          "shadow-(--shadow-btn-dark) hover:shadow-(--shadow-btn-dark-hover) active:shadow-(--shadow-btn-dark-active)",

        blue:
          "bg-linear-to-b from-[#00f0ff] to-[#00ffea] hover:bg-top-right " +
          "shadow-(--shadow-btn-blue) hover:shadow-(--shadow-btn-blue-hover) active:shadow-(--shadow-btn-blue-active) " +
          "dark:shadow-(--shadow-btn-blue-dark) dark:hover:shadow-(--shadow-btn-blue-dark-hover) dark:active:shadow-(--shadow-btn-blue-dark-active)",

        pink:
          "bg-linear-to-b from-[#ff00ff] to-[#ff00dd] hover:bg-top-right " +
          "shadow-(--shadow-btn-pink) hover:shadow-(--shadow-btn-pink-hover) active:shadow-(--shadow-btn-pink-active) " +
          "dark:shadow-(--shadow-btn-pink-dark) dark:hover:shadow-(--shadow-btn-pink-dark-hover) dark:active:shadow-(--shadow-btn-pink-dark-active)",

        contrast:
          "bg-linear-to-b from-[#232326] to-[#353538] text-slate-100/90 hover:text-slate-100 " +
          "shadow-(--shadow-btn-dark) hover:shadow-(--shadow-btn-dark-hover) active:shadow-(--shadow-btn-dark-active) " +
          "dark:bg-linear-to-b dark:from-[#f9f9f9] dark:to-[#e5e2e2] dark:text-slate-900/90 dark:hover:text-slate-900 " +
          "dark:shadow-(--shadow-btn-light-dark) dark:hover:shadow-(--shadow-btn-light-dark-hover) dark:active:shadow-(--shadow-btn-light-dark-active)",
      },
      size: {
        default: "h-9 text-sm px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 text-xs gap-1.5 px-3 has-[>svg]:px-2.5",
        md: "h-9.5 text-sm px-5 py-3 has-[>svg]:px-3.5",
        lg: "h-10 text-base px-6 has-[>svg]:px-4",
        xl: "h-12 text-base px-9 has-[>svg]:px-5",
        icon: "size-9",
        dynamic:
          "h-9 px-4 py-2 text-sm xl:h-10 xl:px-6 xl:text-base has-[>svg]:px-3 xl:has-[>svg]:px-4 ",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type ButtonProps = React.ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        data-slot='button'
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
