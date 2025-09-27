import { LogoCarousel } from "@/components/ui/logo-carousel";

export default function InfiniteBrandShowcase() {
  return (
    <section className='w-full'>
      <div className='bg-radial from-purple-900 from-25% to-slate-900 dark:from-purple-950 dark:to-slate-950'>
        <div className='mx-auto flex flex-col items-center justify-center space-y-3 pt-12 pb-6 md:pt-14 md:pb-8 lg:pt-16 lg:pb-10 xl:pt-20 xl:pb-12 2xl:pb-16'>
          <h5 className='text-center text-xs font-semibold text-white uppercase md:text-sm lg:text-base'>
            It&apos;s been my pleasure working with these brands
          </h5>
          <LogoCarousel columnCount={4} />
        </div>
      </div>
    </section>
  );
}
