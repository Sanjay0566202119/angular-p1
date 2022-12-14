import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ManageUserModel } from '../manage-user.model';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-manage-user-form',
  templateUrl: './manage-user-form.component.html',
  styleUrls: ['./manage-user-form.component.css']
})
export class ManageUserFormComponent implements OnInit {

  constructor(private fb: FormBuilder, private apiService: ApiService, private route: ActivatedRoute, private router:Router) { }
  manageUser: ManageUserModel = new ManageUserModel();
  userForm!: FormGroup;
  userData: any[""];
  issubmited:boolean=false;

  ngOnInit(): void {
    this.userForm = this.fb.group({
      userauuid: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      rol: ['', Validators.required],
      mobile: ['', Validators.required],
      raName: ['', Validators.required],
    });

    console.log(this.route.snapshot.params['id'])
    this.apiService.getCurrentData(this.route.snapshot.params['id']).subscribe(data => {
      if (data) {
        this.userForm.controls['userauuid'].setValue(data.userauuid);
        this.userForm.controls['firstName'].setValue(data.firstName);
        this.userForm.controls['lastName'].setValue(data.lastName);
        this.userForm.controls['rol'].setValue(data.rol);
        this.userForm.controls['mobile'].setValue(data.mobile);
        this.userForm.controls['raName'].setValue(data.raName);
      }

    })
  }
  onSubmit() {
    this.issubmited=true;
    this.router.navigateByUrl('/');
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