import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CustomerDetailComponent } from './customer/customer-detail.component';
import { CustomerListComponent } from './customer/customer-list.component';
import { CustomerService } from './customer/customer.service';
import { AdminRoutingModule } from './approuting/admin-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailComponent,
    CustomerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AdminRoutingModule
  ],
  providers: [CustomerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
