import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { getLatestYouTube } from "@/app/actions/youtube";

export async function YouTubeFeed() {
  const youtubeData = await getLatestYouTube();

  if (!youtubeData || youtubeData.length === 0) {
    return (
      <p className='text-center text-muted-foreground'>
        Failed to load YouTube feed or no videos found.
      </p>
    );
  }

  return (
    <ul className='grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4 2xl:gap-6'>
      {youtubeData.map((video) => (
        <li key={video.post_id}>
          <a
            href={video.url}
            target='_blank'
            rel='noopener noreferrer'
            className='group block h-full'
          >
            <Card className='0 h-full gap-1 overflow-hidden px-0.5 pt-0.5 transition group-hover:scale-102'>
              {video.thumbnail_url && (
                <img
                  src={video.thumbnail_url}
                  alt='Video thumbnail'
                  className='w-full rounded-[1.25rem] object-cover'
                />
              )}

              <CardHeader className='space-y-4 px-4 pt-6'>
                <CardTitle className='line-clamp-2 text-sm leading-tight'>
                  {video.title}
                </CardTitle>
                <CardDescription>
                  <p className='text-xs text-muted-foreground'>
                    {new Date(video.published_at).toLocaleDateString()}
                  </p>
                </CardDescription>
              </CardHeader>
            </Card>
          </a>
        </li>
      ))}
    </ul>
  );
}
