import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { ComponentLibraryModule } from 'projects/component-library/src/public-api';
import { UserService } from 'src/app/services/user.service';
import { UserCardComponent } from '../user-card/user-card.component';

import { UserSearchComponent } from './user-search.component';

describe('UserSearchComponent', () => {
  let component: UserSearchComponent;
  let fixture: ComponentFixture<UserSearchComponent>;
  let userServiceSpy: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('UserService', ['searchUsers']);
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, 
        FormsModule, 
        ReactiveFormsModule,
      ComponentLibraryModule],
      declarations: [ UserSearchComponent,
            UserCardComponent],
      providers: [{ provide: UserService, useValue: spy },
        {provide: APP_BASE_HREF, useValue: 'http://test-url/'}]
    })
    .compileComponents();

    userServiceSpy = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
    fixture = TestBed.createComponent(UserSearchComponent);

    
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the api with the correct value', async () => {
    fixture.detectChanges();

    let input = fixture.debugElement.query(By.css('.auto-complete-input')).nativeElement;
    input.value = 'Law';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    await fixture.whenStable().then(() => {
      expect(userServiceSpy.searchUsers).toHaveBeenCalledOnceWith('Law');
    })
  });
});
