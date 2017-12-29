import { Component } from '@angular/core';
import { USERS } from "../users-mock";
import { User } from  "../user";
import { UserformComponent } from "../userform/userform.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']

})

export class HeaderComponent {

  showForm() {
    let theForm = document.getElementById("formSection")
    theForm.style.display = "block";

  }


  sortByName() {
      USERS.sort(this.dynamicSort("name"));
  }

  sortByAge() {
      USERS.sort(this.dynamicSort("age"))
  }


  dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a,b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
    }
  }

}
