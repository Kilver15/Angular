import { Producto } from "./producto.interface";
export interface Combo {
    id?: number;
    nombre: string;
    descripcion: string;
    precio: number;
    productos: Producto[];
}