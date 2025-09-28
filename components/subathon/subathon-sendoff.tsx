import { Button } from "@/components/ui/button";

export function SubathonSendoff() {
  return (
    <section className='bg-gradient-to-t from-transparent via-primary/5 to-transparent px-6 py-24 text-center md:py-32 lg:py-40 dark:from-transparent dark:via-accent/5 dark:to-transparent'>
      <h2 className='mb-4 text-3xl font-bold md:text-4xl lg:text-5xl'>
        Thank You for Your Support!
      </h2>
      <p className='mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl'>
        Your support makes everything possible. Every cheer, sub, and donation
        helps us grow, unlock new subathonGoals, and create memories together.
        This community is what makes the subathon special, and you are a huge
        part of it.
      </p>
      <a
        href='https://www.twitch.tv/sway_bae'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Button
          size='dynamic'
          className='text-white transition-all hover:scale-103'
        >
          Continue the Celebration
        </Button>
      </a>
    </section>
  );
}
