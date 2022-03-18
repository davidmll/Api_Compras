import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/interfaces/clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-show-clientes',
  templateUrl: './show-clientes.component.html',
  styleUrls: ['./show-clientes.component.css']
})
export class ShowClientesComponent implements OnInit {

  constructor(private clientesService: ClientesService) { }

  ngOnInit(): void {
  }

/*
  nuevo: Clientes={
    codCliente:0,
    nombre:"",
    apellidos:"",
    empresa:"",
    puesto:"",
    cp:0,
    provincia:"",
    telefono:0,
    fechaNacimiento: new Date()
  }

  agregarNuevoClientes(clientes: Clientes):void{
    console.log(clientes);
  } */

}
