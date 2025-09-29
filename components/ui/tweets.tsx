"use client";

import type { HTMLAttributes } from "react";
import { Tweet } from "react-tweet";

interface TweetsProps extends HTMLAttributes<HTMLDivElement> {
  tweets: string[];
}

const Tweets = ({ tweets }: TweetsProps) => {
  if (!tweets?.length) return null;

  return (
    <div className='mx-auto grid grid-cols-1 gap-1 lg:grid-cols-3 lg:gap-1 xl:gap-6'>
      {tweets.map((tweetId, i) => (
        <div key={`${tweetId}-${i}`}>
          <Tweet id={tweetId} />
        </div>
      ))}
    </div>
  );
};

export { Tweets };
