import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'lib-form-control-error',
  templateUrl: './form-control-error.component.html',
  styleUrls: ['./form-control-error.component.css']
})
export class FormControlErrorComponent implements OnInit {

  @Input() control!: AbstractControl<string>;
  @Input() displayName!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
