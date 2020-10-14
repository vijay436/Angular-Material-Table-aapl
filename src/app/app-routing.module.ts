import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  {path:'Home', component:HomeComponent}, 
  {path:"Employee", component:EmployeeComponent},  
  {path:'',redirectTo:"/Employee", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
