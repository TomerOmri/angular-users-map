import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { USERS } from '../users-mock';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css'],
})
export class UserformComponent{

  myUser = new User("Tomer", "27", "tomer92@gmail.com", true, "34.7773536", "32.0786136", "http://files.softicons.com/download/toolbar-icons/fatcow-hosting-extra-icons-2-by-fatcow/ico/emotion_face_panda.ico");
  submitted = false;
  onSubmit() {
    USERS.push(this.myUser);
    this.submitted = true;
  }

  get currentUser() { return JSON.stringify(this.myUser); }

}
