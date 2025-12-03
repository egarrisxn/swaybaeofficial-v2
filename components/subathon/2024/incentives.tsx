import { Card } from "@/components/ui/card";
import { TrophyIcon, ArrowRightIcon } from "@/components/icons";

export function Incentives() {
  return (
    <Card className='flex h-fit w-full flex-col gap-6 bg-linear-to-l from-purple-500 via-pink-500 to-blue-500 py-6'>
      <div className='flex flex-col gap-6 p-0'>
        <div className='bg-w2b space-y-3 rounded-md px-3 md:px-4 2xl:px-6'>
          <div className='flex items-center gap-1.5 lg:gap-2'>
            <TrophyIcon className='size-4 lg:size-5' />
            <h4 className='text-lg leading-tight font-semibold sm:text-lg md:text-base lg:text-2xl'>
              Top Contributors
            </h4>
            <ArrowRightIcon className='hidden size-4 lg:block lg:size-5' />
          </div>
          <p className='text-sm sm:text-base lg:text-lg'>
            The <b>Top 5 contributors</b> get a personalized alert for any
            Twitch event (e.g., subs, gifted subs, bits), along with an
            on-screen arrival action for their first message sent in stream!
          </p>
        </div>
      </div>
    </Card>
  );
}
