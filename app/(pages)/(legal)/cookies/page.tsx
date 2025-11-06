import LastUpdated from "@/components/shared/last-updated";
import ContactMeSnippet from "@/components/shared/contact-me-snippet";

import type { List } from "@/types";

const cookieData: List[] = [
  {
    description:
      "This Cookie Policy explains what cookies are, how we use them, what types of cookies we place, the information they collect, and how that information is used. It also outlines how you can manage your cookie preferences. Cookies are small text files stored on your device when you visit a website. They hold limited information that helps the site function properly, keep it secure, improve your browsing experience, and provide insights into how the website is performing and where it can be improved.",
  },
  {
    description:
      "Like most websites, we use both first-party and third-party cookies for different purposes. First-party cookies are essential for the basic operation of our website. They do not collect personally identifiable information. Third-party cookies help us understand how visitors use the site, measure performance, maintain security, deliver relevant advertisements, and generally enhance your experience. They also make future visits faster and more efficient.",
  },
  {
    description:
      "You can review or change your cookie preferences at any time by selecting Cookie Settings. This allows you to update your choices or withdraw consent immediately. Most browsers also allow you to block or delete cookies through their settings. The links below explain how to manage cookies in the major browsers:",
  },
  {
    title: "Chrome",
    link: "https://support.google.com/accounts/answer/32050",
    linkText: "Support Page",
  },
  {
    title: "Safari",
    link: "https://support.apple.com/en-in/guide/safari/sfri11471/mac",
    linkText: "Support Page",
  },
  {
    title: "Firefox",
    link: "https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US",
    linkText: "Support Page",
  },
  {
    title: "Internet Explorer",
    link: "https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc",
    linkText: "Support Page",
  },
  {
    description:
      "For other browsers, please consult the official support documentation.",
  },
];

export default function CookiePolicyPage() {
  return (
    <section className='pb-24'>
      <div className='container mx-auto max-w-2xl px-4 lg:max-w-7xl'>
        <div className='mx-auto grid max-w-[65ch] grid-cols-1 items-center xl:max-w-[80ch]'>
          <header className='mb-10 flex w-full flex-col md:mx-auto md:items-center md:justify-center md:text-center'>
            <h1 className='mb-2 text-4xl font-extrabold tracking-tight text-foreground md:mb-4 xl:text-5xl'>
              Cookie Policy
            </h1>
            <div className='text-xs text-muted-foreground md:text-sm'>
              <LastUpdated />
            </div>
          </header>
          <article className='mb-10'>
            <h3 className='mb-4 text-2xl font-semibold'>Use of Cookies</h3>
            {cookieData.map((item, index) => (
              <p
                key={index}
                className='mb-6 text-base leading-relaxed text-muted-foreground'
              >
                {item.link ? (
                  <>
                    <span className='font-medium'>{item.title}:</span>{" "}
                    <a
                      href={item.link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='text-primary underline-offset-4 hover:text-primary/80 hover:underline'
                    >
                      {item.linkText}
                    </a>
                  </>
                ) : (
                  item.description
                )}
              </p>
            ))}
          </article>
          <hr className='mb-6' />
          <ContactMeSnippet />
        </div>
      </div>
    </section>
  );
}
