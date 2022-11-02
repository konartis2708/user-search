import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() text!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
