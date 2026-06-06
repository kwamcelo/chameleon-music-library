import { Artist } from "./Artist";
import { Song } from "./Song";

export interface Album {
    title: string;
    songs: [Song];
    artists: [Artist];
    release_date: string;
    artwork: string;
    genre: string;
    explicit: boolean;
    label: string;
}