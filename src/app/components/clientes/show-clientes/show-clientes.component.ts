import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/interfaces/clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-show-clientes',
  templateUrl: './show-clientes.component.html',
  styleUrls: ['./show-clientes.component.css']
})
export class ShowClientesComponent implements OnInit {
  clientes: Clientes[] = [];

<<<<<<< HEAD
  constructor(private servicio: ClientesService,private router:Router) {}
=======
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
>>>>>>> 33a3dd16c100cfbe0429ddf88cd9c1687dad9778

  ngOnInit(): void {
    this.clientes = this.servicio.getClientes();
  }

<<<<<<< HEAD
  redirigirUpdate(app: Clientes[]){
    this.router.navigate(["clientes/update"]);
    this.servicio.updateClientes = app;
=======
  /* clientes: Clientes[] = [
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
>>>>>>> 33a3dd16c100cfbe0429ddf88cd9c1687dad9778

  }

<<<<<<< HEAD
  eliminarClientes(){
    this.servicio.eliminarClientes();
  }
=======
  agregarNuevoClientes(clientes: Clientes):void{
    console.log(clientes);
  } */

>>>>>>> 33a3dd16c100cfbe0429ddf88cd9c1687dad9778
}
