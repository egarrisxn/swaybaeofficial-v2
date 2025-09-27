import Image from "next/image";
import { Link } from "next-view-transitions";
import { BlurText, BlurItem } from "@/components/ui/blur";
import { Button } from "@/components/ui/button";

import { aboutText } from "@/data/landing";

export default function AboutSection() {
  return (
    <section id='about' aria-labelledby='about-heading' className='pt-24'>
      <div
        id='about-container'
        className='container mx-auto grid max-w-xl grid-cols-1 gap-12 px-4 lg:max-w-7xl lg:grid-cols-2 lg:px-12 4xl:px-0'
      >
        <div className='mx-auto flex flex-col justify-center gap-3 px-4 lg:gap-5 lg:px-0'>
          <BlurText
            delay={0.1}
            className='text-lg font-extrabold tracking-wide text-muted-foreground uppercase 4xl:text-xl'
          >
            {aboutText.b}
          </BlurText>
          <BlurText
            delay={0.2}
            className='font-serif text-7xl font-black tracking-tight text-shadow-lg lg:text-8xl lg:leading-none 2xl:text-[7rem] 4xl:text-[8.5rem]'
          >
            <h2 id='about-heading'>{aboutText.h2}</h2>
          </BlurText>
          <BlurText
            delay={0.3}
            className='max-w-3xl text-lg font-light text-muted-foreground lg:text-xl 2xl:text-2xl 4xl:text-[1.65rem]'
          >
            <p>{aboutText.p}</p>
          </BlurText>
          <BlurItem delay={0.4} className='pt-2 lg:pt-0 4xl:pt-2'>
            <Link href='/about'>
              <Button size='lg' variant='contrast'>
                {aboutText.btn}
              </Button>
            </Link>
          </BlurItem>
        </div>
        <div className='flex items-center justify-center'>
          <Image
            src='/images/sway-about.png'
            alt='A cutout photo of Sway'
            width={600}
            height={1200}
            className='max-w-80 xs:max-w-md sm:max-w-lg lg:max-w-md 4xl:max-w-lg'
          />
        </div>
      </div>
    </section>
  );
}
