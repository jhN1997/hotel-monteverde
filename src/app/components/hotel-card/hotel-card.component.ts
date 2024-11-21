import { Component, Input, OnInit } from '@angular/core';
import { Sede } from 'src/app/models';

@Component({
  selector: 'app-hotel-card',
  templateUrl: './hotel-card.component.html',
  styleUrls: ['./hotel-card.component.scss']
})
export class HotelCardComponent implements OnInit {

  @Input() public sede!: Sede;

  constructor() {

  }

  ngOnInit(): void {
    console.log('sede', this.sede)

  }


}
