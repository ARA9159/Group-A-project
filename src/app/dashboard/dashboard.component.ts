import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  active = 'welcome';
  title:string="Dashboard";
  constructor(private actRouter: ActivatedRoute, private router: Router) { }
  public isCollapsed = false;
  ngOnInit(): void {
    
    
    
  }
  
  
 
}
