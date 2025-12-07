import type { Metadata } from "next";
import LastUpdated from "@/components/shared/last-updated";
import ReusableList from "@/components/shared/reusable-list";
import ContactMeSnippet from "@/components/shared/contact-me-snippet";

import type { ExtendedList } from "@/types";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of service page for Sway Bae Official.",
};

export const termsOfServiceList: ExtendedList[] = [
  {
    title: "Introduction",
    description:
      'Welcome to swaybae.net (the "Site"). By accessing or using this Site, you agree to be bound by these Terms of Use. Please read them carefully.',
    items: [],
  },
  {
    title: "1. Intellectual Property",
    description:
      "All content on this Site, including text, images, videos, logos, and other materials, is the property of Sway Bae or its content partners unless otherwise noted. You may not share content for personal or commercial use.",
    items: [
      {
        description:
          "Reproduce, distribute, or modify content without prior written permission.",
      },
      {
        description:
          "Use content in a way that harms the reputation of the Site or its creators.",
      },
    ],
  },
  {
    title: "2. User Conduct",
    description:
      "When interacting with the Site or its features (including mailing lists or embedded content), you agree to:",
    items: [
      {
        description: "Provide truthful and respectful information.",
      },
      {
        description:
          "Avoid posting unlawful, defamatory, abusive, or harmful content.",
      },
      {
        description: "Not impersonate others or engage in disruptive behavior.",
      },
      {
        description:
          "User-generated content may be reviewed and approved before public display.",
      },
    ],
  },
  {
    title: "3. Embedded Content and Third-Party Services",
    description:
      "The Site includes embedded content from third parties such as Twitch, YouTube, and X (formerly Twitter). These platforms may collect data as per their own policies. The Site is not responsible for third-party content or data collection.",
    items: [
      {
        description:
          "We also use third-party services for analytics and mailing lists, which operate under their own privacy and data policies.",
      },
    ],
  },
  {
    title: "4. Mailing List",
    description:
      "By subscribing to our mailing list, you consent to receive emails from us. You may unsubscribe at any time using the link in the email footer.",
    items: [],
  },
  {
    title: "5. Media Kit Usage",
    description:
      "The media kit is provided for business partners and sponsors. Use of the materials requires explicit permission and compliance with provided guidelines.",
    items: [],
  },
  {
    title: "6. Disclaimers and Limitation of Liability",
    description:
      'The Site and its content are provided "as is" without warranties. We do not guarantee uninterrupted access or error-free operation.',
    items: [
      {
        description:
          "To the fullest extent permitted by law, we disclaim liability for damages arising from use or inability to use the Site.",
      },
    ],
  },
  {
    title: "7. Changes to Terms",
    description:
      "We may update these Terms at any time. Changes will be posted here with the updated date.",
    items: [],
  },
  {
    title: "8. Governing Law",
    description:
      "These Terms are governed by the laws of the jurisdiction where the Site owner operates.",
    items: [],
  },
];

export default function TermsOfUsePage() {
  return (
    <section className='pb-24'>
      <div className='container mx-auto max-w-2xl px-4 lg:max-w-7xl'>
        <div className='mx-auto grid max-w-[65ch] grid-cols-1 items-center xl:max-w-[80ch]'>
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
        </div>
      </div>
    </section>
  );
}
