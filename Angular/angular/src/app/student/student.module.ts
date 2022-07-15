import { NgModule } from '@angular/core';
// import { NgModule } from "@angular/forms";
import { studentComponent } from './student.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations:[studentComponent],
  imports:[CommonModule],
  exports:[studentComponent]
})
export class studentmodule {}
