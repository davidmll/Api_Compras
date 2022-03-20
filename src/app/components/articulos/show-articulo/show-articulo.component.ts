import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Articulos } from 'src/app/interfaces/articulos';
import { ArticuloService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-show-articulo',
  templateUrl: './show-articulo.component.html',
})
export class ShowArticuloComponent implements OnInit {

  articulo: Articulos[]= [];

  constructor(private servicio:ArticuloService, private ruta: Router) { }

  ngOnInit(): void {
    this.articulo = this.servicio.getArticulos();
    // console.log(this.articulo);
  }

  redirigirUpdate(app: Articulos[]){
    this.ruta.navigate(["articulos/update"]);
    this.servicio.updateArticulo = app;

  }

  eliminarArticulo(){
    this.servicio.deleteArticulos();
  }
}
