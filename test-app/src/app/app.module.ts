import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { UserService } from './user-service';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import { UserlistComponent } from './userlist/userlist.component';
import { UsersmapComponent } from './usersmap/usersmap.component';
import { UserListControllersComponent } from './userlist/user-list-controllers/user-list-controllers.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserlistComponent,
    UsersmapComponent,
    UserListControllersComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBEre0hIZwxrdj73QCNjONdQ7zF8tW9yik'
    })
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
