import { SocialCard } from "@/components/shared/social-card";

import { socialData } from "@/lib/constants";

export default function SocialsSection() {
  return (
    <section
      id='socials'
      aria-labelledby='socials-heading'
      className='w-full max-w-13xl 4xl:mx-auto'
    >
      {/* <div className='space-y-4 bg-shaded bg-[url(/graphics/grainy.png)] bg-repeat py-12 md:space-y-6 md:p-14 lg:pb-16 xl:pt-18 xl:pb-20 2xl:space-y-7 4xl:rounded-3xl 4xl:pt-14'>  */}
      <div className='space-y-4 bg-gradient-to-t from-slate-800 via-slate-700 to-slate-600 py-12 md:space-y-6 md:p-14 lg:pb-16 xl:pt-18 xl:pb-20 2xl:space-y-7 4xl:rounded-3xl 4xl:pt-14 dark:from-slate-950 dark:via-slate-800 dark:to-slate-950'>
        <h5
          id='socials-heading'
          className='text-center text-xs font-medium text-white uppercase md:text-sm lg:text-base'
        >
          Lets get social
        </h5>
        <div className='flex flex-wrap items-center justify-center gap-4 px-4 sm:gap-5 md:gap-8 md:px-8 2xl:px-0'>
          {socialData.map((social) => (
            <SocialCard key={social.id} {...social} />
          ))}
        </div>
      </div>
    </section>
  );
}
