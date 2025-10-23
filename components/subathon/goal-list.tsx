import { CheckCircle, Clock, Zap, ExternalLinkIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import { subathonGoals, subathonStats } from "@/lib/subathon";

export function GoalsList() {
  const completedGoals = subathonGoals.filter((goal) => goal.completed);
  const activeGoals = subathonGoals.filter((goal) => !goal.completed);
  return (
    <section className='space-y-8'>
      <div className='text-center'>
        <h2 className='mb-4 text-3xl leading-tight font-medium tracking-tight md:text-4xl lg:text-5xl'>
          Point Goals
        </h2>
        <p className='text-base leading-relaxed text-balance text-muted-foreground'>
          Unlock amazing content and crazy challenges as we hit each milestone.
        </p>
      </div>
      <div className='grid gap-6'>
        {/* Active Goals */}
        <div className='space-y-4'>
          <div className='flex items-center gap-3'>
            <div className='rounded-full bg-primary p-1.5'>
              <Clock className='size-4 text-success-foreground' />
            </div>
            <h3 className='text-xl font-medium tracking-tight md:text-2xl lg:text-3xl'>
              Upcoming Goals
            </h3>
            <Badge variant='secondary'>{activeGoals.length}</Badge>
          </div>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {activeGoals.slice(0, 9).map((goal, index) => {
              const progressPercentage =
                (subathonStats.totalPoints / goal.points) * 100;
              return (
                <Card
                  key={index}
                  className='group h-full border-0 bg-card/50 p-6 transition-all hover:scale-[1.02] hover:bg-card hover:shadow-lg'
                >
                  <div className='flex h-full flex-col space-y-4'>
                    <div className='flex items-start justify-between gap-4'>
                      <Badge
                        variant='outline'
                        className='shrink-0 font-mono text-xs'
                      >
                        {goal.points.toLocaleString()} pts
                      </Badge>
                      <Badge className='shrink-0 bg-primary text-success-foreground'>
                        <Clock className='mr-1 size-3' />
                        Locked
                      </Badge>
                    </div>
                    <h4 className='font-serif text-xl leading-tight font-semibold tracking-tight text-balance md:text-2xl lg:text-3xl'>
                      {goal.title}
                    </h4>
                    <p className='flex-1 text-base leading-relaxed text-pretty text-muted-foreground'>
                      {goal.description}
                    </p>
                    <div className='space-y-2'>
                      <div className='flex justify-between text-sm'>
                        <span className='font-serif font-semibold'>
                          {subathonStats.totalPoints.toLocaleString()} pts
                        </span>
                        <span className='font-serif font-semibold text-muted-foreground'>
                          {progressPercentage.toFixed(1)}%
                        </span>
                      </div>
                      <div className='h-2 overflow-hidden rounded-full bg-muted'>
                        <div
                          className='h-full bg-linear-to-r from-primary/20 via-primary/50 to-primary/80 transition-all duration-500'
                          style={{
                            width: `${Math.min(progressPercentage, 100)}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          {activeGoals.length > 9 && (
            <div className='text-center'>
              <Badge variant='outline' className='text-sm'>
                +{activeGoals.length - 9} more subathonGoals to unlock
              </Badge>
            </div>
          )}
        </div>

        {/* Completed Goals */}
        {completedGoals.length > 0 && (
          <div className='space-y-4'>
            <div className='flex items-center gap-3'>
              <div className='rounded-full bg-success p-1.5'>
                <CheckCircle className='size-4 text-success-foreground' />
              </div>
              <h3 className='text-xl font-medium tracking-tight md:text-2xl lg:text-3xl'>
                Completed Goals
              </h3>
              <Badge variant='secondary'>{completedGoals.length}</Badge>
            </div>
            <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
              {completedGoals.map((goal, index) => (
                <Card
                  key={index}
                  className='group h-full border-0 bg-card/50 p-6 transition-all hover:scale-[1.02] hover:bg-card hover:shadow-lg'
                >
                  <div className='flex h-full flex-col space-y-4'>
                    <div className='flex items-start justify-between gap-4'>
                      <Badge
                        variant='outline'
                        className='shrink-0 font-mono text-xs'
                      >
                        {goal.points.toLocaleString()} pts
                      </Badge>
                      <Badge className='shrink-0 bg-success text-success-foreground'>
                        <CheckCircle className='mr-1 size-3' />
                        Complete
                      </Badge>
                    </div>
                    <h4 className='font-serif text-xl leading-tight font-semibold tracking-tight text-balance md:text-2xl lg:text-3xl'>
                      {goal.title}
                    </h4>
                    <div className='flex-1 gap-2 text-base leading-relaxed text-pretty text-muted-foreground'>
                      <p>{goal.description}</p>
                      {goal.link && (
                        <a
                          href={goal.link}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='flex flex-row items-center gap-1.5 leading-loose font-semibold text-link/90 hover:text-link'
                        >
                          {goal.link.includes("youtube.com") ||
                          goal.link.includes("youtu.be")
                            ? "Watch Highlight"
                            : goal.link.includes("twitch.tv")
                              ? "Watch Clip"
                              : "Video Link"}
                          <ExternalLinkIcon
                            strokeWidth={2.5}
                            className='size-3.5'
                          />
                        </a>
                      )}
                    </div>
                    <div>
                      <div className='h-2 overflow-hidden rounded-full bg-success/20'>
                        <div className='size-full bg-success' />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export function PointSystem() {
  return (
    <Card className='p-8'>
      <div className='space-y-6'>
        <div className='flex items-center gap-3'>
          <div className='rounded-full bg-primary p-2.5'>
            <Zap className='size-5 text-primary-foreground' />
          </div>
          <h2 className='text-xl font-medium tracking-tight md:text-2xl lg:text-3xl'>
            How Points Work
          </h2>
        </div>
        <div className='grid gap-8'>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-foreground'>
              Point Values
            </h3>
            <div className='space-y-2'>
              <div className='flex justify-between'>
                <span>1 Bit</span>
                <span className='font-mono'>1 point</span>
              </div>
              <div className='flex justify-between'>
                <span>$1 Donation</span>
                <span className='font-mono'>100 points</span>
              </div>
              <div className='flex justify-between'>
                <span>Tier 1/Prime Sub</span>
                <span className='font-mono'>600 points</span>
              </div>
              <div className='flex justify-between'>
                <span>Tier 2 Sub</span>
                <span className='font-mono'>1,000 points</span>
              </div>
              <div className='flex justify-between'>
                <span>Tier 3 Sub</span>
                <span className='font-mono'>2,500 points</span>
              </div>
            </div>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-foreground'>
              Multi-Month Bonuses
            </h3>
            <div className='space-y-2'>
              <div className='flex justify-between'>
                <span>3 Month Sub</span>
                <span className='font-mono'>+50% points</span>
              </div>
              <div className='flex justify-between'>
                <span>6 Month Sub</span>
                <span className='font-mono'>+100% points</span>
              </div>
              <div className='flex justify-between'>
                <span>12 Month Sub</span>
                <span className='font-mono'>+200% points</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
