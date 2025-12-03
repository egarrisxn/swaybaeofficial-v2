import type { Icon } from "@/types";

const ArrowUpIcon = ({
  className = "",
  width = "24",
  height = "24",
  strokeWidth = "2",
}: Icon) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
      width={width}
      height={height}
      className={className}
    >
      <path d='M12 5v14m6-8l-6-6m-6 6l6-6'></path>
    </svg>
  );
};

export { ArrowUpIcon };
