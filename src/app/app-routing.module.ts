import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './components/bienvenido/bienvenido.component';
import { ControlEntidadComponent } from './components/control-entidad/control-entidad.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {path: '' , component: BienvenidoComponent},
  {path: 'listadoEntidad' , component: ControlEntidadComponent},
  {path: 'controlEntidad' , component: ControlEntidadComponent}


];

@NgModule({
  imports: 
  [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {



 }
