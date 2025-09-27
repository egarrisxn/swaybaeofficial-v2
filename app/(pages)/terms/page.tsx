import LastUpdated from "@/components/shared/last-updated";
import ReusableList from "@/components/shared/reusable-list";
import ContactMeSnippet from "@/components/shared/contact-me-snippet";
import { termsOfServiceList } from "@/data/public";

export default function TermsOfUsePage() {
  return (
    <div className='min-h-screen w-full'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <section className='mx-auto grid max-w-[65ch] grid-cols-1 items-center xl:max-w-[80ch]'>
          <header className='mb-10 flex w-full flex-col md:mx-auto md:items-center md:justify-center md:text-center'>
            <h1 className='mb-2 text-4xl font-extrabold tracking-tight text-foreground md:mb-4 xl:text-5xl'>
              Terms of Use
            </h1>
            <div className='text-xs text-muted-foreground md:text-sm'>
              <LastUpdated />
            </div>
          </header>
          <article className='mb-6'>
            {termsOfServiceList.map((section, index) => (
              <ReusableList
                key={index}
                title={section.title}
                description={section.description}
                items={section.items}
              />
            ))}
          </article>
          <hr className='mb-6' />
          <ContactMeSnippet />
        </section>
      </div>
    </div>
  );
}
