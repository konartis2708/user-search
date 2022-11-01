import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {
  @Input() public results!: string[];
  @Output() public resultSelected: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
