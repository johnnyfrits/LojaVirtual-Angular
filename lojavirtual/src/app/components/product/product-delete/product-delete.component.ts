import { Product } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product/product.service';
import { CommonMethods } from 'src/app/common/common-methods';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id != null) {

      this.productService.readById(+id).subscribe(data => {

        this.product = data;
      })
    }
  }

  deleteProduct() {

    if (this.product.id) {

      this.productService.delete(this.product.id).subscribe(() => {

        CommonMethods.showMessage("Produto excluído!");

        this.cancel();
      })
    }
  }

  cancel() {

    this.router.navigate(['/products']);
  }
}
