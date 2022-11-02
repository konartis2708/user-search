import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, Subject, tap } from 'rxjs';
import { IUser } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  public autoCompleteResult$: Observable<string[]>;
  public userResult$: Observable<IUser[]>;
  public newUserCreated$: Observable<IUser | undefined>;
  private readonly apiUrl: string;
  private autoCompleteResultSubject: BehaviorSubject<string[]>;
  private userResultSubject: BehaviorSubject<IUser[]>;
  private userCreatedSubject: Subject<IUser | undefined> = new Subject();
  public constructor(private readonly httpClient: HttpClient) { 
    this.apiUrl = `https://localhost:7063/User`;
    const defaultValue: string[] = [];
    this.autoCompleteResultSubject = new BehaviorSubject(defaultValue);

    const userDefaultValue: IUser[] = [];
    this.userResultSubject = new BehaviorSubject(userDefaultValue);
    this.autoCompleteResult$ = this.autoCompleteResultSubject.asObservable();

    this.userResult$ = this.userResultSubject.asObservable();
    this.newUserCreated$ = this.userCreatedSubject.asObservable();
  }

  public searchUsers(searchText: string) {
    return this.httpClient.get<IUser[]>(`${this.apiUrl}?searchText=${encodeURIComponent(searchText)}&includeAllFields=${false}`)
    .pipe(
    tap((users) => {
      const matchedUsers = users ? users.map((user) => `${user.firstName} ${user.lastName}`) : [];
      this.autoCompleteResultSubject.next(matchedUsers);
    }));
  }

  public getUsers(searchText: string) {
    this.userResultSubject.next([]);
    return this.httpClient.get<IUser[]>(`${this.apiUrl}?searchText=${encodeURIComponent(searchText)}&includeAllFields=${true}`)
    .pipe(
    tap((users) => {
      this.autoCompleteResultSubject.next([]);
      this.userResultSubject.next(users);

    }));
  }

  public addUser(user: IUser) {
    return this.httpClient.post<void>(this.apiUrl, user)
    .pipe(tap(() => {
      this.autoCompleteResultSubject.next([]);
      this.userCreatedSubject.next(user);
      this.userResultSubject.next([user]);
    }),
      catchError((error) => {
      console.error(error)
      return of(undefined);
    }));
  }

  public clearAddUser() {
    this.userCreatedSubject.next(undefined);
  }


}
