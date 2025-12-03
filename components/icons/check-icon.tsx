import type { Icon } from "@/types";

const CheckIcon = ({
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
      <path d='M20 6 9 17l-5-5' />
    </svg>
  );
};

export { CheckIcon };
