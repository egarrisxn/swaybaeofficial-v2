import type { Icon } from "@/types";

const LoaderIcon = ({
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
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
    >
      <path d='M21 12a9 9 0 1 1-6.219-8.56' />
    </svg>
  );
};

export { LoaderIcon };
