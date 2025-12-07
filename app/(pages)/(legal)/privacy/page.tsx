import type { Metadata } from "next";
import { Link } from "next-view-transitions";
import LastUpdated from "@/components/shared/last-updated";
import ReusableList from "@/components/shared/reusable-list";
import ContactMeSnippet from "@/components/shared/contact-me-snippet";

import type { List } from "@/types";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy Policy page for Sway Bae Official.",
};

export const privacyGeneralInfo: List[] = [
  {
    title: "Analytics Information",
    description:
      "We collect anonymized data about how users interact with the site, including page visits and device/browser type. This helps us improve the experience and content.",
  },
  {
    title: "Embedded Content",
    description:
      "We display embedded content such as YouTube videos, Twitch streams, and X (Twitter) posts. These services may collect usage data according to their own privacy policies.",
  },
  {
    title: "Mailing List Information",
    description:
      "If you subscribe to our mailing list, we collect your email address to send updates, announcements, or special content. You can unsubscribe at any time.",
  },
  {
    title: "Contact Information",
    description:
      "If you contact us via email or a contact form, we may collect your name and email address in order to respond.",
  },
  {
    title: "Generative AI and Likeness",
    description:
      "Unless explicitly granted, you **may not** use this content creator's image, video, audio, or any other assets or works for the development, training, or input of any **generative artificial intelligence (AI) models or services**. Unauthorized use may infringe upon the creator's intellectual property and/or right of publicity.",
  },
];
export const privacyUsage: List[] = [
  {
    description:
      "Improving the site experience based on anonymous usage analytics.",
  },
  {
    description:
      "Embedding and displaying media from platforms like Twitch and YouTube.",
  },
  {
    description:
      "Sending occasional email updates to mailing list subscribers.",
  },
  {
    description:
      "Responding to questions, requests, or feedback sent through contact forms or email.",
  },
  {
    description:
      "Enhancing viewer interactivity with stream-related features, such as live polls or embedded chat widgets.",
  },
];
export const privacyThirdPartyServices: List[] = [
  {
    title: "YouTube",
    link: "https://policies.google.com/privacy",
    linkText: "Privacy Policy Page",
  },
  {
    title: "Twitch",
    link: "https://www.twitch.tv/p/legal/privacy-notice/",
    linkText: "Privacy Policy Page",
  },
  {
    title: "X (formerly Twitter)",
    link: "https://twitter.com/en/privacy",
    linkText: "Privacy Policy Page",
  },
  {
    title: "Google Analytics",
    link: "https://policies.google.com/privacy",
    linkText: "Privacy Policy Page",
  },
  {
    title: "Mailing List Provider",
    description:
      "Our mailing list is managed by a third-party email service. Your email address is securely stored and only used for communication you've opted into.",
  },
];
export const privacyRights: List[] = [
  { description: "Request access to any personal information we may hold" },
  { description: "Ask us to correct or delete your information" },
  { description: "Unsubscribe from our mailing list at any time" },
];

export default function PrivacyPolicyPage() {
  return (
    <section className='pb-24'>
      <div className='container mx-auto max-w-2xl px-4 lg:max-w-7xl'>
        <div className='mx-auto grid max-w-[65ch] grid-cols-1 items-center xl:max-w-[80ch]'>
          <header className='mb-10 flex w-full flex-col md:mx-auto md:items-center md:justify-center md:text-center'>
            <h1 className='mb-2 text-4xl font-extrabold tracking-tight text-foreground md:mb-4 xl:text-5xl'>
              Privacy Policy
            </h1>
            <div className='text-xs text-muted-foreground md:text-sm'>
              <LastUpdated />
            </div>
          </header>
          <article className='mb-10'>
            <ReusableList
              title='Information We Collect'
              description='We may gather the following types of information:'
              items={privacyGeneralInfo}
            />
            <ReusableList
              title='How We Use Your Information'
              description='The information collected may be utilized for:'
              items={privacyUsage}
            />
            <div className='mb-10'>
              <h3 className='mb-4 text-2xl font-semibold'>Use of Cookies</h3>
              {privacyThirdPartyServices.map((item, index) => (
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
            </div>
            <ReusableList
              title='Cookies and Tracking'
              description={
                <>
                  Please see our{" "}
                  <Link
                    href='/cookies'
                    className='text-primary underline-offset-4 hover:text-primary/80 hover:underline'
                  >
                    Cookie Policy
                  </Link>{" "}
                  for more information.
                </>
              }
            />
            <ReusableList
              title='Security'
              description='We take appropriate measures to protect your information from unauthorized access or alteration, disclosure, or destruction.'
            />
            <ReusableList
              title='Your Rights'
              description='You have the right to:'
              items={privacyRights}
            />
            <ReusableList
              title='Changes to This Policy'
              description="We may update this privacy policy as our website grows or legal
            requirements change. When we do, we'll update the “Last
            Updated” date at the top of this page. Significant changes will be
            clearly communicated on the website."
            />
          </article>
          <hr className='mb-6' />
          <ContactMeSnippet />
        </div>
      </div>
    </section>
  );
}
