import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, MinLengthValidator, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-for-atm',
  templateUrl: './apply-for-atm.component.html',
  styleUrls: ['./apply-for-atm.component.css']
})
export class ApplyForAtmComponent{
  title = 'APPLY YOUR CARD HERE';
  aform:FormGroup;

  constructor() { 
    this.aform=new FormGroup({
    Accountnumber:new FormControl("",[Validators.required,Validators.pattern('[0-9]+'),Validators.minLength(12)]),
    mobilenumber:new FormControl("",[Validators.required,Validators.pattern('[0-9]+'),Validators.minLength(10)]),
    Nameonyourcard:new FormControl("",[Validators.required,Validators.pattern("[a-zA-Z ]*")])
  });
  
  }

  get Nameonyourcard(){
    return this.aform.get('Nameonyourcard');
  }
  get Accountnumber(){
    return this.aform.get('Accountnumber');
  }
  get mobilenumber(){
    return this.aform.get('mobilenumber');
  }
  login(){
    console.log(this.aform.value.Nameonyourcard)
    console.log(this.aform.value.Accountnumber)
    console.log(this.aform.value.mobilenumber)
    alert('Congratulations you have applied your debit card. It will be delivered within 10-14 working days')

  }
}