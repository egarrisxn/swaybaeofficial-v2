import type { Icon } from "@/types";

const TwitchIcon = ({ className = "", width = "24", height = "24" }: Icon) => {
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
      <title>Twitch</title>
      <path d='M21 2H3v16h5v4l4-4h5l4-4zm-10 9V7m5 4V7'></path>
    </svg>
  );
};

export { TwitchIcon };
