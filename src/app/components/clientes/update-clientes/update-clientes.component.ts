import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/interfaces/clientes';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-update-clientes',
  templateUrl: './update-clientes.component.html',
  styleUrls: ['./update-clientes.component.css']
})
export class UpdateClientesComponent implements OnInit {
  formularioClientes!: FormGroup;

  cliente!: Clientes;

  valor: any;

  constructor(private servicio:ClientesService, private ruta: Router) {}

  ngOnInit(): void {

      this.valor = this.servicio.updateCliente;

      this.cliente = {
      codCliente: this.valor.codCliente,
      nombre: this.valor.nombre,
      apellidos: this.valor.apellidos,
      empresa: this.valor.empresa,
      puesto: this.valor.puesto,
      cp: this.valor.cp,
      provincia: this.valor.provincia,
      telefono: this.valor.telefono,
      fechaNacimiento: this.valor.fechaNacimiento

    }

  }

  update(): void {
    this.servicio.updateClientes(this.cliente, this.cliente.codCliente);
    this.ruta.navigate(['/clientes']);
  }

}
