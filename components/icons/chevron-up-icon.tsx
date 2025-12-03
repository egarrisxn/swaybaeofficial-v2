import type { Icon } from "@/types";

const ChevronUpIcon = ({
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
      strokeWidth={strokeWidth}
      width={width}
      height={height}
      className={className}
    >
      <path d='m18 15-6-6-6 6' />
    </svg>
  );
};

export { ChevronUpIcon };
