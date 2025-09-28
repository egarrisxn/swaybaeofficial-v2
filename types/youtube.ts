export interface YouTubeVideo {
  post_id: string;
  title: string;
  url: string;
  published_at: string;
  thumbnail_url: string;
}

export interface YouTubeApiItem {
  id: { videoId: string };
  snippet: {
    title: string;
    publishedAt: string;
    thumbnails: {
      high: { url: string };
    };
  };
}
