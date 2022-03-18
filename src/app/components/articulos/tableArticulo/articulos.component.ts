import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styles: [
  ]
})
export class ArticulosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() articulo:any[]=[];

}
