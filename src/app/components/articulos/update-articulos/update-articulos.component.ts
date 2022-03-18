import { Component, Input, OnInit } from '@angular/core';
import { Articulos } from 'src/app/interfaces/articulos';

@Component({
  selector: 'app-update-articulos',
  templateUrl: './update-articulos.component.html',
  styles: [],
})
export class UpdateArticulosComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}
  

  update(e: number): void {
    console.log(e);
  }
}
