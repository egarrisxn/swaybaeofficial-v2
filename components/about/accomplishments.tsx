import { accomplishmentData } from "@/data/public";

export default function Accomplishments() {
  return (
    <section className='py-12'>
      <div className='container mx-auto my-24 max-w-4xl px-4 md:px-8 lg:px-0 xl:max-w-5xl 2xl:max-w-6xl 4xl:max-w-7xl'>
        <div className='p-1'>
          <div className='mt-4 font-semibold sm:text-lg md:text-2xl lg:text-lg xl:text-3xl'>
            <h2 className='mb-4 font-serif text-[1.5rem] leading-snug font-bold text-[#111827] xl:text-[1.9rem] xl:leading-none dark:text-white'>
              Some accomplishments along the way!
            </h2>
          </div>
          <div className='mt-4 grid grid-cols-1 space-y-6 md:grid-cols-2 md:space-x-12'>
            {accomplishmentData.map((text, index) => (
              <p key={index} className='py-4 leading-6 md:leading-7'>
                <span className='text-slate-500'>&#9864; </span>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
