"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className='mx-auto grid min-h-dvh w-full place-items-center p-6 md:p-10'>
          <div className='w-full max-w-md'>
            <div className='flex flex-col gap-6 rounded-xl border border-b-2 border-border border-b-border/90 bg-card py-6 text-card-foreground shadow-2xl'>
              <div className='grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6'>
                <h1 className='text-2xl leading-none font-semibold'>
                  Something went wrong.
                </h1>
              </div>
              <div className='px-6'>
                <p className='text-sm text-muted-foreground'>
                  An unspecified error occurred.
                </p>
              </div>
              <div className='flex items-center justify-end px-6 [.border-t]:pt-6'>
                <button
                  className='cursor-pointer text-sm font-medium text-link underline-offset-4 transition-all hover:text-link/80 hover:underline'
                  onClick={() => reset()}
                >
                  Try again
                </button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
