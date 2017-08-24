import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
    selector: 'customer-list',
    templateUrl: './customer-list.component.html'
})
export class CustomerListComponent implements OnInit {
    public customerList: Customer[];
    public customer: Customer;
    constructor(private customerService: CustomerService, private router: Router) { }
    ngOnInit(): void {
        this.customerService.getCustomers().then(customerList => this.customerList = customerList);
    }
}
