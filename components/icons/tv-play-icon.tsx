import type { Icon } from "@/types";

const TvPlayIcon = ({
  className = "",
  width = "24",
  height = "24",
  strokeWidth = "2",
}: Icon) => {
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
      <path d='M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z' />
      <path d='M7 21h10' />
      <rect width='20' height='14' x='2' y='3' rx='2' />
    </svg>
  );
};

export { TvPlayIcon };
