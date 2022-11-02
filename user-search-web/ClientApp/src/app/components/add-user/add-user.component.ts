import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { uniqueEmailValidator } from 'src/app/validators/unique-email-validator';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit, OnDestroy {
public subscriptions: Subscription[] = [];
  public userFormGroup: FormGroup;
  constructor(private readonly formBuilder: FormBuilder, private readonly userService: UserService) { 
    this.userFormGroup = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.maxLength(50)]],
      lastName: ['', [Validators.required,Validators.maxLength(50)]],
      jobTitle: ['', [Validators.required, Validators.maxLength(50)]],
      phone: ['', [Validators.required, Validators.maxLength(50), Validators.pattern("^[0-9]*$")]],
      email: ['', [Validators.required, Validators.maxLength(320), Validators.email], [uniqueEmailValidator(this.userService)]],
    });
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  public ngOnInit(): void {
  }

  public CreateUser() {
    if (!this.userFormGroup.valid) {
      return;
    }

    this.subscriptions.push(this.userService.addUser(this.userFormGroup.value)
    .subscribe());
  }

}
