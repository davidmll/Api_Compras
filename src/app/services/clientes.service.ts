import { Injectable } from '@angular/core';
import { Clientes } from '../interfaces/clientes';


@Injectable()
export class ClientesService {

  clientes: Clientes[] = [
    {
      codCliente:1001,
      nombre:"Rosendo",
      apellidos:"Merino",
      empresa:"ADA",
      puesto:"IT",
      cp:34080,
      provincia:"Madrid",
      telefono:66665666,
      fechaNacimiento: new Date()
    }
  ]

  constructor() {}

  addClientes(clientes: Clientes) {
    this.clientes.push(clientes);

    clientes.codCliente = this.clientes.length;
  }

  getClientes(): Clientes[] {
    return this.clientes;
  }

  eliminarClientes() {
    return this.clientes.pop();
  }

  updateClientes(clientes: Clientes, id: number) {
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].codCliente === id) {
        this.clientes[i] = clientes;
      } else {
        console.log('No se puede sustituir');
      }
    }
  }
}
