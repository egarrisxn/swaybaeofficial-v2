import { Repeat } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
          <Card className='group h-full border-0 bg-card/50 p-6 transition-all hover:scale-[1.02] hover:bg-card hover:shadow-lg'>
            <div className='space-y-4'>
              <div className='flex items-start justify-between gap-4'>
                <Badge variant='outline' className='shrink-0 font-mono text-xs'>
                  Every 10,000
                </Badge>
              </div>
              <h4 className='font-serif text-xl leading-tight font-semibold tracking-tight text-balance md:text-2xl lg:text-3xl'>
                Spin the Condiment Wheel
              </h4>
              <p className='text-base leading-relaxed text-pretty text-muted-foreground'>
                Up to 5 times per day! Condiments include: ketchup, ranch, mayo,
                mustard, franks red hot sauce, bbq sauce, soy sauce, sriracha,
                chocolate syrup, fish sauce, gochujang sauce.
              </p>
            </div>
          </Card>
          <Card className='group h-full border-0 bg-card/50 p-6 transition-all hover:scale-[1.02] hover:bg-card hover:shadow-lg'>
            <div className='space-y-4'>
              <div className='flex items-start justify-between gap-4'>
                <Badge variant='outline' className='shrink-0 font-mono text-xs'>
                  Every 20,000
                </Badge>
              </div>
              <h4 className='font-serif text-xl leading-tight font-semibold tracking-tight text-balance md:text-2xl lg:text-3xl'>
                Song Request Power Hour
              </h4>
              <p className='text-base leading-relaxed text-pretty text-muted-foreground'>
                1 hour of 10 channel point song requests! (Song requests must be
                family-friendly. If Sway at Nite goal is reached, song requests
                will be disabled during that time).
              </p>
            </div>
          </Card>
        </div>
      </div>
    </Card>
  );
}
