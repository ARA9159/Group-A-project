import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
  }
  lgout():void{
    alert('you are successfully logged out')
    this.router.navigate(['home'])
  }
  lgin():void{
    
    this.router.navigate(['dashboard'])
  }

  

}
