import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-useritem',
  templateUrl: './useritem.component.html',
  styleUrls: ['./useritem.component.css']
})
export class userItem {
  _id: string;
  name: string;
  longitude: number;
  latitude: number;

}
