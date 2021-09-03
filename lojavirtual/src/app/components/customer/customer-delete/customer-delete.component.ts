import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonMethods } from 'src/app/common/common-methods';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  customer: Customer = {
    id: 0,
    name: '',
    cpf: 0
  }

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id != null) {

      this.customerService.readById(+id).subscribe(data => {

        this.customer = data;
      })
    }
  }

  deleteCustomer() {

    if (this.customer.id) {

      this.customerService.delete(this.customer.id).subscribe(() => {

        CommonMethods.showMessage("Cliente excluído!");

        this.cancel();
      })
    }
  }

  cancel() {

    this.router.navigate(['/customers']);
  }
}
