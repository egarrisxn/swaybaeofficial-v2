import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TwitchIcon } from "@/components/icons";

export function SubathonHeader() {
  return (
    <section className='relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:from-transparent dark:via-accent/5 dark:to-transparent' />
      <div className='relative px-6 py-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40'>
        <div className='mx-auto max-w-4xl text-center'>
          <div className='mx:py-2 mb-8 inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground md:gap-2 md:px-4 md:text-sm'>
            <Clock className='size-3 text-accent md:size-3.5' />
            <span className='text-muted-foreground'>Happening Now!</span>
          </div>
          <h1 className='bg-gradient-to-br from-foreground via-foreground to-accent bg-clip-text pt-1 pb-6 text-[2.5rem] leading-none font-bold tracking-tighter text-transparent text-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
            {`Sway's Subtember Subathon`}
          </h1>
          <p className='mb-12 text-lg leading-relaxed text-balance text-muted-foreground md:text-xl'>
            {`Join Sway for the ultimate Subtember Subathon! Stay tuned for live updates, highlights, community clips, and all the can't-miss moments.`}
          </p>

          <div className='flex flex-col items-center gap-6 sm:flex-row sm:justify-center'>
            <a
              href='https://www.twitch.tv/sway_bae'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button
                size='dynamic'
                className='text-white transition-all hover:scale-103'
              >
                <TwitchIcon className='size-3.5 md:size-4.5' />
                Watch Live
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
