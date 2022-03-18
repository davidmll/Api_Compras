import { Component, Input, OnInit } from '@angular/core';
import { Articulos } from 'src/app/interfaces/articulos';
import { ArticuloService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styles: [
  ]
})

export class ArticulosComponent implements OnInit {
  articulo: Articulos[]= [];
  constructor(private servicio:ArticuloService) { }
  ngOnInit(): void {
    this.articulo = this.servicio.articulos;
    console.log(this.articulo);
  }

}
