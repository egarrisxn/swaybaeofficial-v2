import type { Metadata } from "next";
import {
  SubathonHeader,
  ProgressOverview,
  GoalsList,
  PointSystem,
  RecurringGoals,
  EventStats,
  SubathonSendoff,
} from "@/components/subathon";

export const metadata: Metadata = {
  title: "Subathon!",
  description:
    "Celebrate Sway Bae's Subathon! Join the community for jammed packed set of streams, exclusive content, and fun rewards for subscribers.",
};

export default function SubathonPage() {
  return (
    <section>
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
