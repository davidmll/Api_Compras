import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/interfaces/clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-show-clientes',
  templateUrl: './show-clientes.component.html',
  styleUrls: ['./show-clientes.component.css']
})
export class ShowClientesComponent implements OnInit {

  // Prueba
  clientes:Clientes[] = [];
  cliente:Clientes = {
    codCliente: 1,
    nombre: 'pepe',
    apellidos: 'perez perez',
    empresa: 'Capgemini',
    puesto: 'Programador',
    cp: 11111,
    provincia: 'Lugo',
    telefono: 912912,
    fechaNacimiento: new Date()
  }
  cliente2:Clientes = {
    codCliente: 2,
    nombre: 'pepa',
    apellidos: 'perez perez',
    empresa: 'Otra empresa',
    puesto: 'jefe',
    cp: 11111,
    provincia: 'Gojón',
    telefono: 912912,
    fechaNacimiento: new Date()
  }

  constructor() {
    this.clientes.push(this.cliente); //prueba
    this.clientes.push(this.cliente2);
  }

  ngOnInit(): void {
  }

  clientes: Clientes[] = [
    {
      codCliente:1001,
      nombre:"Ronaldo",
      apellidos:"Lopez",
      empresa:"Loyal",
      puesto:"Formador",
      cp:34080,
      provincia:"Madrid",
      telefono:66665666,
      fechaNacimineto: new Date()
    }
  ]

  nuevo: Clientes={
    codCliente:0,
    nombre:"",
    apellidos:"",
    empresa:"",
    puesto:"",
    cp:0,
    provincia:"",
    telefono:0,
    fechaNacimineto: new Date()
  }

  agregarNuevoClientes(clientes: Clientes):void{
    console.log(clientes);
  }

}
