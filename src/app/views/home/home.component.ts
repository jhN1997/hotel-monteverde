import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Sede } from 'src/app/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public sedes: Sede[] = [];
  public isLoading = false;

  constructor(private http: HttpClient, private router: Router) { }


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


}
