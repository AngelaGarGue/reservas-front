import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TrabajadoresComponent } from './components/trabajadores/trabajadores.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent, // Mueve AppComponent aquí
    TrabajadoresComponent // Mueve TrabajadoresComponent aquí
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent] // Asegúrate de que AppComponent esté aquí si es el componente raíz
})
export class AppModule { }