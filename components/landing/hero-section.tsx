import { TextAnimate } from "@/components/ui/text-animate";
import { ScrollDownButton } from "@/components/shared/scroll-down-button";

export default function HeroSection() {
  return (
    <section
      id='hero'
      className='relative min-h-svh w-full overflow-hidden bg-background'
    >
      <video
        className='absolute inset-0 size-full object-cover object-[29.5%_50%] lg:object-[50%_50%]'
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
      <div className='absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_10%,black_100%)]' />
      <div className='absolute z-10 flex size-full flex-col items-center justify-center border px-4 pb-20 text-center'>
        <TextAnimate
          animation='blurInDown'
          by='word'
          duration={1.5}
          className='font-serif text-5xl leading-none font-black tracking-tighter text-white text-shadow-lg text-shadow-primary sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[9rem] 3xl:text-[10rem] 4xl:text-[11rem]'
        >
          Creator of Chaos
        </TextAnimate>
      </div>
      <ScrollDownButton targetId='about-container' />
    </section>
  );
}
