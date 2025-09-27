import {
  SubathonHeader,
  ProgressOverview,
  GoalsList,
  PointSystem,
  RecurringGoals,
  CommunityStats,
} from "@/components/subathon";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subathon!",
  description:
    "Celebrate Swaybae's Subathon! Join the community for marathon streams, exclusive content, and fun rewards for subscribers.",
};

// export const metadata: Metadata = {
//   title: "Subathon",
//   description:
//     "Celebrate Swaybae's Subathon! Join the community for marathon streams, exclusive content, and fun rewards for subscribers.",
//   openGraph: {
//     title: " Sway Bae's 2025 Subathon!",
//     description:
//       "Celebrate Swaybae's Subathon! Join the community for marathon streams, exclusive content, and fun rewards for subscribers.",
//     url: "https://swaybae.net/subathon",
//     images: [
//       {
//         url: "https://swaybae.net/other/faces.png",
//         width: 1200,
//         height: 630,
//         alt: "Swaybae Subathon event",
//       },
//     ],
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: " Sway Bae's 2025 Subathon!",
//     description:
//       "Celebrate Swaybae's Subathon! Join the community for marathon streams, exclusive content, and fun rewards for subscribers.",
//     images: ["https://swaybae.net/other/faces.png"],
//   },
// };

export default function SubathonPage() {
  return (
    <section className='size-full bg-[url(/graphics/noisey.svg)] bg-repeat'>
      <SubathonHeader />

      <div className='mx-auto max-w-7xl space-y-16 px-6 pb-24'>
        <ProgressOverview />
        <GoalsList />

        <div className='grid gap-8 lg:grid-cols-[2fr_3fr]'>
          <PointSystem />
          <RecurringGoals />
        </div>

        <CommunityStats />
      </div>
    </section>
  );
}
