import { Component} from '@angular/core';

@Component({
  selector: 'app-teacher',
  template: `<p>This is access teacher file</p><input type="text" name="" id="" #box>
  <button (click)="getvel(box.value)">Button</button>`,
  // styleUrls: ['./']
})
export class teachercomponent
{
  // constructor() { }
  getvel(item:any|HTMLInputElement)
  {
    console.log(item);
  }
}
