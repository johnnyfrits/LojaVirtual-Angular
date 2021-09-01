import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-read',
  templateUrl: './customer-read.component.html',
  styleUrls: ['./customer-read.component.css']
})
export class CustomerReadComponent implements OnInit {

  customers !: Customer[]

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {

    this.customerService.read().subscribe(customers => {

      this.customers = customers;
    });
  }
}
