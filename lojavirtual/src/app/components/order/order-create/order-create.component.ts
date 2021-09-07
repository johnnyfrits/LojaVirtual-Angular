import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { Order } from 'src/app/models/order.model';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {

  customers !: Customer[]
  order: Order = {
    id: 0,
    customerId: 0
  }

  constructor(private router: Router, private orderService: OrderService, private customerService: CustomerService) { }

  ngOnInit(): void {

    this.customerService.read().subscribe(data => {

      this.customers = data.sort((a, b) => a.name.localeCompare(b.name));

      if (this.customers.length > 0 && this.customers[0].id)

        this.order.customerId = this.customers[0].id
    });
  }

  createOrder(): void {

    this.orderService.create(this.order).subscribe(newOrder => {

      this.router.navigate(['/orders/details/' + newOrder.id]);
    });
  }

  cancel(): void {

    this.router.navigate(['/orders']);
  }
}
