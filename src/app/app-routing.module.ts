import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './components/articulos/addArticulo/agregar.component';
import { ShowArticuloComponent } from './components/articulos/show-articulo/show-articulo.component';
import { UpdateArticulosComponent } from './components/articulos/update-articulos/update-articulos.component';
import { AddClientesComponent } from './components/clientes/add-clientes/add-clientes.component';
import { ShowClientesComponent } from './components/clientes/show-clientes/show-clientes.component';
import { UpdateClientesComponent } from './components/clientes/update-clientes/update-clientes.component';
import { AddComprasComponent } from './components/compras/add-compras/add-compras.component';
import { ShowComprasComponent } from './components/compras/show-compras/show-compras.component';
import { UpdateComprasComponent } from './components/compras/update-compras/update-compras.component';

const routes: Routes = [
  { path: '', component: ShowClientesComponent, pathMatch: 'full' },
  { path: 'clientes', component: ShowClientesComponent },
  { path: 'clientes/nuevo', component: AddClientesComponent },
  { path: 'clientes/update/:id', component: UpdateClientesComponent },
  { path: 'articulos', component: ShowArticuloComponent },
  { path: 'articulos/nuevo', component:AgregarComponent },
  { path: 'articulos/update/:id', component: UpdateArticulosComponent },
  { path: 'compras', component: ShowComprasComponent },
  { path: 'compras/nueva', component: AddComprasComponent },
  { path: 'compras/update', component: UpdateComprasComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
