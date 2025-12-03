import type { Icon } from "@/types";

const CircleIcon = ({
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
      <circle cx='12' cy='12' r='10' />
    </svg>
  );
};

export { CircleIcon };
