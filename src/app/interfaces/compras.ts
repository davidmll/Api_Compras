import { Articulos } from "./articulos";
import { Clientes } from "./clientes";

export interface Compras {
  codCompra: number,
  codCliente: Clientes,
  codArticulo: Articulos,
  fecha: string,
  unidades: number
}

