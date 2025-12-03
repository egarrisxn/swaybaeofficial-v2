import type { Icon } from "@/types";

const PlayIcon = ({
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
      <path d='m6 3l14 9l-14 9z'></path>
    </svg>
  );
};

export { PlayIcon };
