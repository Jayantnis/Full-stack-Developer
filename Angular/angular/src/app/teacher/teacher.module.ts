import { NgModule } from "@angular/core";
import { teachercomponent } from "./teacher.component";
import { CommonModule } from "@angular/common";
@NgModule({
declarations:[teachercomponent],
imports:[CommonModule],
exports:[teachercomponent]
})
export class teachermodule {}
