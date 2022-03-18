import { Injectable } from '@angular/core';
import { Clientes } from '../interfaces/clientes';


@Injectable()
export class ClientesService {

  private _clientes: Clientes[] = [
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

  get clientes():Clientes[]{
    return[...this._clientes];
  }

  constructor(){
    console.log("Servicio iniciado");
  }

  addClientes(clientes: Clientes) {
    this._clientes.push(clientes);
    clientes.codCliente = this.clientes.length;
  }


}
