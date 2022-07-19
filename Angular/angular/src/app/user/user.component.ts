import { Component } from "@angular/core";
@Component({
selector:'app-user',
templateUrl:'./user.component.html',
styleUrls:['./user.component.css']
})

export class user_component
{
    // dependance constructor at home
    // constructor()
    // {
    //   alert("controll called");
    // }

  // ngOnInit(): void
  // {
  //   //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //   //Add 'implements OnInit' to the class.
       //alert("ngOnInit called");
  // }

// use Interpolation
  title="Hello sir this is Interpolation"
  fnf()
  {
  console.log("HELLO SIR");
  }


  // user use prperety binding
  name:string='Jayant';
  urls:string="https://picsum.photos/200/300";

  // user attribute  binding
  btn:string='payment button';


  // use at class binding
  mycls='box border';
  myclss1=false;
  readok=true;

  // use click biding
  onClick()
  {
    console.log('yes i am here');
  }

  power()
  {
    console.log("ACCESS function")
  }

  // Two way event binding
  uname:string='';
  event($event:any)
  {
  console.log($event)
  }

}
