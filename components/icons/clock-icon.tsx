import type { Icon } from "@/types";

const ClockIcon = ({
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
      <path d='M12 6v6l4 2' />
      <circle cx='12' cy='12' r='10' />
    </svg>
  );
};

export { ClockIcon };
