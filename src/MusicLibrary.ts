import { Album } from "./Album";
import { Artist } from "./Artist";
import { Playlist } from "./Playlist";
import { Song } from "./Song";

export interface MusicLibrary {
    songs: [Song];
    playlists: [Playlist];
    Albums: [Album];
    Artists: [Artist];
}