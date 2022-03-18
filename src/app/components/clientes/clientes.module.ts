import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddClientesComponent } from './add-clientes/add-clientes.component';
import { ShowClientesComponent } from './show-clientes/show-clientes.component';
import { UpdateClientesComponent } from './update-clientes/update-clientes.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { PrimengModule } from 'src/app/modules/prime-ng/primeng.module';
=======
import { TableClientesComponent } from './table-clientes/table-clientes.component';
import { ClientesService } from 'src/app/services/clientes.service';
>>>>>>> 5054213d08a4b4348ef467c9f404f1aee90d7169

@NgModule({
  declarations: [
    AddClientesComponent,
    ShowClientesComponent,
<<<<<<< HEAD
    UpdateClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PrimengModule
=======
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
>>>>>>> 5054213d08a4b4348ef467c9f404f1aee90d7169
  ]
})
export class ClientesModule {}
