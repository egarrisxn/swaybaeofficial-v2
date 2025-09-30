import Image from "next/image";
import Link from "next/link";
import { BlurText, BlurItem } from "@/components/ui/blur";
import { Button } from "@/components/ui/button";

import type { TextBlurb } from "@/types";

const aboutText: TextBlurb = {
  badge: "Welcome!",
  heading: `I'm Sway!`,
  body: `I am a full-time, family-friendly gaming creator and entertainer with a passion for community building, engagement, and mental health advocacy! I am partnered with Twitch and YouTube and you can find me streaming and releasing videos multiple times per week. Thank you for being here!`,
  button: "Learn More",
};

export default function AboutSection() {
  return (
    <section id='about' aria-labelledby='about-heading' className='pt-24'>
      <div
        id='about-container'
        className='container mx-auto grid max-w-xl grid-cols-1 gap-12 px-4 lg:max-w-7xl lg:grid-cols-2 lg:px-12 4xl:px-0'
      >
        <div className='mx-auto flex flex-col justify-center gap-3 px-4 lg:px-0 xl:gap-5'>
          <BlurText
            delay={0.1}
            className='text-lg font-extrabold tracking-wide text-muted-foreground uppercase 4xl:text-xl'
          >
            {aboutText.badge}
          </BlurText>
          <BlurText
            delay={0.2}
            className='font-serif text-7xl font-black tracking-tight text-shadow-lg lg:text-8xl lg:leading-none 2xl:text-[7rem] 4xl:text-[8.5rem]'
          >
            <h2 id='about-heading'>{aboutText.heading}</h2>
          </BlurText>
          <BlurText
            delay={0.3}
            className='max-w-3xl text-lg font-light text-muted-foreground lg:text-xl 2xl:text-2xl 4xl:text-[1.65rem]'
          >
            <p>{aboutText.body}</p>
          </BlurText>
          <BlurItem delay={0.4} className='pt-2'>
            <Link href='/about'>
              <Button size='lg' variant='contrast'>
                {aboutText.button}
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
