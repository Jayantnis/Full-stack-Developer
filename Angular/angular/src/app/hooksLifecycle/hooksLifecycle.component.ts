import { Component, OnChanges,OnInit,SimpleChanges } from "@angular/core";

@Component
({

  selector:'app-hooksLifecycle',
  templateUrl:'./hooksLifecycle.component.html'
})

export class hooksLifecycleComponent implements OnInit,OnChanges
{
  // name:string="wsCube Tech";
  // little="angular app";

  constructor()
  {
    console.log("Constructor call");
  }

  ngOnInit()
  {
    //Called after the constructor, initializing input properties
    //,and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("ngOninit call");
  }

  ngOnChanges(change:SimpleChanges):void
  {
    //Called before any other lifecycle hook.
    // Use it to inject dependencies, but avoid
    // any serious work here.
    //Add '${implements OnChanges}' to the class.
   console.log("ngOnChanges called");
     }

}
