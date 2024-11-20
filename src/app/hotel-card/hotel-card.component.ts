import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Sede } from '../models';

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


  }


}
