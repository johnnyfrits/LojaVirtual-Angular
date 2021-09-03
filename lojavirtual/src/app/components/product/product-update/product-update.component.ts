import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonMethods } from 'src/app/common/common-methods';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0
  }

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {

      this.productService.readById(+id).subscribe(data => {

        this.product = data
      });
    }
  }

  updateProduct(): void {

    if (this.product.id) {

      this.productService.update(this.product).subscribe(() => {

        CommonMethods.showMessage("Produto atualizado!");

        this.cancel();
      });
    }
  }

  cancel(): void {

    this.router.navigate(['/products']);
  }
}
