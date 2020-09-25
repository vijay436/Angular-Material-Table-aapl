import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeptComponent } from './dept/dept.component';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {path:'Home', component:HomeComponent}, 
  {path:"Employee", component:EmployeeComponent},
  {path:"Student", component: StudentComponent},
  {path:"Dept", component:DeptComponent},
  {path:'',redirectTo:"/Home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
