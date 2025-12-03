import type { Icon } from "@/types";

const CheckCircleIcon = ({
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
      <path d='m9 12 2 2 4-4' />
    </svg>
  );
};

export { CheckCircleIcon };
