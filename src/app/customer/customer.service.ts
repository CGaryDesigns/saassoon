import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Customer } from './customer';

const customerList: Customer[] = [
    {'id': 860, 'firstName': 'Tierra', 'lastName': 'Hirthe', 'email': 'Mitchell.Moore57@gmail.com', 'phone': '978-502-6844'},
    {
        'id': 346,
        'firstName': 'Karlie',
        'lastName': 'DuBuque',
        'email': 'Adolph_Schneider@yahoo.com',
        'phone': '877-337-7016'
    },
    {
        'id': 454,
        'firstName': 'Kylee',
        'lastName': 'Windler',
        'email': 'Caterina1@yahoo.com',
        'phone': '904-608-1245'
      },
      {
        'id': 395,
        'firstName': 'Reina',
        'lastName': 'Macejkovic',
        'email': 'Kristy6@hotmail.com',
        'phone': '795-609-2087'
      },
      {
        'id': 777,
        'firstName': 'Marjolaine',
        'lastName': 'Harber',
        'email': 'Jacky72@hotmail.com',
        'phone': '255-399-0769'
      },
      {
        'id': 379,
        'firstName': 'Jonas',
        'lastName': 'Smitham',
        'email': 'Ray.Pfannerstill64@gmail.com',
        'phone': '035-595-4299'
      },
      {
        'id': 751,
        'firstName': 'Shaniya',
        'lastName': 'Jast',
        'email': 'Michale19@gmail.com',
        'phone': '309-394-2698'
      },
      {
        'id': 792,
        'firstName': 'Matilda',
        'lastName': 'Johnston',
        'email': 'Princess.Labadie21@gmail.com',
        'phone': '276-658-2788'
      },
      {
        'id': 139,
        'firstName': 'Junior',
        'lastName': 'Dare',
        'email': 'Nelda.Walker5@yahoo.com',
        'phone': '865-141-2380'
      },
      {
        'id': 991,
        'firstName': 'Mikel',
        'lastName': 'Kulas',
        'email': 'Jaunita96@gmail.com',
        'phone': '650-113-4872'
      }
];

@Injectable()
export class CustomerService {
    constructor(private http: Http) { }
    getCustomers(): Promise<Customer[]> {
        return Promise.resolve(customerList);
    }
    getCustomer(id: number): Promise<Customer> {
        return this.getCustomers().then(customerList => customerList.find(customer => customer.id === id));
    }
}
