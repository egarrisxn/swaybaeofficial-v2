import type { Icon } from "@/types";

const ChevronDownIcon = ({
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
      <path d='M7.41 8.58L12 13.17l4.59-4.59L18 10l-6 6l-6-6z'></path>
    </svg>
  );
};

export { ChevronDownIcon };
