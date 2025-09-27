import {
  CheckCircle,
  Clock,
  Users,
  Repeat,
  Zap,
  ExternalLinkIcon,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TwitchIcon } from "@/components/icons";
import { goals, currentStats, recurringGoals } from "@/data/subathon";

export function SubathonHeader() {
  return (
    <section className='relative overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent dark:from-transparent dark:via-accent/5 dark:to-transparent' />
      <div className='relative px-6 py-24 md:pt-28 md:pb-32 lg:pt-36 lg:pb-40'>
        <div className='mx-auto max-w-4xl text-center'>
          <div className='mx:py-2 mb-8 inline-flex items-center gap-1.5 rounded-full border bg-card px-3 py-1.5 text-xs font-medium text-card-foreground md:gap-2 md:px-4 md:text-sm'>
            <Clock className='size-3 text-accent md:size-3.5' />
            <span className='text-muted-foreground'>Happening Now!</span>
          </div>
          <h1 className='bg-gradient-to-br from-foreground via-foreground to-accent bg-clip-text pt-1 pb-6 text-[2.5rem] leading-none font-bold tracking-tight text-transparent text-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>
            {`Sway's Subathon`}
            <br />
            {`Extravaganza!`}
          </h1>
          <p className='mb-12 text-lg leading-relaxed text-balance text-muted-foreground md:text-xl'>
            Join the ultimate streaming marathon with point-based goals, crazy
            challenges, and non-stop entertainment
          </p>
          <div className='flex flex-col items-center gap-6 sm:flex-row sm:justify-center'>
            <a
              href='https://www.twitch.tv/sway_bae'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button
                size='dynamic'
                className='text-white transition-all hover:scale-103'
              >
                <TwitchIcon className='size-3.5 md:size-4.5' />
                Watch Live
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ProgressOverview() {
  const nextGoal = goals.find((goal) => !goal.completed);
  const nextGoalProgress = nextGoal
    ? (currentStats.totalPoints / nextGoal.points) * 100
    : 0;
  return (
    <Card className='p-8'>
      <div className='space-y-6'>
        <div className='text-center'>
          <h2 className='mb-2 text-3xl leading-tight font-medium tracking-tight md:text-4xl lg:text-5xl'>
            Current Progress
          </h2>
          <p className='text-base leading-relaxed text-muted-foreground'>
            {currentStats.totalPoints.toLocaleString()} points earned
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
              {currentStats.totalPoints.toLocaleString()}
            </div>
            <div className='font-serif text-sm leading-relaxed font-medium text-foreground'>
              Total Points
            </div>
          </div>
          <div className='text-center'>
            <div className='mb-1 text-2xl font-bold text-accent'>
              {goals.filter((g) => g.completed).length}
            </div>
            <div className='font-serif text-sm leading-relaxed font-medium text-foreground'>
              Goals Completed
            </div>
          </div>
          <div className='text-center'>
            <div className='mb-1 text-2xl font-bold text-accent'>
              {currentStats.hoursStreamed}
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

export function GoalsList() {
  const completedGoals = goals.filter((goal) => goal.completed);
  const activeGoals = goals.filter((goal) => !goal.completed);
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
            <div className='rounded-full bg-accent p-1.5'>
              <Clock className='size-4 text-accent-foreground' />
            </div>
            <h3 className='text-xl font-medium tracking-tight md:text-2xl lg:text-3xl'>
              Upcoming Goals
            </h3>
            <Badge variant='secondary'>{activeGoals.length}</Badge>
          </div>
          <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
            {activeGoals.slice(0, 9).map((goal, index) => {
              const progressPercentage =
                (currentStats.totalPoints / goal.points) * 100;
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
                      <Badge className='shrink-0 bg-accent text-accent-foreground'>
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
                          {currentStats.totalPoints.toLocaleString()} pts
                        </span>
                        <span className='font-serif font-semibold text-muted-foreground'>
                          {progressPercentage.toFixed(1)}%
                        </span>
                      </div>
                      <div className='h-2 overflow-hidden rounded-full bg-muted'>
                        <div
                          className='h-full bg-gradient-to-r from-accent to-primary transition-all duration-500'
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
                +{activeGoals.length - 9} more goals to unlock
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

export function RecurringGoals() {
  return (
    <Card className='border-0 bg-transparent p-8 shadow-none'>
      <div className='space-y-6'>
        <div className='flex items-center gap-3'>
          <div className='rounded-full bg-accent p-2'>
            <Repeat className='size-5 text-accent-foreground' />
          </div>
          <h2 className='text-xl font-medium tracking-tight md:text-2xl lg:text-3xl'>
            Recurring Goals
          </h2>
        </div>
        <div className='grid gap-4 md:grid-cols-2'>
          {recurringGoals.map((goal, index) => (
            <Card
              key={index}
              className='group h-full border-0 bg-card/50 p-6 transition-all hover:scale-[1.02] hover:bg-card hover:shadow-lg'
            >
              <div className='space-y-4'>
                <div className='flex items-start justify-between gap-4'>
                  <Badge
                    variant='outline'
                    className='shrink-0 font-mono text-xs'
                  >
                    Every {goal.interval.toLocaleString()}
                  </Badge>
                </div>
                <h4 className='font-serif text-xl leading-tight font-semibold tracking-tight text-balance md:text-2xl lg:text-3xl'>
                  {goal.title}
                </h4>
                <p className='text-base leading-relaxed text-pretty text-muted-foreground'>
                  {goal.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function EventStats() {
  return (
    <Card className='p-8'>
      <div className='space-y-6'>
        <div className='flex items-center gap-3'>
          <div className='rounded-full bg-primary p-2.5'>
            <Users className='size-5 text-primary-foreground' />
          </div>
          <h2 className='text-xl font-medium tracking-tight md:text-2xl lg:text-3xl'>
            Event Stats
          </h2>
        </div>
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          <div className='text-center'>
            <div className='mb-1 text-3xl font-bold text-accent'>22</div>
            <div className='font-serif text-sm leading-relaxed font-medium text-foreground'>
              Goals to Finish
            </div>
          </div>
          <div className='text-center'>
            <div className='mb-1 text-3xl font-bold text-accent'>1,113,200</div>
            <div className='font-serif text-sm leading-relaxed font-medium text-foreground'>
              Points to Hit
            </div>
          </div>
          <div className='text-center'>
            <div className='mb-1 text-3xl font-bold text-accent'>5</div>
            <div className='font-serif text-sm leading-relaxed font-medium text-foreground'>
              Epic Days
            </div>
          </div>
          <div className='text-center'>
            <div className='mb-1 text-3xl font-bold text-accent'>∞</div>
            <div className='font-serif text-sm leading-relaxed font-medium text-foreground'>
              Memories to Make
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function SubathonSendoff() {
  return (
    <section className='bg-gradient-to-t from-transparent via-primary/5 to-transparent px-6 py-24 text-center md:py-32 lg:py-40 dark:from-transparent dark:via-accent/5 dark:to-transparent'>
      <h2 className='mb-4 text-3xl font-bold md:text-4xl lg:text-5xl'>
        Thank You for Joining!
      </h2>
      <p className='mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl'>
        {` Your support, energy, and points make this Subathon unforgettable! Every
        cheer, sub, and donation brings us closer to the next goal. Let's make
        memories that last forever!`}
      </p>
      <a
        href='https://www.twitch.tv/sway_bae'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Button
          size='dynamic'
          className='text-white transition-all hover:scale-103'
        >
          {`Let's Keep the Fun Going!`}
        </Button>
      </a>
    </section>
  );
}
