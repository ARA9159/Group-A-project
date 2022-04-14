import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  title = 'STATE BANK OF INDIA';
  imgloc:string="../assets/homeimage.jpg";
  about:string="State Bank of India (SBI) is an Indian multinational public sector bank and financial services statutory body headquartered in Mumbai, Maharashtra. SBI is the 43rd largest bank in the world and ranked 221st in the Fortune Global 500 list of the world's biggest corporations of 2020, being the only Indian bank on the list.[6] It is a public sector bank and the largest bank in India with a 23% market share by assets and a 25% share of the total loan and deposits market.[7] It is also the fifth largest employer in India with nearly 250,000 employees.";
  by:string="By Group-A"
  

}
