import { SpotifyColored } from "@/components/icons";

export function SpotifyNMockPlaying() {
  return (
    <div className='flex flex-col text-white/80'>
      <SpotifyColored className='z-10 size-8' />
      <a
        href='#'
        className='group flex w-full max-w-sm flex-1 flex-row md:max-w-lg lg:max-w-none'
      >
        <p className='mt-[-8] pl-7 text-sm tracking-tight whitespace-normal'>
          Currently listening to{" "}
          <span className='font-medium transition-all group-hover:text-green-500'>
            &quot;This is simply mock data right now&quot;
          </span>{" "}
          by <span className='font-medium'>Dr. Mock & The Data</span>.
        </p>
      </a>
    </div>
  );
}
