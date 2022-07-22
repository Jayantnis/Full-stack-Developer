import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

import { user_component } from './user/user.component';
import { todo_module_testdecorator } from './todo/todo.module';
import{Directivemodule}from './directives_set/directives_set.module';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import {pipesComponent } from './pipes/usd-inr.component';

// import { Directive_mod } from './Directives/Directives.module';
// import { studentmodule } from './student/student.module';
// import { teachermodule } from './teacher/teacher.module';
//12/07/2022
//module check

// ngOnInit() step first
// import { Component_Oninit } from './oninit_process/oninit_process.component';

@NgModule({
  declarations: [AppComponent,user_component, UsdInrPipe,pipesComponent],
  imports: [BrowserModule,todo_module_testdecorator,Directivemodule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
