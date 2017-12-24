import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usersmap',
  templateUrl: './usersmap.component.html',
  styleUrls: ['./usersmap.component.css']
})
export class UsersmapComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  zoom: number = 16;
  lat: number = 32.0786136;
  lng: number = 34.7773536;
  // lat: number = 51.678418;
  // lng: number = 7.809007;
}
