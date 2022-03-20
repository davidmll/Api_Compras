import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-update-clientes',
  templateUrl: './update-clientes.component.html',
  styleUrls: ['./update-clientes.component.css']
})
export class UpdateClientesComponent implements OnInit {
  formularioClientes!: FormGroup;

  constructor(private servicio:ClientesService) {}

  ngOnInit(): void {

    this.formularioClientes = new FormGroup({
      nombre: new FormControl('', Validators.required),
      apellidos: new FormControl('', Validators.required),
      empresa: new FormControl('', Validators.required),
      puesto: new FormControl('', Validators.required),
      cp: new FormControl('', Validators.required),
      provincia: new FormControl('', Validators.required),
      telefono: new FormControl('', Validators.required),
      fechaNacimiento: new FormControl('', Validators.required)

    });

  }

  update(): void {
    this.servicio.updateClientes(this.formularioClientes.value);
    console.log(this.servicio);
  }

}
