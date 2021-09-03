import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonMethods } from 'src/app/common/common-methods';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: 0
  }

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
  }

  createProduct(): void {

    this.productService.create(this.product).subscribe(() => {

      CommonMethods.showMessage("Produto cadastrado!");

      this.cancel();
    });
  }

  cancel(): void {

    this.router.navigate(['/products']);
  }
}
