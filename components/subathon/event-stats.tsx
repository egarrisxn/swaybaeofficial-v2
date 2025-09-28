import { Users } from "lucide-react";
import { Card } from "@/components/ui/card";

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
            <div className='mb-1 text-3xl font-bold text-accent'>6,790,000</div>
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
