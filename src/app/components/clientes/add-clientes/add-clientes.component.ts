import { Component,  OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from 'src/app/services/clientes.service';

@Component({
  selector: 'app-add-clientes',
  templateUrl: './add-clientes.component.html',
  styleUrls: ['./add-clientes.component.css']
})
export class AddClientesComponent implements OnInit {


  formularioClientes!: FormGroup;

  constructor(private servicio:ClientesService, private router: Router) {}

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

  addClientes():void{
    const data = this.formularioClientes.value;

    this.servicio.addClientes(data);

    this.router.navigate(["/clientes"]);
  }

}
