import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TwitchIcon } from "@/components/icons";

export function SubathonHeader() {
  return (
    <section className='relative overflow-hidden'>
      <div className='absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent dark:from-transparent dark:via-accent/5 dark:to-transparent' />
      <div className='relative px-6 pt-12 pb-24 md:pt-16 md:pb-32 lg:pt-20 lg:pb-40'>
        <div className='mx-auto max-w-4xl text-center'>
          <div className='mx:py-2 mb-6 inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground md:mb-8 md:gap-2 md:px-4 md:text-sm'>
            <Clock className='size-3 text-accent md:size-3.5' />
            <span className='text-muted-foreground'>Subathon Complete.</span>
          </div>
          <h1 className='bg-linear-to-br from-foreground via-foreground to-accent bg-clip-text pb-4 text-[2.65rem] leading-none font-bold tracking-tighter text-transparent text-shadow-lg sm:text-5xl md:pt-1 md:pb-6 md:text-6xl lg:text-7xl xl:text-8xl'>
            {`Sway's Subtember Subathon`}
          </h1>
          <p className='mb-6 text-lg leading-relaxed text-balance text-muted-foreground md:mb-12 md:text-xl'>
            {`Thank you for joining Sway for the ultimate Subtember Subathon! Check out highlights, community clips, and all the can't-miss moments below.`}
          </p>
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
              My Twitch Page!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
