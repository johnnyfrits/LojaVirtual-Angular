import { Order } from './../../../models/order.model';
import { Customer } from './../../../models/customer.model';
import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/services/order/order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  order: Order = {
    id: 0,
    customerId: 0,
    customerName: '',
    total: 0,
    date: '',
    orderItems: []
  }

  constructor(private orderService: OrderService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.orderService.readById(+id).subscribe(data => {

        this.order = data;
      });
    }
  }

  cancel(): void {

    this.router.navigate(['/orders']);
  }
}
