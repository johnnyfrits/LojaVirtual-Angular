import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { Order } from 'src/app/models/order.model';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
})
export class OrderUpdateComponent implements OnInit {

  customers !: Customer[]
  order: Order = {
    id: 0,
    customerId: 0
  }

  constructor(private router: Router, private orderService: OrderService, private customerService: CustomerService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.customerService.read().subscribe(data => {

      this.customers = data.sort((a, b) => a.name.localeCompare(b.name));

      if (this.customers.length > 0 && this.customers[0].id)

        this.order.customerId = this.customers[0].id
    });

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.orderService.readById(+id).subscribe(data => {

        this.order = data;
      });
    }
  }

  updateOrder(): void {

    this.orderService.update(this.order).subscribe(() => {

      this.router.navigate(['/orders/details/' + this.order.id]);
    });
  }

  cancel(): void {

    this.router.navigate(['/orders']);
  }
}
