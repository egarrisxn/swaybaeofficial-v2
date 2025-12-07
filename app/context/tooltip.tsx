"use client";

import type { PropsWithChildren, ComponentProps } from "react";
import { Provider } from "@radix-ui/react-tooltip";

export function TooltipProvider({
  delayDuration = 0,
  children,
  ...props
}: PropsWithChildren<ComponentProps<typeof Provider>>) {
  return (
    <Provider
      data-slot='tooltip-provider'
      delayDuration={delayDuration}
      {...props}
    >
      {children}
    </Provider>
  );
}
