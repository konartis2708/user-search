import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap } from 'rxjs';
import { IUser } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  public matchedUsers$: Observable<string[]>;
  private readonly apiUrl: string;
  private matchedUsersSubject: BehaviorSubject<string[]>
  public constructor(private readonly httpClient: HttpClient, @Inject('BASE_URL') private readonly baseUrl: string) { 
    this.apiUrl = `${this.baseUrl}user`;
    const defaultValue: string[] = [];
    this.matchedUsersSubject = new BehaviorSubject(defaultValue);
    this.matchedUsers$ = this.matchedUsersSubject.asObservable();
  }

  public searchUsers(searchText: string) {
    return this.httpClient.get<IUser[]>(`${this.apiUrl}?searchText=${encodeURIComponent(searchText)}`)
    .pipe(catchError((error) => {
      console.error(error)
      return of(undefined);
    }),
    tap((users) => {
      const matchedUsers = users ? users.map((user) => `${user.firstName} ${user.lastName}`) : [];
      this.matchedUsersSubject.next(matchedUsers)
    }));
  }

  public addUser(user: IUser) {
    return this.httpClient.post<void>(this.apiUrl, user)
    .pipe(catchError((error) => {
      console.error(error)
      return of(undefined);
    }));
  }


}
