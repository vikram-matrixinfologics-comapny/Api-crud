import { Component, OnInit } from '@angular/core';
import { EmpoyeeListComponent } from '.././empoyee-list/empoyee-list.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-form-employee',
  templateUrl: './edit-form-employee.component.html',
  styleUrls: ['./edit-form-employee.component.css']
})
export class EditFormEmployeeComponent implements OnInit {

  constructor(
  	private Emplist:EmpoyeeListComponent,
  	private router:Router
  	) { }

  ngOnInit(): void {

  }
 // EditUser(editDataId){
 // 	console.log(editDataId);
 // }
}
