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
      <div className='container mx-auto grid w-full max-w-xl grid-cols-1 gap-12 px-4 lg:max-w-5xl lg:grid-cols-2 lg:place-items-start xl:place-items-center 2xl:max-w-6xl 2xl:gap-16 2xl:px-0'>
        <div className='mx-auto flex w-full max-w-sm flex-col justify-center gap-3 text-center lg:mt-4 lg:gap-4 lg:text-start xl:mt-0 xl:mb-8 xl:max-w-xl'>
          <span className='text-sm font-extrabold tracking-wide text-muted-foreground uppercase xs:text-base'>
            {merchText.badge}
          </span>
          <h2
            id='merch-heading'
            className='font-serif text-2xl font-bold tracking-tight text-shadow-lg sm:text-3xl sm:leading-none lg:text-4xl 2xl:text-5xl'
          >
            {merchText.heading}
          </h2>
          <p className='font-light text-muted-foreground sm:text-lg sm:leading-snug lg:text-xl 2xl:text-[1.35rem] 2xl:leading-snug'>
            {merchText.body}
          </p>
          <a
            href='https://shop.swaybae.net'
            rel='noopener noreferrer'
            target='_blank'
            className='hidden lg:flex lg:pt-1'
          >
            <Button variant='contrast'>{merchText.button}</Button>
          </a>
        </div>

        <div className='mx-auto flex w-full flex-col items-center justify-center xl:max-w-xl'>
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

// import { Button } from "@/components/ui/button";
// import { MerchCards } from "@/components/shared/merch-cards";

// import type { TextBlurb } from "@/types";

// export const merchText: TextBlurb = {
//   badge: "Merch store",
//   heading: `Check out the most recent line of Bae Squad gear!`,
//   body: `There's something for everyone, from t-shirts, to hoodies, to fanny packs! Merch is both stylish AND a great way to show support. Check out the shop now!`,
//   button: "Shop Now!",
// };

// export default function MerchSection() {
//   return (
//     <section
//       id='merch'
//       aria-labelledby='merch-heading'
//       className='py-24 4xl:py-40'
//     >
//       <div className='container mx-auto grid max-w-xl grid-cols-1 gap-16 px-4 lg:max-w-6xl lg:grid-cols-[63%_37%] lg:gap-0 lg:px-0 2xl:max-w-6xl 4xl:max-w-7xl'>
//         <div className='mx-auto flex max-w-sm flex-col items-center justify-center gap-3 px-4 text-center sm:max-w-md lg:mx-0 lg:max-w-none lg:items-start lg:px-8 lg:text-start xl:gap-5'>
//           <span className='text-sm font-extrabold tracking-wide text-muted-foreground uppercase xs:text-base'>
//             {merchText.badge}
//           </span>
//           <h2
//             id='merch-heading'
//             className='max-w-3xl font-serif text-2xl font-bold tracking-tight text-shadow-lg sm:text-3xl sm:leading-none lg:text-4xl 2xl:text-5xl'
//           >
//             {merchText.heading}
//           </h2>
//           <p className='max-w-3xl font-light text-muted-foreground sm:text-lg sm:leading-snug lg:text-xl 2xl:text-[1.35rem] 2xl:leading-snug'>
//             {merchText.body}
//           </p>
//           <a
//             href='https://shop.swaybae.net'
//             rel='noopener noreferrer'
//             target='_blank'
//             className='hidden lg:flex lg:pt-1'
//           >
//             <Button variant='contrast'>{merchText.button}</Button>
//           </a>
//         </div>
//         <div className='mx-auto flex w-full flex-col items-center justify-center lg:items-center lg:justify-center'>
//           <MerchCards />
//           <a
//             href='https://shop.swaybae.net'
//             rel='noopener noreferrer'
//             target='_blank'
//             className='mt-24 flex items-center justify-center lg:mt-0 lg:hidden'
//           >
//             <Button variant='contrast' size='lg'>
//               {merchText.button}
//             </Button>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }
