import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-user',
  templateUrl: './manage-user.component.html',
  styleUrls: ['./manage-user.component.css']
})
export class ManageUserComponent implements OnInit {


  constructor(
    private _router: Router,
  ) { }

  ngOnInit(): void {
  }
  newChange(): void {
    this._router.navigateByUrl('manage-user');
}
}
