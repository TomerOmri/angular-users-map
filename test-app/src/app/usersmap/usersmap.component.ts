import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user-service';

@Component({
  selector: 'app-usersmap',
  templateUrl: './usersmap.component.html',
  styleUrls: ['./usersmap.component.css']
})
export class UsersmapComponent implements OnInit {
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.getUsers();
  }

  users: User[];
  zoom: number = 16;
  lat: number = 32.0786136;
  lng: number = 34.7773536;

  getUsers(): void {
    this.userService
      .getUsers()
      .subscribe(users => {
        this.users = users
        console.log("map");
      });
  }
}
