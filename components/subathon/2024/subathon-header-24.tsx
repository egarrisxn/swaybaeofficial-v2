import { CalendarDaysIcon, TwitchIcon } from "@/components/icons";

export function SubathonHeader24() {
  return (
    <div className='mx-auto flex w-full max-w-5xl flex-col gap-4 px-4 pt-8 pb-12 text-center sm:gap-6 sm:pb-16'>
      <h1 className='bg-linear-to-r from-purple-500 to-pink-500 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-8xl'>
        {`Sway's Subtember Subathon 2024`}
      </h1>
      <p className='mx-auto w-full max-w-2xl px-12 pb-2 text-sm text-gray-700 sm:text-base lg:text-2xl dark:text-gray-300'>
        Thank you for 10 days of excitement, surprises, and unforgettable
        moments with The Bae Squad!
      </p>
      <div className='flex flex-col items-center gap-4 text-sm sm:flex-row sm:justify-center sm:text-base'>
        <div className='flex items-center gap-2'>
          <CalendarDaysIcon className='size-5 text-purple-600 sm:size-6 dark:text-pink-400' />
          <span className='text-gray-800 dark:text-gray-200'>
            Dec. 23rd, 2024 - Jan. 1st, 2025
          </span>
        </div>
        <a
          href='https://www.twitch.tv/sway_bae'
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center gap-2 text-purple-700 hover:underline dark:text-pink-400'
        >
          <TwitchIcon className='size-5 sm:size-6' />
          <span>My Twitch Page</span>
        </a>
      </div>
    </div>
  );
}
