import { Component } from '@angular/core';
import { user_component } from './user/user.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
{
  title = 'Angular';
  // constructor(private readonly usercomponent:user_component){}
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

// Interpolation
//  memeber initialize
name:string="Jayant";
url:string="https://picsum.photos/200/300";

fun():string{
  return this.name+"-"+this.url;
}


// decorator
// @Input() data:String;
// @Output() params:string;
// @HostListener()
// update() { }
// @Input()inputvariable="hello I'm parent class";
InVar="I am Parent component";
getdata(value: any){
console.log(value);
}

}
