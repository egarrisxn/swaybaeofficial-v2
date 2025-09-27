import { TextAnimate } from "@/components/ui/text-animate";
import { ScrollDownButton } from "@/components/shared/scroll-down-button";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      id='hero'
      className='h-vh relative min-h-svh w-full overflow-hidden bg-background'
    >
      <video
        className='absolute inset-0 size-full animate-slow-zoom object-cover object-[29.5%_50%] md:object-[50%_50%]'
        autoPlay
        loop
        muted
        playsInline
        poster='/hero/desktop.png'
        preload='metadata'
        aria-hidden='true'
      >
        <source src='/hero/desktop.mp4' type='video/mp4' />
      </video>

      <div className='absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-black/80' />
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_70%,black_100%)]' />

      <div className='absolute z-10 flex size-full flex-col items-center justify-center gap-6 px-4 text-center'>
        <TextAnimate
          animation='scaleUp'
          by='text'
          className='font-serif text-5xl font-black tracking-tighter text-white text-shadow-lg text-shadow-primary sm:text-7xl lg:text-8xl 2xl:text-9xl 4xl:text-[11rem]'
        >
          Creator of Chaos
        </TextAnimate>
        <p className='max-w-xl text-lg text-white/80 sm:text-xl lg:text-2xl'>
          Breaking boundaries through streaming, storytelling, and unfiltered
          energy.
        </p>
        <div className='mt-4 flex flex-wrap justify-center gap-4 lg:mt-6'>
          <a href='https://www.twitch.tv/sway_bae'>
            <Button size='dynamic' className='text-white'>
              Watch Live
            </Button>
          </a>
          <ScrollDownButton targetId='about-container' />
        </div>
      </div>
    </section>
  );
}
