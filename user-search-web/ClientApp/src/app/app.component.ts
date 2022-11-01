import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public showAddUser: boolean = false;
  title = 'User search';

  public NewUserClicked() {
    this.showAddUser = !this.showAddUser;
  }
}
