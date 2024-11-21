import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReservationFormComponent } from './reservation-form.component';


@NgModule({
  declarations: [
    ReservationFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ], exports: [
    ReservationFormComponent
  ]
})
export class ReservationFormModule { }
