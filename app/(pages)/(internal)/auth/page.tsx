import { authWithDiscord, authWithTwitch } from "@/app/actions/auth";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FullYear } from "@/lib/dates";

const DiscordAuthIcon = (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
  >
    <path d='m14.983 3l.123.006c2.014.214 3.527.672 4.966 1.673a1 1 0 0 1 .371.488c1.876 5.315 2.373 9.987 1.451 12.28C20.891 19.452 19.288 21 17.5 21c-.732 0-1.693-.968-2.328-2.045a22 22 0 0 0 2.103-.493a1 1 0 1 0-.55-1.924c-3.32.95-6.13.95-9.45 0a1 1 0 0 0-.55 1.924q1.074.307 2.103.494C8.193 20.031 7.232 21 6.5 21c-1.788 0-3.391-1.548-4.428-3.629c-.888-2.217-.39-6.89 1.485-12.204a1 1 0 0 1 .371-.488C5.367 3.678 6.88 3.22 8.894 3.006a1 1 0 0 1 .935.435l.063.107l.651 1.285l.137-.016a13 13 0 0 1 2.643 0l.134.016l.65-1.284a1 1 0 0 1 .754-.54zM9 10a2 2 0 0 0-1.977 1.697l-.018.154L7 12l.005.15A2 2 0 1 0 9 10m6 0a2 2 0 0 0-1.977 1.697l-.018.154L13 12l.005.15A2 2 0 1 0 15 10'></path>
  </svg>
);

const TwitchAuthIcon = (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    stroke='currentColor'
    strokeLinecap='round'
    strokeLinejoin='round'
    strokeWidth='2'
  >
    <path d='M4 5v11a1 1 0 0 0 1 1h2v4l4-4h5.584c.266 0 .52-.105.707-.293l2.415-2.414c.187-.188.293-.442.293-.708V5a1 1 0 0 0-1-1h-14a1 1 0 0 0-1 1zm12 3v4m-4-4v4'></path>
  </svg>
);

export default function AuthPage() {
  return (
    <div className='mx-auto grid min-h-dvh w-full place-items-center p-6 md:p-10'>
      <div className='w-full max-w-sm'>
        <Card className='bg-white dark:bg-muted'>
          <CardHeader className='space-y-2 py-2 text-center'>
            <CardTitle className='text-4xl font-bold tracking-tight'>
              Welcome!
            </CardTitle>
            <CardDescription className='text-sm text-muted-foreground'>
              Sign in to continue.
            </CardDescription>
          </CardHeader>
          <CardContent className='flex flex-row items-center justify-center gap-3 px-6 pt-3 sm:gap-4'>
            <form action={authWithDiscord}>
              <Button disabled type='submit' className='w-full cursor-pointer'>
                {DiscordAuthIcon}
                Discord
              </Button>
            </form>
            <form action={authWithTwitch}>
              <Button disabled type='submit' className='w-full cursor-pointer'>
                {TwitchAuthIcon}
                Twitch
              </Button>
            </form>
          </CardContent>
          <CardFooter className='flex items-center justify-center px-6 pt-4'>
            <p className='text-center text-sm'>
              &copy; <FullYear /> Sway Bae Official by{" "}
              <a
                href='https://egxo.dev'
                className='cursor-pointer pl-0.5 font-medium text-link/80 transition-colors hover:text-link'
              >
                egxo.dev
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
