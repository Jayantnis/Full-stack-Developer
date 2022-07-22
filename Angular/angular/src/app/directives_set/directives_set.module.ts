import { NgModule } from '@angular/core';
// import { NgModule } from "@angular/forms";
import { Directives_setComponent } from './directives_set.component';
// import { studentComponent } from './student.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations:[Directives_setComponent],
  imports:[CommonModule],
  exports:[Directives_setComponent]
})
export class Directivemodule {}
