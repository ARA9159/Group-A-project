import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { RserviceService } from '../rservice.service';
import { LoginData } from './LoginData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  loginform:FormGroup;
  logindata:LoginData;
  failMessage:string;
  constructor(private router: Router, private rservice: RserviceService) { 
    this.loginform=new FormGroup({
      myemail:new FormControl("",[Validators.required,Validators.email]),
      pwd:new FormControl("",[Validators.required,Validators.minLength(8)]),
      
    });
  }

  get myemail(){
    return this.loginform.get('myemail');
  }

  get pwd(){
   return this.loginform.get('pwd');
 }

 login():void{
   this.logindata=new LoginData(this.loginform.value.myemail,this.loginform.value.pwd);
   
   this.rservice.login(this.logindata)
   .subscribe(response =>{
     console.log(response);
     if(response==='Login success'){
      this.router.navigate(['dashboard']);
     }
     else{
       this.failMessage='inalid credentials';
     }
   })
  /*const url = this.router.serializeUrl(
    this.router.createUrlTree(['/dashboard'])
  );

  //window.open(url, '_blank');*/
  

 }

 
}

