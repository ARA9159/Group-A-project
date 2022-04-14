import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent  {
  title = 'APPLY FOR CREDIT CARD';
  creditform:FormGroup;
  constructor(){
    this.creditform=new FormGroup({
      acnum:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{10}')]), 
      cnum:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{10}')]),
       
    });
  }
  
  get acnum(){
    return this.creditform.get('acnum');
  }
  get cnum(){
    return this.creditform.get('cnum');
  }
  create(){
    console.log(this.creditform.value);
    
    alert("You are Successfully applied for credit card");
    return this.creditform.reset();
}
}
