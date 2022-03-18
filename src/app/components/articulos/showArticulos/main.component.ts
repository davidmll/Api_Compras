import { Component, OnInit } from '@angular/core';
import { Articulos } from '../../../interfaces/articulos.interfaces';
import { ArticuloService } from '../../../services/articulos.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [
  ]
})
export class MainComponent implements OnInit {

  constructor(private articuloService: ArticuloService) { }

  ngOnInit(): void {
  }

  articulo: Articulos[]=[
    {
      codArticulo:1,
      nombre:'Portatil',
      descripcion:'Muy guapo',
      precio:150,
      stock:2,
      securityStock:1,
      imagen:'https://www.notebookcheck.org/typo3temp/_processed_/0/0/csm_laptop_awm17_r4_a6b63b8c71.jpg'
    }
  ]
  nuevo: Articulos={
    codArticulo:0,
    nombre:'',
    descripcion:'',
    precio:0,
    stock:0,
    securityStock:0,
    imagen:''
  }

  agregarNuevoArticulo(articulo:Articulos):void{
    console.log(articulo);
  }

}
