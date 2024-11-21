import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SedesComponent } from './sedes.component';
import { SedesRoutingModule } from './sedes-routing.module';


@NgModule({
  declarations: [
    SedesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SedesRoutingModule
  ], exports: [
    SedesComponent
  ]
})
export class SedesModule { }
