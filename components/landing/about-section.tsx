import Image from "next/image";
import { BlurText, BlurItem } from "@/components/ui/blur";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import type { TextBlurb } from "@/types";

const aboutText: TextBlurb = {
  badge: "Welcome!",
  heading: `I'm Sway!`,
  body: `I'm a full-time, family-friendly gaming creator who loves building a cozy, inclusive space on the internet. Around here you'll find good vibes, big laughs, honest conversations, and a focus on mental health and kindness. I stream on Twitch and post videos on YouTube multiple times a week, and I'm genuinely grateful you're here.`,
  button: "Learn More",
};

const dialogParagraphs = [
  `I'm a full-time content creator partnered with Twitch and YouTube, spending most of my week streaming and creating videos for our community. My content is family-friendly and built around a simple idea: leave someone's day better than you found it.`,

  `Our community is the heart of everything I do. It is a supportive, inclusive place where people can hang out, encourage each other, and be themselves. We also have an active Discord where conversations continue long after the stream ends.`,

  `I'm best known for Hearthstone Battlegrounds, but I also enjoy strategy games, survival games, indie titles, simulators, roguelikes, platformers, and many more. I never imagined this would be my life five years ago, but I truly love it.`,

  `If you'd like to work with me, I'd be excited to connect. You can use the contact form in the business inquiries section below. Thank you for being part of my journey and for letting me be part of yours. 💙`,
];

export default function AboutSection() {
  return (
    <section id='about' aria-labelledby='about-heading' className='pt-24'>
      <div
        id='about-container'
        className='container mx-auto grid max-w-xl grid-cols-1 gap-12 px-4 lg:max-w-7xl lg:grid-cols-2 lg:px-12 4xl:px-0'
      >
        {/* LEFT COLUMN */}
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
            <Dialog>
              <DialogTrigger asChild>
                <Button size='lg' variant='contrast'>
                  {aboutText.button}
                </Button>
              </DialogTrigger>

              <DialogContent className='space-y-4 sm:max-w-md'>
                <DialogHeader>
                  <DialogTitle>{`Here's a little more about me!`}</DialogTitle>
                </DialogHeader>

                <div className='space-y-4 text-sm leading-relaxed text-muted-foreground'>
                  {dialogParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
          </BlurItem>
        </div>

        {/* RIGHT COLUMN */}
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
