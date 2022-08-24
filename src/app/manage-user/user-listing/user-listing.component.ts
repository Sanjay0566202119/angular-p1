import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-user-listing',
  templateUrl: './user-listing.component.html',
  styleUrls: ['./user-listing.component.css']
})
export class UserListingComponent implements OnInit {

  constructor(private apiService: ApiService,) { }

  userData:any = [];

  ngOnInit(): void {
   
    this.getUserdata()
  }




getUserdata() {
  this.apiService.getUserName('').subscribe(data => {
    this.userData = data
  
  })



}


}
