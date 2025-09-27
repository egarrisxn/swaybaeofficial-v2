import Image from "next/image";
import { BlurItem } from "@/components/ui/blur";

import { photoGrid } from "@/data/landing";

export default function PhotosSection() {
  return (
    <section
      id='photos'
      aria-labelledby='photos-heading'
      className='pt-24 pb-16'
    >
      <h2 id='photos-heading' className='sr-only'>
        Photos
      </h2>
      <div className='container mx-auto w-full max-w-13xl px-4 xl:px-8 2xl:px-16 4xl:px-4'>
        <div className='grid grid-cols-1'>
          <div className='columns-1 gap-4 sm:columns-2 lg:columns-3 lg:gap-5'>
            {photoGrid.map((src, idx) => (
              <BlurItem key={src} delay={0.25 + idx * 0.05}>
                <div className='group relative mb-4 overflow-hidden rounded-lg border shadow-lg md:mb-6'>
                  <Image
                    className='size-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'
                    src={src}
                    alt={`Public photo ${idx + 1}`}
                    width={800}
                    height={600}
                  />
                </div>
              </BlurItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
