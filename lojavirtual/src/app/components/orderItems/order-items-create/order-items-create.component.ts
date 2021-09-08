import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderItems } from 'src/app/models/orderItems.model';
import { Product } from 'src/app/models/product.model';
import { OrderItemsService } from 'src/app/services/orderItems/order-items.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-order-items-create',
  templateUrl: './order-items-create.component.html',
  styleUrls: ['./order-items-create.component.css']
})
export class OrderItemsCreateComponent implements OnInit {

  products!: Product[];
  orderItems: OrderItems = {
    orderId: 0,
    productId: 0,
    quantity: 1,
    price: 0,
    total: 0
  };

  constructor(private productService: ProductService, private orderItemsService: OrderItemsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const orderId = this.route.snapshot.paramMap.get('orderId');

    this.orderItems.orderId = orderId ? +orderId : 0;

    this.productService.read().subscribe((products => {

      this.products = products.sort((p1, p2) => p1.name.localeCompare(p2.name));

      if (this.products.length > 0 && this.products[0].id) {

        var p = products[0];

        this.orderItems.productId = p.id;
        this.orderItems.quantity = 1;
        this.orderItems.price = p.price;
        this.orderItems.total = p.price;
      }
    }));
  }

  createOrderItems(): void {

    this.orderItemsService.create(this.orderItems).subscribe(() => {

      this.cancel();
    });
  }

  cancel(): void {

    this.router.navigate(['/orders/details/' + this.orderItems.orderId]);
  }

  getPrice() {

    let product = this.products.find(p => p.id == this.orderItems.productId);

    if (product) {

      this.orderItems.price = product.price;

      this.getTotal();
    }
  }

  getTotal() {

    this.orderItems.price = this.orderItems.price;

    this.orderItems.total = this.orderItemsService.getTotal(this.orderItems.quantity, this.orderItems.price);
  }
}
