import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className='mx-auto grid min-h-dvh w-full place-items-center p-6 md:p-10'>
      <div className='w-full max-w-md'>
        <Card>
          <CardHeader>
            <CardTitle className='text-2xl'>Page not found.</CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-muted-foreground'>
              Could not find requested resource.
            </p>
          </CardContent>
          <CardFooter className='flex items-center justify-end'>
            <Link
              className='cursor-pointer text-sm font-medium text-blue-500 underline-offset-4 transition-all hover:text-blue-400 hover:underline'
              href='/'
            >
              Return Home
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
