import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ControlEntidadComponent } from './components/control-entidad/control-entidad.component';
import { ListadoEntidadComponent } from './components/listado-entidad/listado-entidad.component';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { DetalleEntidadComponent } from './components/detalle-entidad/detalle-entidad.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlEntidadComponent,
    ListadoEntidadComponent,
    BienvenidoComponent,
    DetalleEntidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
