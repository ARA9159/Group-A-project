import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateAccountComponent} from './create-account/create-account.component';
import{CreditComponent} from './credit/credit.component'
import{ApplyForAtmComponent} from'./apply-for-atm/apply-for-atm.component';
import {DebitComponent} from './debit/debit.component'
import { AccountHolderDetailsComponent} from './account-holder-details/account-holder-details.component';
import {AppComponent} from'./app.component';
import { componentFactoryName, createAotCompiler } from '@angular/compiler';
import { LoginComponent } from './login/login.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"create-account",component:CreateAccountComponent},
  {path:"login",component:LoginComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"apply-for-atm",component:ApplyForAtmComponent},
  {path:"debit",component:DebitComponent},
  {path:"credit",component:CreditComponent},
  {path:"account-holder-details",component:AccountHolderDetailsComponent},
  {path:"home",component:HomeComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
