import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ManageUserModel } from '../manage-user.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-manage-user-form-update',
  templateUrl: './manage-user-form-update.component.html',
  styleUrls: ['./manage-user-form-update.component.css']
})
export class UpdateFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private apiService: ApiService, private route: ActivatedRoute) {

  }
  manageUser: ManageUserModel = new ManageUserModel();
  userForm!: FormGroup;
  userData: any[""];
  ngOnInit(): void {
    this.userForm = this.fb.group({
      userauuid: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      rol: ['', Validators.required],
      mobile: ['', Validators.required],
      raName: ['', Validators.required],
    });

    // console.log(this.route.snapshot.params['id'])

    //   this.apiService.getCurrentData(this.route.snapshot.params['id']).subscribe(data => {
    //     this.userForm = this.fb.group({
    //       userauuid: (data['userauuid']),
          
     
    //     });
    
    // });
    this.apiService.getCurrentData (this.route.paramMap).subscribe((params: ParamMap) => {
      console.log(params)
    });

  }



  onSubmit() {
    this.manageUser.userauuid = this.userForm.value.userauuid;
    this.manageUser.firstName = this.userForm.value.firstName;
    this.manageUser.lastName = this.userForm.value.lastName;
    this.manageUser.rol = this.userForm.value.rol;
    this.manageUser.mobile = this.userForm.value.mobile;
    this.manageUser.raName = this.userForm.value.raName;

    this.apiService.postUserName(this.manageUser).subscribe(data => {
    });
  }





}