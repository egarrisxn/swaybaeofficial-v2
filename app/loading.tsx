import { LoaderIcon } from "@/components/icons";

export default function Loading() {
  return (
    <div className='mx-auto grid min-h-dvh w-full place-items-center p-6 md:p-10'>
      <div className='w-full max-w-md'>
        <div className='flex w-full flex-row items-center justify-center gap-1.5'>
          <LoaderIcon className='size-5 animate-spin' />
          <p className='text-lg font-medium'>Loading...</p>
        </div>
      </div>
    </div>
  );
}
