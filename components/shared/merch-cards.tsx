"use client";

import Image from "next/image";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, PanInfo } from "motion/react";

interface Merch {
  id: string;
  title: string;
  src?: string;
}

const merchCards: Merch[] = [
  {
    id: "School of Math Sweatshirt",
    title: "School of Math Sweatshirt",
    src: "/merch/sweatshirt.webp",
  },

  {
    id: "Pog Bottle",
    title: "Pog Bottle",
    src: "/merch/bottle.webp",
  },
  {
    id: "Bae Squad Dad Cap",
    title: "Bae Squad Dad Cap",
    src: "/merch/cap.webp",
  },
  {
    id: "School of Math Notebook",
    title: "School of Math Notebook",
    src: "/merch/notebook.webp",
  },
  {
    id: "Pog Long Sleeve",
    title: "Pog Long Sleeve",
    src: "/merch/ls.webp",
  },
  {
    id: "Not a Phase Crewneck",
    title: "Not a Phase Crewneck",
    src: "/merch/crew.webp",
  },
  {
    id: "Bae Squad Band Hoodie",
    title: "Bae Squad Band Hoodie",
    src: "/merch/hood.webp",
  },
  {
    id: "Blue Squad Band Tee",
    title: "Blue Squad Band Tee",
    src: "/merch/ss.webp",
  },
];

export function MerchCards() {
  const [stack, setStack] = useState(merchCards);
  const [isSwiping, setIsSwiping] = useState(false);
  const autoSwipeTimeout = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleSwipeComplete = useCallback(
    (direction: "left" | "right") => {
      if (isSwiping) return;
      setIsSwiping(true);

      setStack((prev) => {
        if (direction === "left") {
          return [...prev.slice(1), prev[0]];
        } else {
          return [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)];
        }
      });

      setTimeout(() => setIsSwiping(false), 300);
    },
    [isSwiping]
  );

  useEffect(() => {
    autoSwipeTimeout.current = setInterval(
      () => handleSwipeComplete("left"),
      4000
    );
    return () => {
      if (autoSwipeTimeout.current) clearInterval(autoSwipeTimeout.current);
    };
  }, [handleSwipeComplete]);

  return (
    <div className='relative h-96 w-72 sm:h-120 sm:w-96'>
      {stack.map((card, index) => {
        const isTopCard = index === 0;
        return (
          <motion.div
            key={card.id}
            className='absolute flex size-full flex-col justify-end overflow-hidden rounded-3xl border border-b-3 border-foreground border-b-foreground/90 bg-card shadow-xl'
            style={{ zIndex: stack.length - index }}
            animate={{
              scale: 1 - index * 0.03,
              x: index * 6,
              rotate: index * 1.5,
              y: index * 6,
            }}
            drag={isTopCard ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.25}
            onDragEnd={(
              _event: MouseEvent | TouchEvent | PointerEvent,
              info: PanInfo
            ) => {
              if (!isTopCard || isSwiping) return;
              if (info.offset.x < -50) handleSwipeComplete("left");
              else if (info.offset.x > 50) handleSwipeComplete("right");
            }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
          >
            <div className='relative flex-1'>
              <Image
                src={card.src || "/other/image-not-found.png"}
                alt={card.title}
                fill
                className='pointer-events-none object-cover'
              />
              <div className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent pr-4 pb-4'>
                <span className='flex h-28 items-end justify-end font-semibold text-white'>
                  {card.title}
                </span>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
