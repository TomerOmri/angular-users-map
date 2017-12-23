import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { UserlistComponent } from './userlist/userlist.component';
import { UsersmapComponent } from './usersmap/usersmap.component';
import { UseritemComponent } from './userlist/useritem/useritem.component';
import { UserListControllersComponent } from './userlist/user-list-controllers/user-list-controllers.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserlistComponent,
    UsersmapComponent,
    UseritemComponent,
    UserListControllersComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
