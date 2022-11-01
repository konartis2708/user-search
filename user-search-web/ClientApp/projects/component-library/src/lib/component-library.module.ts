import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { FormControlErrorComponent } from './form-control-error/form-control-error.component';



@NgModule({
  declarations: [
    SearchBoxComponent,
    ButtonComponent,
    CardComponent,
    SearchResultsComponent,
    FormControlErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SearchBoxComponent,
    ButtonComponent,
    CardComponent,
    SearchResultsComponent,
    FormControlErrorComponent
  ]
})
export class ComponentLibraryModule { }
