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

  clientes: Clientes[] = [
    {
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
