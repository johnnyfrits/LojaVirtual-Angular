import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { OrderComponent } from './views/order/order.component';
import { OrderReadComponent } from './components/order/order-read/order-read.component';
import { OrderCreateComponent } from './components/order/order-create/order-create.component';
import { OrderUpdateComponent } from './components/order/order-update/order-update.component';
import { OrderDeleteComponent } from './components/order/order-delete/order-delete.component';
import { ProductComponent } from './views/product/product.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { CustomerComponent } from './views/customer/customer.component';
import { CustomerReadComponent } from './components/customer/customer-read/customer-read.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './components/customer/customer-delete/customer-delete.component';

const routes: Routes = [
  { path: "", component: HomeComponent, },
  { path: "orders", component: OrderComponent },
  { path: "orders/read", component: OrderReadComponent },
  { path: "orders/create", component: OrderCreateComponent },
  { path: "orders/update", component: OrderUpdateComponent },
  { path: "orders/delete", component: OrderDeleteComponent },
  { path: "customers", component: CustomerComponent },
  { path: "customers/read", component: CustomerReadComponent },
  { path: "customers/create", component: CustomerCreateComponent },
  { path: "customers/update", component: CustomerUpdateComponent },
  { path: "customers/delete", component: CustomerDeleteComponent },
  { path: "products", component: ProductComponent },
  { path: "products/read", component: ProductReadComponent },
  { path: "products/create", component: ProductCreateComponent },
  { path: "products/update", component: ProductUpdateComponent },
  { path: "products/delete", component: ProductDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
