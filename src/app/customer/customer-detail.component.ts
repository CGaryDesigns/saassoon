import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';

import { Customer } from './customer';
import { CustomerService } from './customer.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'customer-detail',
    templateUrl: './customer-detail.component.html',
    styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {
    @Input() selectedCustomer: Customer;
    constructor(private customerService: CustomerService, private route: ActivatedRoute, private location: Location) { }
    ngOnInit(): void {
        this.route.paramMap.switchMap((params: ParamMap) => this.customerService.getCustomer(+params.get('id')))
        .subscribe(customer => this.selectedCustomer = customer);
    }
}
