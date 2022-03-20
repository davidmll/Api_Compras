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
  formularioUpdateArti!: FormGroup;
  valor: any;
  articulo!: Articulos;

  constructor(private servicio: ArticuloService, private ruta: Router) {}

  // updateArticulo: Articulos = {
  //   codArticulo: this.valor.codArticulo,
  //   nombre: this.valor.nombre,
  //   descripcion: this.valor.descripcion,
  //   precio: this.valor.precio,
  //   stock: this.valor.stock,
  //   securityStock: this.valor.securityStock,
  //   imagen: this.valor.imagen,
  // };

  ngOnInit(): void {
    this.valor = this.servicio.updateArticulos;

    this.formularioUpdateArti = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      stock: new FormControl('', Validators.required),
      securityStock: new FormControl('', Validators.required),
      imagen: new FormControl('', Validators.required),
    });
  }

  update(): void {
    this.servicio.updateArticulos(this.articulo, this.articulo.codArticulo);
    console.log(this.servicio);
    this.ruta.navigate(['/articulos']);
  }
}
