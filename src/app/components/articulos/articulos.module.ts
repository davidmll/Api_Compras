import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticulosComponent } from './tableArticulo/articulos.component';
import { AgregarComponent } from './addArticulo/agregar.component';
import { ArticuloService } from '../../services/articulos.service';
import { UpdateArticulosComponent } from './update-articulos/update-articulos.component';
import { ShowArticuloComponent } from './show-articulo/show-articulo.component';
import { PrimengModule } from 'src/app/modules/prime-ng/primeng.module';

@NgModule({
  declarations: [ArticulosComponent, AgregarComponent, ShowArticuloComponent, UpdateArticulosComponent],
  imports: [CommonModule, PrimengModule, FormsModule],
  exports: [ArticulosComponent, AgregarComponent, ShowArticuloComponent, UpdateArticulosComponent],
  providers:[ArticuloService]
})

export class ArticulosModule {}
