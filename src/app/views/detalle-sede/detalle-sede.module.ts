import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetalleSedeRoutingModule } from './detalle-sede-routing.module';
import { DetalleSedeComponent } from './detalle-sede.component';


@NgModule({
  declarations: [
    DetalleSedeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    DetalleSedeRoutingModule
  ], exports: [
    DetalleSedeComponent
  ]
})
export class DetalleSedeModule { }
