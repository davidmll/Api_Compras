import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Articulos } from '../../../interfaces/articulos.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() articulos:Articulos[]=[];
  @Input() nuevo:Articulos={
    codArticulo:0,
    nombre:'',
    descripcion:'',
    precio:0,
    stock:0,
    securityStock:0,
    imagen:''
  }
  @Output() onNuevoArticulo:EventEmitter<Articulos>=new EventEmitter()

  agregar():void{
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
    this.onNuevoArticulo.emit(this.nuevo);
    this.nuevo={
      codArticulo:0,
      nombre:'',
      descripcion:'',
      precio:0,
      stock:0,
      securityStock:0,
      imagen:''
    }
  }

}
