import type { Metadata } from "next";
import {
  SubathonHeader25,
  ProgressOverview,
  GoalsList,
  PointSystem,
  RecurringGoals,
  EventStats,
  SubathonSendoff,
} from "@/components/subathon/2025";

export const metadata: Metadata = {
  title: "Subathon 2025!",
  description: "A recap of the 2025 Subathon!",
};

export default function Subathon2025Page() {
  return (
    <section>
      <SubathonHeader25 />
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
