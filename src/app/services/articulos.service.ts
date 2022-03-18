import { Injectable } from '@angular/core';
import { Articulos } from '../interfaces/articulos';

@Injectable()
export class ArticuloService {
  private _articulos: Articulos[] = [];

  get articulos(): Articulos[] {
    return [...this._articulos];
  }
  constructor() {
    console.log('Servicio iniciado');
  }

  addArticulos(articulo: Articulos) {
    this._articulos.push(articulo);
    articulo.codArticulo = this.articulos.length;
  }

  updateArticulos(codigo: number, articulo: Articulos) {
    // this._articulos.indexOf(articulo);
    this._articulos[codigo] = articulo;
  }
}
