import Link from "next/link";
import type { HyperLink } from "@/types";

interface LinkListProps {
  title: string;
  links: HyperLink[];
}

export function LinkList({ title, links }: LinkListProps) {
  return (
    <section>
      <h4 className='mb-6 text-sm font-medium'>{title}</h4>
      <ul>
        {links.map(({ href, label, external }) => (
          <li key={label} className='text-sm'>
            {external ? (
              <a
                href={href}
                aria-label={`${label} Page`}
                className='transition-color mb-4 inline-block hover:text-link'
                target='_blank'
                rel='noopener noreferrer'
              >
                {label}
              </a>
            ) : (
              <Link
                href={href}
                aria-label={`${label} Page`}
                className='transition-color mb-4 inline-block hover:text-link'
              >
                {label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
