import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientesComponent } from './add-clientes/add-clientes.component';
import { ShowClientesComponent } from './show-clientes/show-clientes.component';
import { UpdateClientesComponent } from './update-clientes/update-clientes.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AddClientesComponent,
    ShowClientesComponent,
    UpdateClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class ClientesModule { }
