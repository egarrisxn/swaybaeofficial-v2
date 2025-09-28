import { Button } from "@/components/ui/button";
import { MerchCards } from "@/components/shared/merch-cards";

import type { TextBlurb } from "@/types";

export const merchText: TextBlurb = {
  badge: "Merch store",
  heading: `Check out the most recent line of Bae Squad gear!`,
  body: `There's something for everyone, from t-shirts, to hoodies, to fanny packs! Merch is both stylish AND a great way to show support`,
  button: "Shop Now",
};

export default function MerchSection() {
  return (
    <section id='merch' aria-labelledby='merch-heading' className='py-24'>
      <div className='container mx-auto grid max-w-xl grid-cols-1 gap-16 px-4 lg:max-w-6xl lg:grid-cols-[70%_30%] lg:gap-0 lg:px-10 2xl:max-w-7xl 2xl:px-14 4xl:max-w-9xl'>
        <div className='mx-auto flex w-full max-w-sm flex-col items-center justify-center gap-3 px-4 text-center sm:max-w-md lg:max-w-none lg:items-start lg:px-0 lg:text-start xl:gap-5'>
          <span className='text-sm font-extrabold tracking-wide text-muted-foreground uppercase xs:text-base'>
            {merchText.badge}
          </span>
          <h2
            id='merch-heading'
            className='max-w-xl font-serif text-2xl font-bold tracking-tight text-shadow-lg sm:text-3xl sm:leading-none lg:text-4xl 2xl:text-5xl'
          >
            {merchText.heading}
          </h2>
          <p className='max-w-xl font-light text-muted-foreground sm:text-lg sm:leading-snug lg:text-xl 2xl:text-[1.35rem] 2xl:leading-snug'>
            {merchText.body}
          </p>
          <a
            href='https://shop.swaybae.net'
            rel='noopener noreferrer'
            target='_blank'
            className='hidden lg:flex lg:pt-4'
          >
            <Button variant='contrast' size='lg'>
              {merchText.button}
            </Button>
          </a>
        </div>
        <div className='mx-auto flex w-full flex-col items-center justify-center lg:items-end'>
          <MerchCards />
          <a
            href='https://shop.swaybae.net'
            rel='noopener noreferrer'
            target='_blank'
            className='mt-24 flex items-center justify-center lg:mt-0 lg:hidden'
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
