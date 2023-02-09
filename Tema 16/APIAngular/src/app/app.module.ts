import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TablaApiComponent } from './components/tabla-api/tabla-api.component';
import { FormularioAPIComponent } from './formulario-api/formulario-api.component';

@NgModule({
  declarations: [
    AppComponent,
    TablaApiComponent,
    FormularioAPIComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
