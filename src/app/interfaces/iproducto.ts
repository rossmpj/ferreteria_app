export interface IProducto {
    idProducto: number;
    nombre: string;
    precio: number;
    medida: string | null;
    // imagen: string;
    stock: number;
    idColor: number;
    idCategoria: number;
    idMarca: number;
}
