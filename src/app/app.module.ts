import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { PrimengModule } from './modules/prime-ng/primeng.module';
=======
import { ArticulosModule } from './components/articulos/articulos.module';
import { ComprasModule } from './components/compras/compras.module';
import { ClientesModule } from './components/clientes/clientes.module';
>>>>>>> a4d8cf3605cbd4a4d502bdf938967536dd614230

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    PrimengModule
=======
    ArticulosModule,
    ComprasModule,
    ClientesModule
>>>>>>> a4d8cf3605cbd4a4d502bdf938967536dd614230
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
