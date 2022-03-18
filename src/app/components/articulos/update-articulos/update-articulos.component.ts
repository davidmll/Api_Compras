import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Articulos } from 'src/app/interfaces/articulos';

@Component({
  selector: 'app-update-articulos',
  templateUrl: './update-articulos.component.html',
  styles: [],
})
export class UpdateArticulosComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}

  @Input() articulos: Articulos[] = [];
  @Output() onEditArticulo: EventEmitter<Articulos> = new EventEmitter();

  update(e: number): void {
    console.log(e);
  }
}
