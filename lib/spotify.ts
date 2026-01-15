import "server-only";
import type { Spotify, SpotifyArtist } from "@/types/spotify";

const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";

async function getAccessToken() {
  if (!CLIENT_ID || !CLIENT_SECRET || !REFRESH_TOKEN) {
    throw new Error("Missing Spotify credentials");
  }

  const basic = btoa(`${CLIENT_ID}:${CLIENT_SECRET}`);

  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN,
    }),
    next: { revalidate: 300 },
  });

  if (!response.ok) throw new Error("Failed to get access token");
  const data = await response.json();
  return data.access_token as string;
}

export async function getNowPlayingItem(): Promise<Spotify> {
  try {
    const accessToken = await getAccessToken();

    const response = await fetch(NOW_PLAYING_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
      next: { revalidate: 15 },
    });

    if (response.status === 204 || response.status > 400) {
      return {
        isPlaying: false,
        albumImageUrl: "",
        albumName: "",
        albumId: "",
        artist: "",
        artistId: "",
        songUrl: "",
        title: "",
      };
    }

    const nowPlayingData = await response.json();
    const song = nowPlayingData.item;

    return {
      isPlaying: nowPlayingData.is_playing,
      albumImageUrl: song.album.images?.[0]?.url ?? "",
      albumName: song.album.name ?? "",
      albumId: song.album.id ?? "",
      artist: song.artists.map((a: SpotifyArtist) => a.name).join(", "),
      artistId: song.artists.map((a: SpotifyArtist) => a.id).join(","),
      songUrl: song.external_urls.spotify ?? "",
      title: song.name ?? "",
    };
  } catch {
    return {
      isPlaying: false,
      albumImageUrl: "",
      albumName: "",
      albumId: "",
      artist: "",
      artistId: "",
      songUrl: "",
      title: "",
    };
  }
}
