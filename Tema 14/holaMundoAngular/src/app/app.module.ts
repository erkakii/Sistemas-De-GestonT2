import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaPersonasComponent } from './components/tabla-personas/tabla-personas.component';
import { FormularioPersonasComponent } from './components/formulario-personas/formulario-personas.component';
import { ListadoPersonasComponent } from './components/listado-personas/listado-personas.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormularioReactivoComponent } from './components/formulario-reactivo/formulario-reactivo.component';
import {FormGroup, FormControl} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TablaPersonasComponent,
    FormularioPersonasComponent,
    ListadoPersonasComponent,
    FormularioReactivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
