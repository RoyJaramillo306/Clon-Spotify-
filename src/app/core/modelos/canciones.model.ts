import { artist } from "./artista.model";

export interface Cancion{
    _id: string | number; 
    name: string;
    album: string;
    cover: string;
    artist?: artist;
    url: string;
}