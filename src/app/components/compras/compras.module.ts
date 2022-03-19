import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComprasComponent } from './add-compras/add-compras.component';
import { UpdateComprasComponent } from './update-compras/update-compras.component';
import { ShowComprasComponent } from './show-compras/show-compras.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableComprasComponent } from './table-compras/table-compras.component';



@NgModule({
  declarations: [
    AddComprasComponent,
    UpdateComprasComponent,
    ShowComprasComponent,
    TableComprasComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule
  ],
  exports:[
    AddComprasComponent,
    UpdateComprasComponent,
    ShowComprasComponent,
    TableComprasComponent
  ]
})
export class ComprasModule { }
