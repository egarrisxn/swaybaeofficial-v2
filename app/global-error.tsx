"use client";

import { useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
            <Card>
              <CardHeader>
                <CardTitle className='text-2xl'>
                  Sorry, something went wrong.
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground'>
                  An unspecified error occurred.
                </p>
              </CardContent>
              <CardFooter className='flex items-center justify-end'>
                <button
                  className='cursor-pointer text-sm font-medium text-blue-500 underline-offset-4 transition-all hover:text-blue-400 hover:underline'
                  onClick={() => reset()}
                >
                  Try again
                </button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </body>
    </html>
  );
}
