import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl} from '@angular/forms';
@Component({
  selector: 'app-debit',
  templateUrl: './debit.component.html',
  styleUrls: ['./debit.component.css']
})
export class DebitComponent {
  title="Withdraw"
  aform:FormGroup;
  num:number;
  constructor() { 
    this.aform=new FormGroup({
    accnum:new FormControl("",[Validators.required,Validators.minLength(12)]),
    money:new FormControl("",[Validators.required,Validators.pattern('[0-9]+')])
    });
  
  }
  get accnum(){
    return this.aform.get('accnum');
  }
  get money(){
    return this.aform.get('money');
  }
  login(){
    console.log(this.aform.value.accnum)
    console.log(this.aform.value.money)

  }
  msg:string="";
  bal:number;
  bmsg:string="";
  display():void{
    this.msg="successfully debited";
    this.bmsg="your current balance is";
    this.bal=0;

    
    
  }
  
  



  
}
