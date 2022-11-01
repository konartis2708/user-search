import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/types/user';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit, OnDestroy {
  public subscriptions: Subscription[] = [];
  public matchedUsers$: Observable<string[]>;
  public users: IUser[] = [];

  public constructor(private readonly userService: UserService) {
    this.matchedUsers$ = userService.matchedUsers$;
   }
  
  public ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription) => {
      subscription.unsubscribe();
    })
  }

  public ngOnInit(): void {
    this.users.push({
      firstName: 'Adam',
      lastName: 'Lawrence',
      jobTitle: 'The Don',
      phone: '0900 222 111',
      email: 'test@test.com'
    });

    this.users.push({
      firstName: 'Adam',
      lastName: 'Lawrence',
      jobTitle: 'The Don',
      phone: '0900 222 111',
      email: 'test@test.com'
    });

    this.users.push({
      firstName: 'Adam',
      lastName: 'Lawrence',
      jobTitle: 'The Don',
      phone: '0900 222 111',
      email: 'test@test.com'
    });

    this.users.push({
      firstName: 'Adam',
      lastName: 'Lawrence',
      jobTitle: 'The Don',
      phone: '0900 222 111',
      email: 'test@test.com'
    });

    this.users.push({
      firstName: 'Adam',
      lastName: 'Lawrence',
      jobTitle: 'The Don',
      phone: '0900 222 111',
      email: 'test@test.com'
    });

    this.users.push({
      firstName: 'Adam',
      lastName: 'Lawrence',
      jobTitle: 'The Don',
      phone: '0900 222 111',
      email: 'test@test.com'
    });
  }

  public SearchUsers(searchText: string) {
    this.subscriptions.push(this.userService.searchUsers(searchText).subscribe());
    
  }

}
