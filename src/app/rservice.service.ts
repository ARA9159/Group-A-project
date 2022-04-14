import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RserviceService {
  url:string="http://localhost:9002/";

  constructor( private http:HttpClient) { }
storeData(cust:any){
  console.log(cust);
  //const header1=new HttpHeaders();
  //header1.append('Content-Type','application/json;charset=UTF-8');
  //return this.http.post(this.url,JSON.stringify(cust),{headers:header1});
  return this.http.post(this.url+"save",cust,{responseType:'text'});  
}
getpost(){
  return this.http.get(this.url+"getDetails");
}
login(data:any):Observable<any>{


  return this.http.post(this.url+"userlogin",data,{responseType:'text'});
}
}
