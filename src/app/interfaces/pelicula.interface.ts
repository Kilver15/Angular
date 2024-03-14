import { Genero } from "./genero.interface";
export interface Pelicula {
    id?: number;
    titulo: string;
    sinopsis: string;
    duracion: number;
    clasificacion: string;
    generos: Genero[];
}
