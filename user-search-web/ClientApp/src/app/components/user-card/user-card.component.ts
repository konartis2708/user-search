import { Component, Input, OnInit } from '@angular/core';
import { IUser } from 'src/app/types/user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() public user!: IUser;
  protected fullName?: string;
  protected attributes: string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.fullName = `${this.user.firstName} ${this.user.lastName}`;
    this.attributes.push(this.user.jobTitle);
    this.attributes.push(this.user.phone);
    this.attributes.push(this.user.email);
  }

}
