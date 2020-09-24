import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiMainService {
  private apiUrl = "http://localhost:3000/api/v1/";
  constructor(private http:HttpClient) { }

  signupUser(data){
    return this.http.post(`${this.apiUrl}users/signUp`,data);
  } //Signup Ends here
  sigInFn(data):any{
    return this.http.post(`${this.apiUrl}users/signIn`,data);
  }
} //Main Class ends here


