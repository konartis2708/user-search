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
  public autoCompleteResult$: Observable<string[]>;
  public userResult$: Observable<IUser[]>;
  public searchTerm: string = '';

  public constructor(private readonly userService: UserService) {
    this.autoCompleteResult$ = userService.autoCompleteResult$;
    this.userResult$ = userService.userResult$;
   }
  
  public ngOnDestroy(): void {
    this.subscriptions?.forEach((subscription) => {
      subscription.unsubscribe();
    })
  }

  public ngOnInit(): void {
  }

  public SearchUsers(searchText: string) {
    this.subscriptions.push(this.userService.searchUsers(searchText).subscribe());
    this.searchTerm = searchText;
  }

  public GetUsers(match: string) {
    this.subscriptions.push(this.userService.getUsers(match).subscribe());
  }

}
