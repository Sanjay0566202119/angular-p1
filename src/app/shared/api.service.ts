import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postEmploye(data: any) {
    return this.http.post<any>('http://localhost:3000/posts/', data)
  }
  getEmploye(data: any) {
    return this.http.get<any>('http://localhost:3000/posts/', data)
  }



}
