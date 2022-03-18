import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './showArticulos/main.component';
import { ArticulosComponent } from './tableArticulo/articulos.component';
import { AgregarComponent } from './addArticulo/agregar.component';
import { ArticuloService } from '../../services/articulos.service';
import { UpdateArticulosComponent } from './update-articulos/update-articulos.component';

@NgModule({
  declarations: [MainComponent, ArticulosComponent, AgregarComponent, UpdateArticulosComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainComponent, ArticulosComponent,UpdateArticulosComponent],
  providers:[ArticuloService]
})
export class ArticulosModule {}
