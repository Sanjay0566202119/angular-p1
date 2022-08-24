import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeModel } from '../employeeModel.model';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-employee-dashbord',
  templateUrl: './employee-dashbord.component.html',
  styleUrls: ['./employee-dashbord.component.css']
})
export class EmployeeDashbordComponent implements OnInit {

  formvalue!: FormGroup;
  submitted = false;
  employeeModelObj: EmployeeModel = new EmployeeModel();
  employeData?:any;


  constructor(private formBuilder: FormBuilder, private api: ApiService) { }
  
  ngOnInit(): void {
    this.formvalue = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      email: ['',Validators.required],
      phone: ['',Validators.required],
      salary: ['',Validators.required],

    });

   
    
    this.getALLEmploye()

  }

  get firstName() {
    return this.formvalue.get('firstName');
 } 

  

  postEmployeDetails() {
    this.employeeModelObj.firstname = this.formvalue.value.firstName;
    this.employeeModelObj.lastname = this.formvalue.value.lastname;
    this.employeeModelObj.email = this.formvalue.value.email;
    this.employeeModelObj.phone = this.formvalue.value.phone;
    this.employeeModelObj.salary = this.formvalue.value.salary;

    this.api.postEmploye(this.employeeModelObj)
      .subscribe(res => {
        console.log(res);
        this.getALLEmploye();
      })
  }
  getALLEmploye(){
    this.api.getEmploye(this.employeeModelObj)
    .subscribe(res => {
      this.employeData = res;
      console.log(res);
    })
  }
  onSubmit() {
    
    this.submitted = true;
    if (this.formvalue.valid) {
      alert('Form Submitted succesfully!!!\n Check the values in browser console.');
   
    }

    //  this.isSubmited = true
  }
  


}
