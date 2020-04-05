import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { EmpoyeeListComponent} from './component/empoyee-list/empoyee-list.component';
import { EditFormEmployeeComponent } from './component/edit-form-employee/edit-form-employee.component';
const routes: Routes = [
{path:'employee-list',component:EmpoyeeListComponent},
{path:'employee-form',component:EmployeeFormComponent},
{path:'employee-edit',component:EditFormEmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
