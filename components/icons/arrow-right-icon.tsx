import type { Icon } from "@/types";

const ArrowRightIcon = ({
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
      <path d='M5 12h14m-6 6l6-6m-6-6l6 6'></path>
    </svg>
  );
};

export { ArrowRightIcon };
