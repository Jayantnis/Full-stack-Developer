import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { user_component } from './user/user.component';
import{hooksLifecycleComponent} from './hooksLifecycle/hooksLifecycle.component';
// import { studentmodule } from './student/student.module';
// import { teachermodule } from './teacher/teacher.module';
//12/07/2022
//module check

// ngOnInit() step first
// import { Component_Oninit } from './oninit_process/oninit_process.component';

@NgModule({
  declarations: [
    AppComponent,user_component,hooksLifecycleComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
