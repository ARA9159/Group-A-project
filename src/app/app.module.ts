import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ApplyForAtmComponent } from './apply-for-atm/apply-for-atm.component';
import { DebitComponent } from './debit/debit.component';
import { CreditComponent } from './credit/credit.component';
import { AccountHolderDetailsComponent } from './account-holder-details/account-holder-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateAccountComponent,
    ApplyForAtmComponent,
    DebitComponent,
    CreditComponent,
    AccountHolderDetailsComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    LogoutComponent,
    
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    ReactiveFormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
