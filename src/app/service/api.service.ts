import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from '../model/config';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
	configration = new Config();

  constructor(private http:HttpClient) { }

  createEmployee(employee:any){
  	return this.http.post(this.configration.baseUrl+'/addemployee',employee);
  }

  getAllEmployee(){
  	return this.http.post(this.configration.baseUrl+'/employee','');
  }

  deleteEmployee(empId){
  	return this.http.post(this.configration.baseUrl+'/deleteEmployee/'+empId,'');
  }

  editEmployee(editId){
  	return this.http.post(this.configration.baseUrl+'/editEmployee/'+editId,'');
  }

  updateEmployee(val,id){
    return this.http.post(this.configration.baseUrl+'/updateEmployee/'+id,val);
  }
}
