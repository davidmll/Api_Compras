import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Articulos } from 'src/app/interfaces/articulos';
import { ArticuloService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-update-articulos',
  templateUrl: './update-articulos.component.html',
  styles: [],
})
export class UpdateArticulosComponent implements OnInit {

  formularioArti!: FormGroup;

  constructor(private servicio:ArticuloService) {}

  ngOnInit(): void {
    this.formularioArti = new FormGroup({
      nombre: new FormControl('', Validators.required),
      descripcion: new FormControl('', Validators.required),
      precio: new FormControl('', Validators.required),
      stock: new FormControl('', Validators.required),
      securityStock: new FormControl('', Validators.required),
      imagen: new FormControl('', Validators.required)

    });
  }

  update(): void {
    this.servicio.updateArticulos(this.formularioArti.value);
    console.log(this.servicio);
  }
}
