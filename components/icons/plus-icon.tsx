import type { Icon } from "@/types";

const PlusIcon = ({
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
      <path d='M12 5v14m-7-7h14'></path>
    </svg>
  );
};

export { PlusIcon };
