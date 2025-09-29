import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import type { Socials } from "@/types";

export function TooltipSocialIcon({ title, href, Icon, className }: Socials) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a href={href} aria-label={title}>
          <Icon className={`${className} `} />
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>{title}</p>
      </TooltipContent>
    </Tooltip>
  );
}
