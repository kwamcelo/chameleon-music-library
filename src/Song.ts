import { Artist } from "./Artist";

export interface Song {
    title: string;
    artists: [Artist];
    album: string;
    duration_ms: number;
    explicit: boolean;
    artwork: string;
}