import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgregarComponent } from './addArticulo/agregar.component';
import { ArticuloService } from '../../services/articulos.service';
import { UpdateArticulosComponent } from './update-articulos/update-articulos.component';
import { ShowArticuloComponent } from './show-articulo/show-articulo.component';
import { RouterModule } from '@angular/router';
import { PrimengModule } from 'src/app/modules/prime-ng/primeng.module';

@NgModule({
  declarations: [
    AgregarComponent,
    ShowArticuloComponent,
    UpdateArticulosComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, PrimengModule],
  exports: [AgregarComponent, ShowArticuloComponent, UpdateArticulosComponent],
  providers: [ArticuloService],
})

export class ArticulosModule {}
