import { Tweets } from "@/components/ui/tweets";

import type { TextBlurb } from "@/types";

const twitterText: TextBlurb = {
  badge: "Keeping up with my socials",
  heading: `Follow me on my adventures!`,
  body: `I post my adventures on Instagram, Bluesky, and X! Those are great places to keep up with me when I'm not streaming`,
};

const tweetGrid: string[] = [
  "1843676470885134641",
  "1842955533697069347",
  "1845928542020030506",
];

export default function TwitterSection() {
  return (
    <section
      id='twitter'
      aria-labelledby='twitter-heading'
      className='py-24 4xl:pt-40'
    >
      <div className='container mx-auto grid max-w-xl grid-cols-1 gap-6 px-4 lg:max-w-7xl lg:gap-8 lg:px-12 2xl:max-w-8xl 2xl:px-0 4xl:max-w-12xl'>
        <div className='flex flex-col gap-3 px-4 xs:px-6 lg:gap-5 lg:px-0 4xl:px-6'>
          <span className='text-sm font-extrabold tracking-wide text-muted-foreground uppercase xs:text-base'>
            {twitterText.badge}
          </span>
          <h2
            id='twitter-heading'
            className='font-serif text-2xl font-bold tracking-tight text-shadow-lg sm:text-3xl sm:leading-none lg:text-4xl 2xl:text-5xl'
          >
            {twitterText.heading}
          </h2>
          <p className='max-w-2xl font-light text-muted-foreground sm:text-lg sm:leading-snug lg:text-xl 2xl:text-[1.35rem] 2xl:leading-snug'>
            {twitterText.body}
          </p>
        </div>
        <div className='xs:px-1'>
          <Tweets tweets={tweetGrid} />
        </div>
      </div>
    </section>
  );
}
