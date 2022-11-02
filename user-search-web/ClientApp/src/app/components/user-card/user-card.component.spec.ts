import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from 'projects/component-library/src/public-api';
import { UserBuilder } from 'src/app/builders/user.builder';

import { UserCardComponent } from './user-card.component';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserCardComponent, CardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserCardComponent);

    component = fixture.componentInstance;

    component.user = new UserBuilder()
    .withFirstName('Adam')
    .withLastName('Lawrence')
    .build();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
