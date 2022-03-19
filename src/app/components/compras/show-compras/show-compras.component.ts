import { Component, OnInit } from '@angular/core';
import { Compras } from 'src/app/interfaces/compras';
import { ComprasModule } from '../compras.module';

@Component({
  selector: 'app-show-compras',
  templateUrl: './show-compras.component.html',
  styleUrls: ['./show-compras.component.css']
})
export class ShowComprasComponent implements OnInit {

  //Prueba
  compras:Compras[] = [];

  constructor() {
    let compra:Compras = { //prueba
      idCompra: 1,
      codCliente: 2,
      codArticulo: 1,
      fecha: new Date(),
      unidades: 12
    }
    this.compras.push(compra);
  }

  ngOnInit(): void {
  }

}
