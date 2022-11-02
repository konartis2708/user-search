import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'lib-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  @Output() public textChanged: EventEmitter<string> = new EventEmitter();
  @Output() public searchStarted: EventEmitter<string> = new EventEmitter();
  public userSearch = new FormControl<string>(''); // strongly typed forms!
  public subscription?: Subscription;
  public constructor() { }

  public ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.userSearch.valueChanges.
    pipe(debounceTime(1000)).subscribe((search) => {
      if (!search || search.length <= 2) {
        return;
      }

      this.textChanged.emit(search);
    });
  }

  public GoClicked() {
    this.searchStarted.emit(this.userSearch.value ?? '');
  }

}
