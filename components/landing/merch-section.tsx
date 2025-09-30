import { Button } from "@/components/ui/button";
import { MerchCards } from "@/components/shared/merch-cards";

import type { TextBlurb } from "@/types";

export const merchText: TextBlurb = {
  badge: "Merch store",
  heading: `Check out the most recent line of Bae Squad gear!`,
  body: `There's something for everyone, from t-shirts, to hoodies, to fanny packs! Merch is both stylish AND a great way to show support. Check it out!`,
  button: "Shop Now!",
};

export default function MerchSection() {
  return (
    <section
      id='merch'
      aria-labelledby='merch-heading'
      className='py-24 4xl:py-40'
    >
      <div className='container mx-auto grid w-full max-w-xl grid-cols-1 gap-12 px-4 lg:max-w-6xl lg:grid-cols-2 lg:place-items-start lg:gap-4 lg:px-16 xl:max-w-6xl 2xl:px-0'>
        <div className='mx-auto flex w-full flex-col items-center justify-center gap-3 text-center lg:mt-14 lg:items-start lg:text-start xl:gap-4 2xl:mt-20'>
          <span className='text-sm font-extrabold tracking-wide text-muted-foreground uppercase xs:text-base'>
            {merchText.badge}
          </span>
          <h2
            id='merch-heading'
            className='max-w-sm font-serif text-3xl font-bold tracking-tight text-shadow-lg sm:text-3xl sm:leading-none lg:max-w-none lg:text-5xl 2xl:text-6xl'
          >
            {merchText.heading}
          </h2>
          <p className='max-w-sm font-light text-muted-foreground sm:text-lg sm:leading-snug lg:max-w-none lg:text-xl 2xl:text-[1.35rem] 2xl:leading-snug'>
            {merchText.body}
          </p>
          <a
            href='https://shop.swaybae.net'
            rel='noopener noreferrer'
            target='_blank'
            className='hidden pt-2 lg:flex'
          >
            <Button variant='contrast' size='dynamic'>
              {merchText.button}
            </Button>
          </a>
        </div>
        <div className='mx-auto mt-2 flex size-full flex-col items-center justify-center lg:mt-0 lg:items-end'>
          <MerchCards />
          <a
            href='https://shop.swaybae.net'
            rel='noopener noreferrer'
            target='_blank'
            className='mt-16 flex items-center justify-center lg:mt-0 lg:hidden'
          >
            <Button variant='contrast' size='lg'>
              {merchText.button}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
