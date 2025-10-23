import { LocaleString } from "@/lib/dates";

export default function LastUpdated() {
  return (
    <p className='flex flex-row text-xs font-bold text-muted-foreground md:text-sm'>
      Last Updated:{" "}
      <span className='pl-1 font-medium sm:pl-0.5'>
        <LocaleString />
      </span>
    </p>
  );
}
