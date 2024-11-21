import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Subscription } from 'rxjs';
import { Sede } from 'src/app/models';
import { Reservation } from 'src/app/models/reservation';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detalle-sede',
  templateUrl: './detalle-sede.component.html',
  styleUrls: ['./detalle-sede.component.scss']
})
export class DetalleSedeComponent implements OnInit {

  public sede!: Sede;
  public isLoading = false;
  public sedeId: string = '';

  constructor(private http: HttpClient,
              private router: Router,
              private route: ActivatedRoute
  ) { }



  ngOnInit() {
    this.sedeId = this.route.snapshot.paramMap.get('id') || '';
    this.getSede(this.sedeId);
  };


  async getSede(id: any) {
    try {
      this.isLoading = true;
      const resp = await firstValueFrom(this.http.get<any>('https://faux-api.com/api/v1/sedes_8440027125033984/'+id));
      this.sede = resp?.result.pop();
      console.log('sede', this.sede);

    } catch (error) {
      console.log('error', error);
    } finally {
      this.isLoading = false;
    };
    
  };

  rowClicked(reservation: any) {
    console.log('reservation', reservation);
    this.router.navigate(['/detalle-sede', reservation.id]);

  }

  



}
