import { Component, OnInit } from '@angular/core';
import { Articulos } from 'src/app/interfaces/articulos';
import { ArticuloService } from 'src/app/services/articulos.service';

@Component({
  selector: 'app-show-articulo',
  templateUrl: './show-articulo.component.html',
})
export class ShowArticuloComponent implements OnInit {
  constructor(private articuloService: ArticuloService) {}


  ngOnInit(): void {}

  // articulo: Articulos[] = [
  //   {
  //     codArticulo: 1,
  //     nombre: 'Portatil',
  //     descripcion: 'Muy guapo',
  //     precio: 150,
  //     stock: 2,
  //     securityStock: 1,
  //     imagen:
  //       'https://www.notebookcheck.org/typo3temp/_processed_/0/0/csm_laptop_awm17_r4_a6b63b8c71.jpg',
  //   },
  // ];

}
