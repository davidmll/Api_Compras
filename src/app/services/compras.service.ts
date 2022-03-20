import { Injectable } from '@angular/core';
import { Compras } from '../interfaces/compras';

@Injectable({
  providedIn: 'root',
})
export class ComprasService {
  compras: Compras[] = [];

  updateCompra: any;

  constructor() {}

  agregarCompra(compra: Compras) {
    this.compras.push(compra);

    compra.codCompra = this.compras.length;
  }

  getCompras(): Compras[] {
    return this.compras;
  }

  eliminarCompra() {
    return this.compras.pop();
  }

  updateCompras(compras: Compras, id: number) {
    for (let i = 0; i < this.compras.length; i++) {
      if (this.compras[i].codCompra === id) {
        this.compras[i] = compras;
      } else {
        console.log('No se puede sustituir');
      }
    }
  }
}
