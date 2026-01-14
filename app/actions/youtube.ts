"use server";

import { mockYouTubeFeed } from "@/lib/mock/data";
import type { YouTubeVideo, YouTubeApiItem } from "@/types/youtube";

const YOUTUBE_KEY = process.env.YOUTUBE_API_KEY;
const YOUTUBE_ID = process.env.YOUTUBE_CHANNEL_ID;
const URL = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_KEY}&channelId=${YOUTUBE_ID}&part=snippet,id&order=date&maxResults=3&type=video`;

export async function getLatestYouTube(): Promise<YouTubeVideo[] | null> {
  if (process.env.NODE_ENV === "development") {
    return mockYouTubeFeed;
  }

  if (!YOUTUBE_KEY || !YOUTUBE_ID) {
    console.error("YouTube API Key or Channel ID is missing.");
    return null;
  }

  try {
    const response = await fetch(URL, { next: { revalidate: 86400 } });
    if (!response.ok) {
      throw new Error(
        `YouTube API request failed with status: ${response.status}`
      );
    }
    const data = await response.json();

    return data.items.map((item: YouTubeApiItem) => ({
      post_id: item.id.videoId,
      title: item.snippet.title,
      url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
      published_at: item.snippet.publishedAt,
      thumbnail_url: item.snippet.thumbnails.high.url,
    }));
  } catch (error) {
    console.error("Error fetching YouTube videos:", error);
    return null;
  }
}
