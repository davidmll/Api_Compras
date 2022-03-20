import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-clientes',
  templateUrl: './table-clientes.component.html',
  styleUrls: ['./table-clientes.component.css']
})
export class TableClientesComponent implements OnInit {

  @Input() clientes:any[]=[];

  constructor() { }

  ngOnInit(): void {
  }

}
