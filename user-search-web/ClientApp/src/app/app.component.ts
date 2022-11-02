import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { UserService } from './services/user.service';
import { IUser } from './types/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public showAddUser: boolean = false;
  public newUserCreated$: Observable<IUser | undefined>;
  
  title = 'User search';


  public constructor(private readonly userService: UserService) {
    this.newUserCreated$ = this.userService.newUserCreated$
    .pipe(tap((user) => { 

      if (user) {
        this.ToggleUserForm();
      }
      setTimeout(() => {this.userService.clearAddUser()}, 10000);
    }
    ));
  }
  ngOnInit(): void {
    
  }

  public ToggleUserForm() {
    this.showAddUser = !this.showAddUser;
  }
}
