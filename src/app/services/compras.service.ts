import { Injectable } from '@angular/core';
import { Compras } from '../interfaces/compras';

@Injectable({
  providedIn: 'root',
})
export class ComprasService {
  compras:Compras[] = [];

  updateCompra:any;

  constructor() {}

  agregarCompra(compra: Compras) {
    this.compras.push(compra);
  }

  getCompras() :Compras[]{

    return this.compras;
  }

  updateCompras(){
    return this.updateCompra;
  }
}
