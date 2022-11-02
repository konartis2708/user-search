import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'lib-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  @Input() text!: string;
  @Output() hideClicked: EventEmitter<void> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public HideAlert() {
    this.hideClicked.emit();
  }

}
