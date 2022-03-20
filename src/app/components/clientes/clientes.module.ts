import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowClientesComponent } from './show-clientes/show-clientes.component';
import { UpdateClientesComponent } from './update-clientes/update-clientes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientesService } from 'src/app/services/clientes.service';
import { AddClientesComponent } from './add-clientes/add-clientes.component';
import { RouterModule } from '@angular/router';
import { PrimengModule } from 'src/app/modules/prime-ng/primeng.module';


@NgModule({
  declarations: [
    ShowClientesComponent,
    UpdateClientesComponent,
    AddClientesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    PrimengModule
  ],
  exports: [
    AddClientesComponent,
    ShowClientesComponent,
    AddClientesComponent
  ],
  providers:[
    ClientesService
  ]
})
export class ClientesModule {}
