import StatsCount from "@/components/ui/stats-count";
import { statData } from "@/data/public";

export default function Stats() {
  return (
    <section className='w-full bg-slate-100 py-12 dark:bg-slate-950'>
      <div className='container mx-auto px-4'>
        <StatsCount
          stats={statData}
          title='SOME USELESS STATTISTICS FOR YOU WITH FAKE DATA FOR NOW'
          showDividers={true}
          className=''
        />
      </div>
    </section>
  );
}
