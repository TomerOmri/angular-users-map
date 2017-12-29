import { Component, OnInit, Input } from '@angular/core';
import { USERS } from "../users-mock";

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent implements OnInit{

  @Input() name: string;
  @Input() photo: string;
  @Input() email: string;
  @Input() isActive: boolean;
  @Input() age: number;
  @Input() userId: string;

  constructor() {}
  ngOnInit() {}

  deleteUserFromList(){
    let indexOfUser = USERS.findIndex(user => user._id === this.userId);
    USERS.splice(indexOfUser,1);
    // console.log(indexOfUser);
    // console.log(USERS[0]);
  }
}
