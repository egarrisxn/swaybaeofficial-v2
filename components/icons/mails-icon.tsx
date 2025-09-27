import type { Icons } from "@/types";

const MailsIcon = ({
  className = "",
  width = "24",
  height = "24",
  strokeWidth = "2",
}: Icons) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      viewBox='0 0 24 24'
      className={className}
      fill='none'
      stroke='currentColor'
      strokeWidth={strokeWidth}
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M17 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 1-1.732' />
      <path d='m22 5.5-6.419 4.179a2 2 0 0 1-2.162 0L7 5.5' />
      <rect x='7' y='3' width='15' height='12' rx='2' />
    </svg>
  );
};

export { MailsIcon };
