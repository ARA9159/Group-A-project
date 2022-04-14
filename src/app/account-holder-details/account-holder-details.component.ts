import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl} from '@angular/forms';
import { RserviceService } from '../rservice.service';
@Component({
  selector: 'app-account-holder-details',
  templateUrl: './account-holder-details.component.html',
  styleUrls: ['./account-holder-details.component.css']
})
/*export class AccountHolderDetailsComponent {
  title = 'ACCOUNT HOLDER DETAILS';
  aform:FormGroup;

  constructor() { }

  ngOnInit() {
  }

}*/
export class AccountHolderDetailsComponent implements OnInit{
  title = 'ACCOUNT HOLDER DETAILS';
  aform:FormGroup;
 

  posts:any=[];
  constructor(private rservice:RserviceService){
    this.aform = new FormGroup({
      accname:new FormControl("",[Validators.required,Validators.pattern('[0-9]+')])
  });
}
  ngOnInit(){
    this.rservice.getpost().subscribe(data=>{
      console.log(data);
      this.posts=data;
      }, error=>{
        console.log(error.message)
    })
  }
get accname(){
  return this.aform.get('accname');

}
login(){
console.log(this.aform.value.accname)
/*this.rservice.getpost().subscribe(data=>{
  this.posts=data;
});*/
alert("Successfully submitted")

return this.aform.reset();


}

  

}