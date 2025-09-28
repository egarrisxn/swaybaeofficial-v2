import LastUpdated from "@/components/shared/last-updated";
import ContactMeSnippet from "@/components/shared/contact-me-snippet";

export default function AccessibilityPage() {
  return (
    <div className='min-h-screen w-full'>
      <div className='container mx-auto my-24 max-w-2xl px-4 lg:max-w-7xl xl:px-0'>
        <section className='mx-auto grid max-w-[65ch] grid-cols-1 items-center xl:max-w-[80ch]'>
          <header className='mb-10 flex w-full flex-col md:mx-auto md:items-center md:justify-center md:text-center'>
            <h1 className='mb-2 text-4xl font-extrabold tracking-tight text-foreground md:mb-4 xl:text-5xl'>
              Accessibility
            </h1>
            <div className='text-xs text-muted-foreground md:text-sm'>
              <LastUpdated />
            </div>
          </header>
          <article className='mb-10'>
            <h3 className='mb-4 text-2xl font-semibold'>
              Committed to Accessibility
            </h3>
            <p className='mb-6 text-base leading-relaxed text-muted-foreground'>
              {`Sway Bae Official is committed to making our website's content accessible and user friendly to everyone. We take your feedback seriously and will consider it as we evaluate ways to accommodate all of our community and our overall accessibility policies. Additionally, while we do not control such vendors, we strongly encourage vendors of third-party digital content to provide content that is accessible and user friendly. If you are having difficulty viewing or navigating the content on this website, or notice any content, feature, or functionality that you believe is not fully accessible to people with disabilities, please email our team at sway.bae9000@gmail.com with “Disabled Access” in the subject line and provide a description of the specific feature you feel is not fully accessible or a suggestion for improvement.`}
            </p>
          </article>
          <hr className='mb-6' />
          <ContactMeSnippet />
        </section>
      </div>
    </div>
  );
}
