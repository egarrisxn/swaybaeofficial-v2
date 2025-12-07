import type { Icon } from "@/types";

const InstagramIcon = ({
  className = "",
  width = "24",
  height = "24",
}: Icon) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
      width={width}
      height={height}
      className={className}
    >
      <title>Instagram</title>
      <g fill='none'>
        <rect width={17} height={17} x={3.5} y={3.5} rx={5.5}></rect>
        <circle cx={12} cy={12} r={3.606}></circle>
        <circle cx={16.894} cy={7.106} r={1.03}></circle>
      </g>
    </svg>
  );
};

export { InstagramIcon };
