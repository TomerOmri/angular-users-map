import { Component, OnInit } from '@angular/core';
import { USERS } from './useritem/users-mock';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users = USERS;

  constructor() { }

  ngOnInit() {
  }



}
