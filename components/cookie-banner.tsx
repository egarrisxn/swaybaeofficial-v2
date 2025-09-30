"use client";

import { Button } from "@/components/ui/button";

import { useCookies } from "@/hooks/use-cookies";

export function CookieBanner() {
  const { consent, setConsent, loading } = useCookies();

  if (loading || consent !== null) return null;

  return (
    <div className='fixed inset-x-0 bottom-0 z-50 mx-auto my-4 max-w-fit px-4'>
      <div className='flex flex-row items-center justify-between gap-2 rounded-full border border-b-3 border-foreground border-b-foreground/90 bg-card px-4 py-3 text-card-foreground shadow-xl'>
        <p className='mr-3 text-sm'>
          This site uses cookies. See my{" "}
          <a href='/cookies' className='underline'>
            cookies policy
          </a>
          .
        </p>
        <div className='flex gap-2'>
          <Button variant='outline' onClick={() => setConsent(false)}>
            Decline
          </Button>
          <Button onClick={() => setConsent(true)}>Accept</Button>
        </div>
      </div>
    </div>
  );
}
