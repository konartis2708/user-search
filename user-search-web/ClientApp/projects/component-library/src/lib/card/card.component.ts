import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() public heading!: string;
  @Input() public attributes!: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
