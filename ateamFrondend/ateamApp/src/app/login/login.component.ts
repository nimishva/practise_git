import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiMainService } from '../api-main.service';
import { SocketService } from '../socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private mainService:ApiMainService,private socket:SocketService) { }

  ngOnInit() {
  } //ngOnint ends here


  submitSignup(form:NgForm){
    const data = {
      name      : form.value.username,
      email     : form.value.email,
      password  : form.value.password,
      gender    : form.value.gender,
      profile   : form.value.profile
    }
    this.mainService.signupUser(data)
    .subscribe((res)=>{
      console.log(res);
    })
    console.log(form.value);
  } //SubmitSignup ends here

  userSignIn(form:NgForm){
    const data = {
      email     : form.value.emailLogin,
      password  : form.value.passLogin
    }
    console.log(data);
    this.mainService.sigInFn(data)
    .subscribe((res)=>{
      if(res.status == 200){
        this.socket.setUserOnline(res.token)
      }
    })
  }//Signin Ends here

}//Main Class ends here
