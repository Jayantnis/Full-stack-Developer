// import { Input } from '@angular/core';
// import { AppComponent } from './../app.component';
import { Component ,EventEmitter,Input, Output} from "@angular/core";
// import { AppComponent } from "../app.component";
@Component({
selector:'app-todo',
templateUrl:"./todo.component.html",
styleUrls:['./todo.component.css']
})

export class todo_Component
{
  productID:any=10;

  // input & output
  @Input()myin:string|any;
  // type of data sends to parent components
  @Output()myout:EventEmitter<string>=new EventEmitter();
  outputstring="Hi I am  child component ";
  senddata()
  {
    this.myout.emit(this.outputstring);
  }
  ngOnInit(): void
  {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.myin);
  }
  // pipes
  value="This is Pipes";
  date=new Date();
}
