import { NgModule } from '@angular/core';
import{checkPipe} from './checkpipe.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations:[checkPipe],
  imports:[CommonModule],
  exports:[checkPipe]
})
export class Directivemodule {}
