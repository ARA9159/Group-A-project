import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl} from '@angular/forms';
import { Register } from '../apply-for-atm/register';
import { RserviceService } from '../rservice.service';
import { AccountType } from './accounttype';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent{
  title = 'CREATE ACCOUNT';
  accountTypes:AccountType[]=[
    {id:1,name:'SAVING ACCOUNT'},
    {id:2,name:'CURRENT ACCOUNT'},
    {id:3,name:'SALARY ACCOUNT'},

  ]
  registerform:FormGroup;
  successMessage:string;
  //registers:Register[]=[];
  register:Register;
  constructor(private rservice:RserviceService, private router:Router ){
    this.registerform=new FormGroup({
      type:new FormControl(null,[Validators.required]),
      fname:new FormControl(null,[Validators.required]),
      lname:new FormControl(null,[Validators.required]),
      gname:new FormControl(null,[Validators.required]),
      age:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{2}')]),
      dob:new FormControl(null,[Validators.required]),
      cnum:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{10}')]),
      anum:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{12}')]),
      eid:new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]),
      npsw:new FormControl(null,[Validators.required,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}$')]),
      cpsw:new FormControl(null,[Validators.required,Validators.pattern('^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^0-9]*[0-9]).{8,}$')]),
      adres:new FormControl(null,[Validators.required,Validators.pattern('[0-9a-zA-Z-/]{2,5}')]),
      place:new FormControl(null,[Validators.required]),
      code:new FormControl(null,[Validators.required,Validators.pattern('[0-9]{6}')])
    });
  }
  create(){
   // this.registers.push(new Register(this.registerform.value.type,
    
   this.register = new Register(
    this.registerform.value.type,
    this.registerform.value.fname,
  this.registerform.value.lname,
this.registerform.value.gname,
this.registerform.value.age,
this.registerform.value.dob,
this.registerform.value.cnum,
this.registerform.value.anum,
this.registerform.value.eid,
this.registerform.value.npsw,
this.registerform.value.cpsw,
this.registerform.value.adres,
this.registerform.value.place,
this.registerform.value.code
    );
    console.log(this.register);
    this.rservice.storeData(this.register)
    .subscribe(registers=>{
      console.log(registers);
      console.log(this.registerform.value);
      alert('successfully created account');
      this.router.navigate(['home'])
    })
    //return this.registerform.reset();
  }
  get type(){
    return this.registerform.get('type');
  }
  get fname(){
    return this.registerform.get('fname');
  }
  get lname(){
    return this.registerform.get('lname');
  }
  get gname(){
    return this.registerform.get('gname');
  }
  get age(){
    return this.registerform.get('age');
  }
  get dob(){
    return this.registerform.get('dob');
  }
  get cnum(){
    return this.registerform.get('cnum');
  }
  get anum(){
    return this.registerform.get('anum');
  }
  get eid(){
    return this.registerform.get('eid');
  }
  get npsw(){
    return this.registerform.get('npsw');
  }
  get cpsw(){
    return this,this.registerform.get('cpsw');
  }
  get adres(){
    return this.registerform.get('adres');
  }
  get place(){
    return this.registerform.get('place');
  }
  get code(){
    return this.registerform.get('code');
  }
  
}