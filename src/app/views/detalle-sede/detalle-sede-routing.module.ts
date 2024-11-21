import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalleSedeComponent } from './detalle-sede.component';

const routes: Routes = [
  {
    path: '',
    component: DetalleSedeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalleSedeRoutingModule { }