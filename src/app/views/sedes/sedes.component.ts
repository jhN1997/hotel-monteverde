import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Sede } from 'src/app/models';
import { Reservation } from 'src/app/models/reservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sedes',
  templateUrl: './sedes.component.html',
  styleUrls: ['./sedes.component.scss']
})
export class SedesComponent implements OnInit {

  public sedes: Sede[] = [];
  public isLoading = false;

  constructor(private http: HttpClient,
              private router: Router
  ) { }


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
    
  };

  rowClicked(reservation: any) {
    console.log('reservation', reservation);
    this.router.navigate(['/detalle-sede', reservation.id]);

  }

  



}
