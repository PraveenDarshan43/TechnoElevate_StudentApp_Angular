import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './add-student/add-student.component';
import { DisplayStudentComponent } from './display-student/display-student.component';
import { FindPipe } from './find.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { StudentService } from './student.service';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [{
  path:"add-student" , component:AddStudentComponent},{
    path:"display-student", component:DisplayStudentComponent},
    {path:"update-student", component:UpdateStudentComponent},
    {path:"navbar",component:NavbarComponent},
    {path:"service",component:StudentService},
    {path:"find", component:FindPipe}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
