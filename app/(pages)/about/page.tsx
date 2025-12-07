import type { Metadata } from "next";
import ComingSoon from "@/components/shared/coming-soon";

export const metadata: Metadata = {
  title: "About",
  description: "About page coming soon.",
};

export default function AboutPage() {
  return <ComingSoon />;
}

// import AboutMeSwap from "@/components/about/about-me-swap";
// import AboutStats from "@/components/about/about-stats";
// import ProfessionalInfo from "@/components/about/about-info";
// import Accomplishments from "@/components/about/accomplishments";
// import BrandsCarousel from "@/components/about/brands-carousel";

// export default function AboutPage() {
//   return (
//     <div className='w-full py-12'>
//       <AboutMeSwap />
//       <AboutStats />
//       <Accomplishments />
//       <BrandsCarousel />
//       <ProfessionalInfo />
//     </div>
//   );
// }
