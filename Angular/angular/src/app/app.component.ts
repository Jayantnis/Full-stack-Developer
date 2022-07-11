
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 14';
  your_name="jayant";
  name()
  {
    return   `${this.your_name} Hello sir welcome to Angular`;
  }

  obj={
    name:'jayant',
    age:20
  }
  siteURL=window.location.href;
  arr=["dsf","sdf","long"]
}
