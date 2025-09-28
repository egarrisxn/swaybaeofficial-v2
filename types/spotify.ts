export interface Spotify {
  albumImageUrl: string;
  albumName: string;
  albumId: string;
  artist: string;
  artistId: string;
  songUrl: string;
  title: string;
  isPlaying: boolean;
}

export interface SpotifyArtist {
  id: string;
  name: string;
}
