import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/interfaces/clientes';

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

}
