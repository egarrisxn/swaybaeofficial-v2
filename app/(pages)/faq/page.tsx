import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import type { List } from "@/types";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently Asked Questions for Swa Bae and The Bae Squad!",
};

export const faqList: List[] = [
  {
    title: "Where all do you stream at?",
    description:
      "I stream exclusively on Twitch at the moment. This may change in the future!",
  },
  {
    title: "What is your stream schedule?",
    description:
      "My schedule fluctuates. Check the calendar page on this website for the most up-to-date weekly schedule.",
  },
  {
    title: "What is your content/upload schedule?",
    description:
      "Content uploads also fluctuate. Visit my YouTube channel for the latest updates and release times.",
  },
  {
    title: "Is your content family-friendly?",
    description:
      "Yes, I strive to keep all my streams and videos suitable for all audiences and all ages.",
  },
  {
    title: "Do you attend conventions or in-person events?",
    description:
      "I love meeting the community! Keep an eye on my social media channels (Twitter/Instagram) for any event or convention announcements.",
  },
  {
    title: "What advice do you have for new creators/streamers?",
    description:
      "Value your community, do not be too hard on yourself, and have fun! Those are the keys.",
  },
  {
    title: "How can I support the stream/channel?",
    description:
      "The best ways to support are by watching, engaging in chat, subscribing on Twitch/YouTube, or checking out the merch store!",
  },
  {
    title: "My question wasn't answered here. Where can I find more help?",
    description:
      "The best place to ask any other questions is by joining our Discord server!",
  },
];

export default function FAQPage() {
  return (
    <section className='pb-24'>
      <div className='container mx-auto max-w-3xl space-y-14 px-4 lg:max-w-6xl xl:gap-14'>
        <div className='flex flex-col justify-center gap-3 px-2 lg:gap-4 lg:px-4'>
          <h2 className='max-w-5xl font-serif text-3xl font-bold tracking-tight text-shadow-lg sm:text-4xl sm:leading-none lg:text-5xl 2xl:text-6xl'>
            Frequently Asked Questions
          </h2>
          <p className='max-w-xl font-light text-muted-foreground sm:text-lg sm:leading-snug lg:max-w-5xl lg:text-xl 2xl:text-[1.35rem] 2xl:leading-snug'>
            Find an answer to the most common questions I get asked.
          </p>
        </div>
        <div>
          <Accordion
            defaultValue='item-0'
            type='single'
            collapsible
            className='w-full space-y-2'
          >
            {faqList.map(({ title, description }, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className='p-1'
              >
                <AccordionTrigger className='text-base font-semibold'>
                  {title}
                </AccordionTrigger>
                <AccordionContent className='font-medium text-primary'>
                  {description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
