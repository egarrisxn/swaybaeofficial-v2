import { LandingNavbar } from "@/components/landing/landing-navbar";
import { LandingFooter } from "@/components/landing/landing-footer";
import { ScrollUpButton } from "@/components/shared/scroll-up-button";
import { SectionDivider } from "@/components/shared/section-divider";
import HeroSection from "@/components/landing/hero-section";
import AboutSection from "@/components/landing/about-section";
import YouTubeSection from "@/components/landing/youtube-section";
import TwitterSection from "@/components/landing/twitter-section";
import CalendarSection from "@/components/landing/calendar-section";
import MerchSection from "@/components/landing/merch-section";
import BlogSection from "@/components/landing/blog-section";
import SocialsSection from "@/components/landing/socials-section";
import ContactSection from "@/components/landing/contact-section";
import PhotosSection from "@/components/landing/photos-section";

export default function LandingPage() {
  return (
    <div className='relative grid min-h-dvh w-full grid-rows-[auto_1fr_auto] overscroll-contain'>
      <LandingNavbar />
      <main>
        <HeroSection />
        <AboutSection />
        <YouTubeSection />
        <TwitterSection />
        <SectionDivider className='stroke-secondary' />
        <CalendarSection />
        <SectionDivider className='stroke-accent' />
        <MerchSection />
        <SectionDivider className='stroke-primary' />
        <BlogSection />
        <SocialsSection />
        <ContactSection />
        <PhotosSection />
      </main>
      <LandingFooter />
      <ScrollUpButton targetId='hero' />
    </div>
  );
}
