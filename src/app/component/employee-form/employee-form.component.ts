import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

	submitted:boolean = false;

  constructor(
  	private formBuilder: FormBuilder,
  	private api: ApiService,
    private router:Router
  	) { }

  ngOnInit(): void {
  }


 addEmployee = this.formBuilder.group({
            name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            position: ['', Validators.required],
            address: ['',Validators.required],
        });
 
 get f(){ return this.addEmployee.controls;}

    employeeFunction() {
        this.submitted = true;
        //console.log(this.addEmployee.value);

        this.api.createEmployee(this.addEmployee.value).subscribe(
        	data=>{
          this.handle(data),
          window.location.href= "/employee-list";
          },
        	error=>this.errorHandle(error)
        	);

        this.router.navigateByUrl('/employee-list');
    }

    handle(data){
    	console.log(data);	
    }

    errorHandle(error){
       console.log(error);
    }
}
