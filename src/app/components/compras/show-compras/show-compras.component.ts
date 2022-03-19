import { Component, OnInit } from '@angular/core';
import { Compras } from 'src/app/interfaces/compras';

@Component({
  selector: 'app-show-compras',
  templateUrl: './show-compras.component.html',
  styleUrls: ['./show-compras.component.css']
})
export class ShowComprasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  procesaDatos(mensaje:any){
    console.log(mensaje);

  }

}
