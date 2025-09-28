import { Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

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
