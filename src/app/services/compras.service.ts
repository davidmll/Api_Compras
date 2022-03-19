import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Compras } from '../interfaces/compras';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  // Subject
  datosCompra = new Subject<Compras>();

  constructor() {

  }

  AddCompra(compras : any):Observable<any>{
    return compras;
  }

  getAllCompras():Observable<Compras>{
    return this.datosCompra;
  }

  deleteCompra(id:number):Subject<Compras>{
    return this.datosCompra;
  }

  updateCompra():Subject<Compras>{
    return this.datosCompra;
  }





}
