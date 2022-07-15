import { Component, OnInit } from "@angular/core";
@Component({
selector:'app-user',
templateUrl:'./user.component.html'
})

export class user_component implements OnInit
{
    // dependance constructor at home
    constructor()
    {
      alert("controll called");
    }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    alert("ngOnInit called");
  }
}
