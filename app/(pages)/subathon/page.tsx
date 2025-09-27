import {
  SubathonHeader,
  ProgressOverview,
  GoalsList,
  PointSystem,
  RecurringGoals,
  EventStats,
  SubathonSendoff,
} from "@/components/subathon";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subathon!",
  description:
    "Celebrate Swaybae's Subathon! Join the community for marathon streams, exclusive content, and fun rewards for subscribers.",
};

export default function SubathonPage() {
  return (
    <section className='size-full bg-[url(/graphics/noisey.svg)] bg-repeat'>
      <SubathonHeader />

      <div className='mx-auto max-w-7xl space-y-16 px-6'>
        <ProgressOverview />
        <GoalsList />

        <div className='grid gap-8 lg:grid-cols-[2fr_3fr]'>
          <PointSystem />
          <RecurringGoals />
        </div>

        <EventStats />
      </div>
      <SubathonSendoff />
    </section>
  );
}
