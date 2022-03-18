import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './showArticulos/main.component';
import { ArticulosComponent } from './tableArticulo/articulos.component';
import { AgregarComponent } from './addArticulo/agregar.component';
import { ArticuloService } from '../../services/articulos.service';

@NgModule({
  declarations: [MainComponent, ArticulosComponent, AgregarComponent],
  imports: [CommonModule, FormsModule],
  exports: [MainComponent, ArticulosComponent],
  providers:[ArticuloService]
})
export class ArticulosModule {}
