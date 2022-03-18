import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddClientesComponent } from './components/clientes/add-clientes/add-clientes.component';
import { ShowClientesComponent } from './components/clientes/show-clientes/show-clientes.component';
import { UpdateClientesComponent } from './components/clientes/update-clientes/update-clientes.component';
import { AddComprasComponent } from './components/compras/add-compras/add-compras.component';
import { ShowComprasComponent } from './components/compras/show-compras/show-compras.component';
import { UpdateComprasComponent } from './components/compras/update-compras/update-compras.component';

const routes: Routes = [
  { path: '', pathMatch: 'full' },
  { path: 'clientes', component: ShowClientesComponent },
  { path: 'clientes/nuevo', component: AddClientesComponent },
  { path: 'clientes/update/:id', component: UpdateClientesComponent },
  { path: 'articulos'  },
  { path: 'articulos/nuevo' },
  { path: 'articulos/update/:id' },
  { path: 'compras', component: ShowComprasComponent },
  { path: 'compras/nueva', component: AddComprasComponent },
  { path: 'compras/update/:id', component: UpdateComprasComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
