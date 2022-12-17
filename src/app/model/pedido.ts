import { Producto } from './producto';
export class Pedido{
  idPedido: number;
  descripcion: string;
  fecha: string;
  cantidad: string;
  producto:Producto;
}
