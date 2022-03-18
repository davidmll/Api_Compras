import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticulosComponent } from './tableArticulo/articulos.component';
import { AgregarComponent } from './addArticulo/agregar.component';
import { ArticuloService } from '../../services/articulos.service';
import { ShowArticuloComponent } from './show-articulo/show-articulo.component';

@NgModule({
  declarations: [ArticulosComponent, AgregarComponent, ShowArticuloComponent],
  imports: [CommonModule, FormsModule],
  exports: [ArticulosComponent, AgregarComponent, ShowArticuloComponent],
  providers:[ArticuloService]
})
export class ArticulosModule {}
