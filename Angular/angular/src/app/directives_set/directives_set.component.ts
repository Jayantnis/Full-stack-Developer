import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives_set',
  templateUrl: './directives_set.component.html',
  styleUrls: ['./directives_set.component.css']
})
export class Directives_setComponent implements OnInit {

  constructor() { }

  ngOnInit(){}

  func()
  {
    console.log("hello set")
  }

  // structural directives boolean-> true /false
  check_var=true;
}
