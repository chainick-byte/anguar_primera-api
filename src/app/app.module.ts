import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import {UsuarioServicioService} from 'src/app/usuario-servicio.service';

@NgModule({
  declarations: [
    AppComponent,
    ListaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UsuarioServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
