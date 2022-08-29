import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
url="http://localhost:3000/posts/";

  postUserName(id:any){
    return this.http.post<any>(this.url,id);
  }
  getUserName(id:any){
    return this.http.get<any>(this.url,id);
  }
  deleteUserName(id:any){
    return this.http.delete<any>(this.url+id);
  }
  
  getCurrentData(id:any){
    return this.http.get<any>(this.url+id);
  }
  

}
