import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonMethods } from 'src/app/common/common-methods';
import { OrderItems } from 'src/app/models/orderItems.model';
import { OrderItemsService } from 'src/app/services/orderItems/order-items.service';

@Component({
  selector: 'app-order-items-delete',
  templateUrl: './order-items-delete.component.html',
  styleUrls: ['./order-items-delete.component.css']
})
export class OrderItemsDeleteComponent implements OnInit {

  orderItems: OrderItems = {
    orderId: 0,
    productId: 0,
    quantity: 1,
    price: 0,
    total: 0
  };

  constructor(private orderItemsService: OrderItemsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const orderItemId = this.route.snapshot.paramMap.get('id');

    if (orderItemId) {

      this.orderItemsService.readById(+orderItemId).subscribe(data => {

        this.orderItems = data;
      });
    }
  }

  deleteOrderItem() {

    if (this.orderItems.id) {

      this.orderItemsService.delete(this.orderItems.id).subscribe(() => {

        CommonMethods.showMessage("Items do Pedido excluído!");

        this.cancel();
      })
    }
  }

  cancel() {

    this.router.navigate(['/orders/details/' + this.orderItems.orderId]);
  }
}
