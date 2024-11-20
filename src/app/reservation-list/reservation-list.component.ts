import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../reservation/reservation.service';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Sede } from '../models';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {

  reservations: Reservation[] = [];

  public sedes: Sede[] = [];
  public isLoading = false;

  constructor(private http: HttpClient) { }


  ngOnInit() {
    this.getSedes();

  };


  async getSedes() {
    try {
      this.isLoading = true;
      const resp = await firstValueFrom(this.http.get<any>('https://faux-api.com/api/v1/sedes_8440027125033984'));  
      console.log('resp', resp);
      this.sedes = resp.result;

    } catch (error) {
      console.log('error', error);
    } finally {
      this.isLoading = false;
    }
    
  }

  



}
