import { Component, Input, OnInit } from '@angular/core';
import { Clientes } from 'src/app/interfaces/clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-table-clientes',
  templateUrl: './table-clientes.component.html',
  styleUrls: ['./table-clientes.component.css']
})
export class TableClientesComponent implements OnInit {

  clientes: Clientes[]=[];

  constructor(private servicio:ClientesService) { }

  ngOnInit(): void {
    this.clientes = this.servicio.clientes;
    console.log(this.clientes);
  }

}
