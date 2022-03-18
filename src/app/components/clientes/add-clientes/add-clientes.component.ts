import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Clientes } from 'src/app/interfaces/clientes';

@Component({
  selector: 'app-add-clientes',
  templateUrl: './add-clientes.component.html',
  styleUrls: ['./add-clientes.component.css']
})
export class AddClientesComponent implements OnInit {


  @Input() clientes:Clientes[] = [];
  @Input() nuevo:Clientes={
    codCliente:0,
    nombre:"",
    apellidos:"",
    empresa:"",
    puesto:"",
    cp:0,
    provincia:"",
    telefono:0,
    fechaNacimineto: new Date()
  }

  @Output() onNuevoClientes: EventEmitter<Clientes> = new EventEmitter()



  add():void{
    if(this.nuevo.nombre.trim().length ===0){
      return;
    }

    this.onNuevoClientes.emit(this.nuevo);

    this.nuevo = {
      codCliente:0,
      nombre:"",
      apellidos:"",
      empresa:"",
      puesto:"",
      cp:0,
      provincia:"",
      telefono:0,
      fechaNacimineto: new Date()
    }
  }

  constructor(){}

  ngOnInit(): void {
  }

}
