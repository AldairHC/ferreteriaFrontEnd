import { Categoria } from "./categoria";
import { Proveedor } from "./proveedor";

export class Producto{
  idProducto: number;
  nombre: string;
  descripcion: string;
  precio: string;
  cantidad: string;
  marca: string;
  categoria:Categoria;
  proveedor:Proveedor

}
