import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
// import { EditFormEmployeeComponent } from '.././edit-form-employee/edit-form-employee.component';

@Component({
  selector: 'app-empoyee-list',
  templateUrl: './empoyee-list.component.html',
  styleUrls: ['./empoyee-list.component.css']
})
export class EmpoyeeListComponent implements OnInit {
  public employees:any= [];
  public message:any= '';
  public submmitedEdit:boolean = false;
  public empEditDatas:any = [];
  submitted = false;

  constructor(
  	private api:ApiService,
  	private router:Router,
  	private formBuilder:FormBuilder,
  	// private empFormdEdit:EditFormEmployeeComponent
  	) { }

  ngOnInit(): void {
  	this.getEmployees();
  }

 getEmployees(){
 	this.api.getAllEmployee().subscribe(data=>{
 		//console.log(data);
 		this.employees = data;
 	});
 }

deleteuserdetails(employee){
	//console.log(employee)
	const empId = employee.id;
	this.api.deleteEmployee(empId).subscribe(res=>{
		console.log(res);
		this.message = res;
	});

	this.router.navigateByUrl('/employee-list');
}

updateUser(editId){
 //console.log(editId.id);
 const edit = editId.id;

 this.api.editEmployee(edit).subscribe(editEmp=>{
 	//console.log(editEmp);
 	this.empEditDatas = editEmp;
 });

 this.submmitedEdit = true;

 //this.router.navigateByUrl('empoyee-list');
}

//Create FormGroup

get f(){ return this.EditEmployee.controls}

 EditEmployee = this.formBuilder.group({
            name: [''],
            email: ['', [Validators.required, Validators.email]],
            position: [''],
            address: [''],
        });

 employeeEdit(event:any){
 	 this.submmitedEdit = false;
 	this.submitted = true;
 	const formId = event.target.hiddenEmp.value;
 	//const allValue = this.EditEmployee.value;

 	const editUser = {
 		email:event.target.email.value,
 		name:event.target.name.value,
 		position:event.target.position.value,
 		address:event.target.address.value
 	}
 	//console.log(editUser);
 	this.api.updateEmployee(editUser,formId).subscribe(responce=>{
 		this.message = responce;
   window.location.reload();
 	});
 }


}
