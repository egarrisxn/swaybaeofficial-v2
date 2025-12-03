import type { Metadata } from "next";
import {
  SubathonHeader24,
  SubathonDetails,
  GoalsList,
  Incentives,
  TopContributors,
} from "@/components/subathon/2024";

export const metadata: Metadata = {
  title: "Subathon 2024!",
  description: "A recap of the 2024 Subathon!",
};

export default function Subathon2024Page() {
  return (
    <section>
      <SubathonHeader24 />
      <div className='mx-auto max-w-7xl space-y-12 px-4 pb-16 sm:space-y-16 sm:px-6'>
        <SubathonDetails />
        <GoalsList />
        <div className='grid grid-cols-1 gap-12 px-4 sm:px-8 lg:grid-cols-2 lg:gap-8 xl:gap-10 2xl:gap-12'>
          <Incentives />
          <TopContributors />
        </div>
      </div>
    </section>
  );
}
