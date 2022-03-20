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

  eliminarCompra(){
    return this.compras.pop()
  }

  updateCompras(compra:Compras){

    for (let i = 0; i < this.compras.length; i++) {
      if(i = )
      
    }
    this.compras.push(compra);
    return this.updateCompra;
  }
}
