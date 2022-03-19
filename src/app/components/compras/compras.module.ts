import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddComprasComponent } from './add-compras/add-compras.component';
import { UpdateComprasComponent } from './update-compras/update-compras.component';
import { ShowComprasComponent } from './show-compras/show-compras.component';
import { TableComprasComponent } from './table-compras/table-compras.component';

import { PrimengModule } from 'src/app/modules/prime-ng/primeng.module';

@NgModule({
  declarations: [
    AddComprasComponent,
    UpdateComprasComponent,
    ShowComprasComponent,
    TableComprasComponent
  ],
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,PrimengModule
  ],
  exports:[
    AddComprasComponent,
    UpdateComprasComponent,
    ShowComprasComponent,
    TableComprasComponent
  ]
})
export class ComprasModule { }
