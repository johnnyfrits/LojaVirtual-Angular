import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonMethods } from 'src/app/common/common-methods';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order/order.service';

@Component({
  selector: 'app-order-delete',
  templateUrl: './order-delete.component.html',
  styleUrls: ['./order-delete.component.css']
})

export class OrderDeleteComponent implements OnInit {

  order: Order = {
    id: 0,
    customerId: 0,
    customerName: '',
    date: ''
  };

  constructor(private router: Router, private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id != null) {

      this.orderService.readById(+id).subscribe(data => {

        this.order = data;
      });
    }
  }

  deleteOrder() {

    if (this.order.id) {

      this.orderService.delete(this.order.id).subscribe(() => {

        CommonMethods.showMessage("Pedido excluído!");

        this.cancel();
      });
    }
  }

  cancel(): void {

    this.router.navigate(['/orders']);
  }
}
