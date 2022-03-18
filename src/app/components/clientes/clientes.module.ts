import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowComponent } from './show/show.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
  
  
    ShowComponent,
          AddComponent,
          UpdateComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ClientesModule { }
