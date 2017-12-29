import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { UserService } from './user-service';
import { AppComponent } from './app.component';
import { HeaderComponent } from "./header/header.component";
import { UserlistComponent } from './userlist/userlist.component';
import { UsersmapComponent } from './usersmap/usersmap.component';
import { AgmCoreModule } from '@agm/core';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { UserformComponent } from './userform/userform.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserinfoComponent,
    UserlistComponent,
    UsersmapComponent,
    UserformComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBEre0hIZwxrdj73QCNjONdQ7zF8tW9yik'
    })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
