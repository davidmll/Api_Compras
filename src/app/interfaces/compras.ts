import { Articulos } from "./articulos";
import { Clientes } from "./clientes";

export interface Compras {
  // codCompra: number,
  // Clientes.codCliente: Clientes,
  // codArticulo: Articulos,
  // fecha: string,
  // unidades: number
  codCompra: number,
  codCliente: number,
  codArticulo: number,
  fecha: string,
  unidades: number
}

