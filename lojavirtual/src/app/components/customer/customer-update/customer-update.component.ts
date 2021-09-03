import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonMethods } from 'src/app/common/common-methods';
import { Customer } from 'src/app/models/customer.model';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-custormer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit {

  customer: Customer = {
    id: 0,
    name: '',
    cpf: 0
  }

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.customerService.readById(+id).subscribe(data => {

        this.customer = data
      });
    }
  }

  updateCustomer(): void {

    if (this.customer.id) {

      this.customerService.update(this.customer).subscribe(() => {

        CommonMethods.showMessage("Cliente atualizado!");

        this.cancel();
      });
    }
  }

  cancel(): void {

    this.router.navigate(['/customers']);
  }
}
