import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ArticulosModule } from './components/articulos/articulos.module';
import { ClientesModule } from './components/clientes/clientes.module';
import { ComprasModule } from './components/compras/compras.module';
import { PrimengModule } from './modules/prime-ng/primeng.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimengModule,
    ArticulosModule,
    ComprasModule,
    ClientesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
