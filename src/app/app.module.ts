import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeFormComponent } from './component/employee-form/employee-form.component';
import { EmpoyeeListComponent } from './component/empoyee-list/empoyee-list.component';
import { EditFormEmployeeComponent } from './component/edit-form-employee/edit-form-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeFormComponent,
    EmpoyeeListComponent,
    EditFormEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [EmpoyeeListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
