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

  constructor(private servicio: ClientesService,private router:Router) {}

  ngOnInit(): void {
    this.clientes = this.servicio.getClientes();
  }

  redirigirUpdate(app: Clientes[]){
    this.router.navigate(["clientes/update"]);
    this.servicio.updateCliente = app;

  }

  eliminarClientes(){
    this.servicio.eliminarClientes();
  }

}
