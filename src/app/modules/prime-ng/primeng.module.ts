import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { MenuComponent } from 'src/app/components/menu/menu.component';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    MenubarModule,
    TableModule,
    ButtonModule
  ],
  exports: [
    MenuComponent,
    TableModule,
    ButtonModule
  ]
})
export class PrimengModule { }
