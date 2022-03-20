import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Articulos } from 'src/app/interfaces/articulos';
import { ArticuloService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-update-articulos',
  templateUrl: './update-articulos.component.html',
  styles: [],
})
export class UpdateArticulosComponent implements OnInit {
  formularioUpdateArti: any;
  valor: any;
  articulo!: Articulos;

  constructor(private servicio: ArticuloService, private ruta: Router) {}

  ngOnInit(): void {
    this.valor = this.servicio.updateArticulo;
    this.articulo = {
      codArticulo: this.valor.codArticulo,
      nombre: this.valor.nombre,
      descripcion: this.valor.descripcion,
      precio: this.valor.precio,
      stock: this.valor.stock,
      securityStock: this.valor.securityStock,
      imagen: this.valor.imagen
    }
  }


  update(): void {
    this.servicio.updateArticulos(this.articulo, this.articulo.codArticulo);
    this.ruta.navigate(['/articulos']);
  }
}
