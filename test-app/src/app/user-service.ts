import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";
import { User } from "./user";
import { USERS } from "./users-mock";

@Injectable()
export class UserService {



  constructor() { }

  getUsers(): Observable<User[]> {
    var userList = of(USERS);
    return userList;
  }

}
