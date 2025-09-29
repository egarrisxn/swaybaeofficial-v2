import Link from "next/link";

import type { Links } from "@/types";

export function LinkRenderer({ href, label, external }: Links) {
  if (external) {
    return (
      <a
        href={href}
        className='flex items-center transition-colors hover:text-link'
        target='_blank'
        rel='noopener noreferrer'
        aria-label={label}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      href={href}
      className='flex items-center transition-colors hover:text-link'
      aria-label={label}
    >
      {label}
    </Link>
  );
}
