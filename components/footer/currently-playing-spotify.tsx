import type { ReactNode } from "react";
import { Link } from "next-view-transitions";
import { getNowPlayingItem } from "@/app/actions/spotify";
import { mockSpotifyNowPlaying } from "@/lib/mock/data";

import type { Spotify } from "@/types/spotify";

const favorite: Spotify = {
  albumImageUrl:
    "https://i.scdn.co/image/ab67616d0000b2735689457006627002c29800ca",
  albumName: "Blood, Hair, And Eyeballs",
  albumId: "3BQK669H6FrqGVd7YtxNIs",
  artist: "Alkaline Trio",
  artistId: "1aEYCT7t18aM3VvM6y8oVR",
  songUrl: "https://open.spotify.com/track/1QzdUCuGse7e2o7oxBHJR6",
  title: "Bad Time",
  isPlaying: false,
};

interface RecordProps {
  albumImageUrl: string;
  isPlaying: boolean;
}

function Record({ albumImageUrl, isPlaying }: RecordProps) {
  return (
    <svg
      width='180'
      height='180'
      viewBox='0 0 180 180'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={isPlaying ? "animate-spin-slow" : ""}
    >
      <circle cx='90' cy='90' r='90' fill='#3C3C3F' />
      <image
        href={albumImageUrl}
        x='55'
        y='55'
        width='70'
        height='70'
        clipPath='url(#albumClip)'
      />
      <defs>
        <clipPath id='albumClip'>
          <circle cx='90' cy='90' r='35' />
        </clipPath>
      </defs>
    </svg>
  );
}

interface SpotifyContainerProps {
  children: ReactNode;
  className?: string;
  hideOverflow?: boolean;
  linkTo?: string;
}

function SpotifyContainer({
  children,
  className = "",
  hideOverflow = true,
  linkTo,
}: SpotifyContainerProps) {
  const cardContent = (
    <div
      className={`group relative flex flex-col ${
        hideOverflow && "overflow-hidden"
      } col-span-7 row-span-8 h-60 ${className}`}
    >
      {children}
    </div>
  );

  if (linkTo) {
    return linkTo.startsWith("/") ? (
      <Link href={linkTo} className='block'>
        {cardContent}
      </Link>
    ) : (
      <a
        href={linkTo}
        target='_blank'
        rel='noopener noreferrer'
        className='block'
      >
        {cardContent}
      </a>
    );
  }
  return cardContent;
}

function CurrentlyPlayingClient({ track }: { track: Spotify | null }) {
  const isCurrentlyPlaying = track?.isPlaying ?? false;
  const currentTrack = isCurrentlyPlaying && track ? track : favorite;

  return (
    <SpotifyContainer linkTo={currentTrack.songUrl}>
      <div className='flex flex-col'>
        <div className='z-10 h-full'>
          <p className='line-clamp-3 max-h-20 overflow-hidden text-sm text-ellipsis text-shaded-foreground'>
            <span className='font-semibold'>
              {isCurrentlyPlaying ? "Currently Playing:" : "Recent Favorite:"}
            </span>{" "}
            <span className='font-semibold'>{currentTrack.title}</span> by{" "}
            <span className='font-semibold'>{currentTrack.artist}</span> from
            the album{" "}
            <span className='font-semibold'>{currentTrack.albumName}</span>
          </p>

          <div className='pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:-bottom-1 xl:left-[30%]'>
            <Record
              albumImageUrl={currentTrack.albumImageUrl}
              isPlaying={isCurrentlyPlaying}
            />
          </div>
          <div className='absolute -bottom-32 left-1/2 -translate-x-1/2 xl:left-[30%]'>
            <div
              className='size-52.5 rounded-sm bg-cover bg-center shadow-md'
              style={{ backgroundImage: `url(${currentTrack.albumImageUrl})` }}
            ></div>
          </div>
        </div>
      </div>
    </SpotifyContainer>
  );
}

export async function CurrentlyPlayingSpotify() {
  if (process.env.NODE_ENV === "development") {
    return <CurrentlyPlayingClient track={mockSpotifyNowPlaying} />;
  }

  const track = await getNowPlayingItem();
  return <CurrentlyPlayingClient track={track} />;
}
