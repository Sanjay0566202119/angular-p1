import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ManageUserModel } from '../manage-user.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-manage-user-form',
  templateUrl: './manage-user-form.component.html',
  styleUrls: ['./manage-user-form.component.css']
})
export class ManageUserFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private apiService: ApiService) { }
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