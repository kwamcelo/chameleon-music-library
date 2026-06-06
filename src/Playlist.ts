import { Song } from './Song.ts';
export interface Playlist {
    title: string;
    owner: string;
    songs: [Song];
    image: string;
}