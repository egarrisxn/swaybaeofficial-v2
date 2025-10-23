import { Video } from "@/components/ui/video";
import { Button } from "@/components/ui/button";
import { YouTubeFeed } from "@/components/shared/youtube-feed";

import type { TextBlurb } from "@/types";

const youTubeText: TextBlurb = {
  badge: "Check this out",
  heading: `Watch some of my most recent YouTube videos.`,
  body: `Make sure to like and subscribe to the channel for all my new videoeo updates!`,
  button: "Subscribe!",
  video: "Latest Videos",
};

export default function YouTubeSection() {
  return (
    <section
      id='youtube'
      aria-labelledby='youtube-heading'
      className='w-full bg-radial-[at_50%_75%] from-background via-muted to-muted to-90% pt-24 pb-20 2xl:py-20 4xl:mx-auto 4xl:max-w-448 4xl:rounded-3xl 4xl:border 4xl:border-border 4xl:py-18 dark:from-[#2e2e3f] dark:via-muted dark:to-muted'
    >
      <div className='container mx-auto max-w-xl px-4 lg:max-w-8xl lg:px-8 2xl:max-w-9xl 4xl:max-w-11xl 4xl:px-0'>
        <div className='flex flex-col gap-10 lg:flex-row lg:items-center xl:gap-12 4xl:gap-16'>
          <div className='order-1 flex flex-col justify-center gap-3 px-4 lg:order-2 lg:px-0 xl:gap-4 4xl:w-[60%]'>
            <span className='text-sm font-extrabold tracking-wide text-muted-foreground uppercase xs:text-base'>
              {youTubeText.badge}
            </span>
            <h2
              id='youtube-heading'
              className='font-serif text-3xl font-bold tracking-tight text-shadow-lg sm:text-4xl sm:leading-none 2xl:text-6xl'
            >
              {youTubeText.heading}
            </h2>
            <p className='max-w-xl font-light text-muted-foreground sm:text-lg sm:leading-snug 2xl:text-2xl'>
              {youTubeText.body}
            </p>
            <a
              href='https://www.youtube.com/swaybaetv'
              rel='noopener noreferrer'
              target='_blank'
              className='hidden pt-2 lg:flex'
            >
              <Button variant='contrast' size='dynamic'>
                {youTubeText.button}
              </Button>
            </a>
          </div>
          <div className='order-2 mx-auto w-full max-w-2xl lg:order-1 4xl:w-[40%]'>
            <Video
              videoAnimationStyle='from-center'
              videoSrc='https://www.youtube-nocookie.com/embed/LJtxzJ6S_hE'
              thumbnailSrc='/images/sway-youtube.webp'
              thumbnailAlt='Featured YouTube video'
            />
          </div>
        </div>
        <div className='mt-20 2xl:px-2 4xl:mt-16 4xl:px-0'>
          <span className='pl-1 text-sm font-medium tracking-wide text-muted-foreground uppercase xs:pl-0 xs:text-base'>
            {youTubeText.video}
          </span>
          <div className='pt-2'>
            <YouTubeFeed />
          </div>
          <div className='mx-auto mt-16 hidden flex-row items-center justify-center text-center text-lg font-light tracking-tight text-foreground lg:flex'>
            I have recently started a VOD channel as well to keep all of my
            Twitch streams, you can
            <a
              href='https://www.youtube.com/@SwayBaeVODS'
              rel='noopener noreferrer'
              target='_blank'
              className='px-1 text-link underline underline-offset-4'
            >
              check it out here
            </a>
            !
          </div>
          <a
            href='https://www.youtube.com/swaybaetv'
            rel='noopener noreferrer'
            target='_blank'
            className='mt-20 flex items-center justify-center lg:hidden'
          >
            <Button size='lg' variant='contrast'>
              {youTubeText.button}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
