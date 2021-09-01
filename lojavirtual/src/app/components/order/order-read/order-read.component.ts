import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-order-read',
  templateUrl: './order-read.component.html',
  styleUrls: ['./order-read.component.css']
})

export class OrderReadComponent implements OnInit {

  orders!: Order[];

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {

    this.orderService.read().subscribe(orders => {

      this.orders = orders;
    });
  }
}
