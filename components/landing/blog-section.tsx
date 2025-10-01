import Image from "next/image";
import { Link } from "next-view-transitions";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@/components/icons";

import type { TextBlurb } from "@/types";

const blogText: TextBlurb = {
  heading: "Latest blog posts",
  button: "Read More",
};

interface Blog {
  id: string;
  title: string;
  href: string;
}

const blogList: Blog[] = [
  {
    id: "#2",
    title: "The best FREE Ways to Support Your Favorite Content Creators!",
    href: "#",
  },
  {
    id: "#1",
    title: "Sway Starts a BLOG!",
    href: "#",
  },
];

export default function BlogSection() {
  return (
    <section
      id='blog'
      aria-labelledby='blog-heading'
      className='pt-24 4xl:pt-40'
    >
      <div className='container mx-auto grid max-w-lg grid-cols-1 gap-24 px-4 md:max-w-7xl md:grid-cols-2 md:gap-8 md:px-8 2xl:gap-12 2xl:px-16'>
        <div className='order-1 mx-auto flex w-full max-w-lg flex-col justify-center gap-3 px-4 md:order-2 lg:justify-start lg:gap-2 lg:pt-20 4xl:max-w-[34rem]'>
          <h2
            id='blog-heading'
            className='px-3 pb-1 font-serif text-2xl font-bold tracking-tight text-muted-foreground text-shadow-lg xs:text-base sm:text-3xl sm:leading-none xl:text-4xl 2xl:pb-4 4xl:text-[2.6rem]'
          >
            {blogText.heading}
          </h2>
          <div>
            {blogList.map(({ id, title, href }, index) => (
              <div
                key={id}
                className='mt-4 mb-0.5 border-b border-foreground pb-4 lg:mt-8 lg:px-4 lg:pb-8'
              >
                <Link href={href}>
                  <div className='group flex flex-row items-center gap-4 font-light'>
                    <span className='flex w-fit p-1 text-3xl font-bold text-primary'>
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className='line-clamp-2 flex-1 text-sm font-light group-hover:underline group-hover:underline-offset-4 sm:text-base'>
                      {title}
                    </p>
                    <div className='flex w-fit items-center p-1'>
                      <ArrowRightIcon
                        width={16}
                        height={16}
                        strokeWidth={1.5}
                        className='-translate-x-1 transition-all duration-300 ease-out group-hover:translate-x-1 group-hover:scale-x-105'
                      />
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          <Link href='/blog' className='mt-12 flex items-center px-4'>
            <Button variant='contrast' size='lg'>
              {blogText.button}
            </Button>
          </Link>
        </div>
        <div className='order-2 mx-auto flex items-center justify-center px-3 md:order-1'>
          <Image
            src='/images/sway-blog.png'
            alt='Another cutout photo of Sway'
            width={600}
            height={1200}
            className='max-w-80 xs:max-w-92 lg:max-w-[30rem]'
          />
        </div>
      </div>
    </section>
  );
}
