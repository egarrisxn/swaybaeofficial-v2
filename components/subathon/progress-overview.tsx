import { Card } from "@/components/ui/card";

import { subathonGoals, subathonStats } from "@/lib/subathon";

export function ProgressOverview() {
  const nextGoal = subathonGoals.find((goal) => !goal.completed);
  const nextGoalProgress = nextGoal
    ? (subathonStats.totalPoints / nextGoal.points) * 100
    : 0;
  return (
    <Card className='p-8'>
      <div className='space-y-6'>
        <div className='text-center'>
          <h2 className='mb-2 text-3xl leading-tight font-medium tracking-tight md:text-4xl lg:text-5xl'>
            Current Progress
          </h2>
          <p className='text-base leading-relaxed text-muted-foreground'>
            {subathonStats.totalPoints.toLocaleString()} points earned
            {nextGoal &&
              ` • Next goal: ${nextGoal.points.toLocaleString()} points`}
          </p>
        </div>
        {nextGoal && (
          <div className='space-y-3'>
            <div className='flex justify-between text-sm'>
              <span className='font-serif font-semibold tracking-wide'>
                Progress to {nextGoal.title}
              </span>
              <span className='font-serif font-semibold tracking-wide text-muted-foreground'>
                {nextGoalProgress.toFixed(1)}%
              </span>
            </div>
            <div className='h-3 overflow-hidden rounded-full bg-muted'>
              <div
                className='h-full bg-gradient-to-r from-accent to-primary transition-all duration-500'
                style={{ width: `${Math.min(nextGoalProgress, 100)}%` }}
              />
            </div>
          </div>
        )}
        <div className='grid gap-4 sm:grid-cols-3'>
          <div className='text-center'>
            <div className='mb-1 text-2xl font-bold text-accent'>
              {subathonStats.totalPoints.toLocaleString()}
            </div>
            <div className='font-serif text-sm leading-relaxed font-medium text-foreground'>
              Total Points
            </div>
          </div>
          <div className='text-center'>
            <div className='mb-1 text-2xl font-bold text-accent'>
              {subathonGoals.filter((g) => g.completed).length}
            </div>
            <div className='font-serif text-sm leading-relaxed font-medium text-foreground'>
              Goals Completed
            </div>
          </div>
          <div className='text-center'>
            <div className='mb-1 text-2xl font-bold text-accent'>
              {subathonStats.hoursStreamed}
            </div>
            <div className='font-serif text-sm leading-relaxed font-medium text-foreground'>
              Hours Streamed
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
