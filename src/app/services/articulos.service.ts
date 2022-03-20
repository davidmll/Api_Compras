import { Injectable } from '@angular/core';
import { Articulos } from '../interfaces/articulos';

@Injectable()
export class ArticuloService {

  articulos: Articulos[] = [];

  updateArticulo: any;

  getArticulos(): Articulos[] {
    return this.articulos;
  }

  constructor() {
    // console.log('Servicio iniciado');
  }

  addArticulos(articulo: Articulos) {
    this.articulos.push(articulo);
    articulo.codArticulo = this.articulos.length;
  }

  updateArticulos( articulos: Articulos, id: number) {

    for (let i = 0; i < this.articulos.length; i++) {
      if(this.articulos[i].codArticulo === id){
        this.articulos[i] = articulos;
      }else{
        console.log('a');
      }
    }
  }

  deleteArticulos(){
    this.articulos.pop();
  }

}
