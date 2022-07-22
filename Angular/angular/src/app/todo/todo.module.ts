import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { todo_Component } from './todo.component';
@NgModule //decorator class decorator
({
declarations:[todo_Component],
imports:[CommonModule],exports:[todo_Component]
})
export class todo_module_testdecorator
{

}
