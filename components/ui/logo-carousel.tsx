"use client";

import { useEffect, useMemo, useState, type JSX } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

interface Brands {
  id: number;
  name: string;
  src: string;
  href: string;
}

const brandsData: Brands[] = [
  {
    id: 1,
    name: "YouTube",
    src: "/brands/youtube.png",
    href: "https://youtube.com",
  },
  { id: 2, name: "GCX", src: "/brands/gcx.png", href: "https://gcxevent.com" },
  {
    id: 3,
    name: "Hello Fresh",
    src: "/brands/hellofresh.png",
    href: "https://hellofresh.com",
  },
  {
    id: 4,
    name: "Twitch",
    src: "/brands/twitch.png",
    href: "https://twitch.tv",
  },
  {
    id: 5,
    name: "1000 Dreams Fund",
    src: "/brands/1000dreams.png",
    href: "https://1000dreamsfund.org",
  },
  {
    id: 6,
    name: "Super Girl Gamer Pro",
    src: "/brands/supergirl.png",
    href: "https://supergirlgamerpro.com",
  },
  {
    id: 7,
    name: "Blizzard",
    src: "/brands/blizzard.png",
    href: "https://blizzard.com",
  },
  {
    id: 8,
    name: "Dreamhack",
    src: "/brands/dreamhack.png",
    href: "https://dreamhack.com",
  },
];

interface BrandWithImg extends Brands {
  img: (props: { className?: string }) => JSX.Element;
}

function shuffleArray(array: BrandWithImg[]): BrandWithImg[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function distributeLogos(
  allLogos: BrandWithImg[],
  columnCount: number
): BrandWithImg[][] {
  const shuffled = shuffleArray(allLogos);
  const columns: BrandWithImg[][] = Array.from(
    { length: columnCount },
    () => []
  );

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo);
  });

  const maxLength = Math.max(...columns.map((col) => col.length));
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
    }
  });

  return columns;
}

interface LogoColumnProps {
  logos: BrandWithImg[];
  index: number;
  currentTime: number;
}

function LogoColumn({ logos, index, currentTime }: LogoColumnProps) {
  const cycleInterval = 3000;
  const columnDelay = index * 200;
  const adjustedTime =
    (currentTime + columnDelay) % (cycleInterval * logos.length);
  const currentIndex = Math.floor(adjustedTime / cycleInterval);
  const LogoImage = logos[currentIndex].img;

  return (
    <motion.div
      className='relative h-16 w-16 overflow-hidden sm:h-20 sm:w-20 md:h-40 md:w-40'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
    >
      <AnimatePresence mode='wait'>
        <motion.div
          key={`${logos[currentIndex].id}-${currentIndex}`}
          className='absolute inset-0 flex items-center justify-center'
          initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
          animate={{
            y: "0%",
            opacity: 1,
            filter: "blur(0px)",
            transition: {
              type: "spring",
              stiffness: 300,
              damping: 20,
              mass: 1,
              bounce: 0.2,
              duration: 0.5,
            },
          }}
          exit={{
            y: "-20%",
            opacity: 0,
            filter: "blur(6px)",
            transition: {
              type: "tween",
              ease: "easeIn",
              duration: 0.3,
            },
          }}
        >
          <LogoImage className='h-12 max-h-[80%] w-12 max-w-[80%] object-contain sm:h-16 sm:w-16 md:h-32 md:w-32' />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}

function LogoCarousel({ columnCount = 2 }: { columnCount?: number }) {
  const [logoSets, setLogoSets] = useState<BrandWithImg[][]>([]);
  const [currentTime, setCurrentTime] = useState(0);

  const allLogos = useMemo((): BrandWithImg[] => {
    return brandsData.map((brand) => ({
      ...brand,
      img: ({ className }: { className?: string }) => (
        <Image
          width={400}
          height={400}
          src={brand.src}
          alt={brand.name}
          className={className}
        />
      ),
    }));
  }, []);

  useEffect(() => {
    setLogoSets(distributeLogos(allLogos, columnCount));
  }, [allLogos, columnCount]);

  useEffect(() => {
    const intervalId = setInterval(() => setCurrentTime((t) => t + 100), 100);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='flex space-x-4 md:space-x-8 lg:space-x-12 xl:space-x-16'>
      {logoSets.map((logos, index) => (
        <LogoColumn
          key={index}
          logos={logos}
          index={index}
          currentTime={currentTime}
        />
      ))}
    </div>
  );
}

export { LogoCarousel };
