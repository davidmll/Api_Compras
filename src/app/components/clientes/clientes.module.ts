import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientesComponent } from './add-clientes/add-clientes.component';
import { ShowClientesComponent } from './show-clientes/show-clientes.component';
import { UpdateClientesComponent } from './update-clientes/update-clientes.component';
import { FormsModule } from '@angular/forms';
import { TableClientesComponent } from './table-clientes/table-clientes.component';
import { ClientesService } from 'src/app/services/clientes.service';



@NgModule({
  declarations: [
    AddClientesComponent,
    ShowClientesComponent,
    UpdateClientesComponent,
    TableClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AddClientesComponent,
    ShowClientesComponent,
    TableClientesComponent
  ],
  providers:[
    ClientesService
  ]
})
export class ClientesModule { }
