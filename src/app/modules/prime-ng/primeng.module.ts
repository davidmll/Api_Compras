import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { MenuComponent } from 'src/app/components/menu/menu.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule
  ],
  exports: [
    MenuComponent,
    MenubarModule,
    TableModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule
  ]
})
export class PrimengModule { }
