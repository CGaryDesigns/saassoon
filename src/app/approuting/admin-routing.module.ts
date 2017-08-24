import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerListComponent } from '../customer/customer-list.component';
import { CustomerDetailComponent } from '../customer/customer-detail.component';

const adminRoutes: Routes = [
    { path: 'customers', component: CustomerListComponent },
    { path: 'customer/:id', component: CustomerDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(adminRoutes) ],
    exports: [ RouterModule ]
})
export class AdminRoutingModule { }
