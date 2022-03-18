import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ArticuloService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  formularioArti!: FormGroup;

  constructor(private servicio:ArticuloService) { }

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

  agregar():void{
    this.servicio.addArticulos(this.formularioArti.value);
    console.log(this.servicio);
  }

}
