import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonMethods } from 'src/app/common/common-methods';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customer: Customer = {

    name: '',
    cpf: 0
  }

  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  createCustomer(): void {

    this.customerService.create(this.customer).subscribe(() => {

      CommonMethods.showMessage("Cliente cadastrado!");

      this.cancel();
    });
  }

  cancel(): void {

    this.router.navigate(['/customers']);
  }
}
