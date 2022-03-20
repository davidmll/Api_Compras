import { Injectable } from '@angular/core';
import { Clientes } from '../interfaces/clientes';


@Injectable()
export class ClientesService {

  clientes: Clientes[] = []

  updateCliente:any;

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
