import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { UserlistComponent } from './userlist/userlist.component';
import { UsersmapComponent } from './usersmap/usersmap.component';
import { UserComponent } from './userlist/user/user.component';
import { UseritemComponent } from './userlist/useritem/useritem.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserlistComponent,
    UsersmapComponent,
    UserComponent,
    UseritemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
