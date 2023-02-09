import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaApiComponent } from './components/tabla-api/tabla-api.component';
import { FormularioAPIComponent } from './formulario-api/formulario-api.component';

const routes: Routes = [
  {
    path: 'tabla',
    component: TablaApiComponent
  },
  {
    path: 'formulario',
    component: FormularioAPIComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
