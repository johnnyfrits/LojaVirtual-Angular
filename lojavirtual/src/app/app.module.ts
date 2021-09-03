import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header/header.component';
import { FooterComponent } from './components/template/footer/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { OrderComponent } from './views/order/order.component';
import { ProductComponent } from './views/product/product.component';
import { CustomerComponent } from './views/customer/customer.component';
import { NavComponent } from './components/template/nav/nav/nav.component';
import { OrderReadComponent } from './components/order/order-read/order-read.component';
import { CustomerReadComponent } from './components/customer/customer-read/customer-read.component';
import { ProductReadComponent } from './components/product/product-read/product-read.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { CustomerCreateComponent } from './components/customer/customer-create/customer-create.component';
import { CustomerUpdateComponent } from './components/customer/customer-update/customer-update.component';
import { CustomerDeleteComponent } from './components/customer/customer-delete/customer-delete.component';
import { OrderCreateComponent } from './components/order/order-create/order-create.component';
import { OrderUpdateComponent } from './components/order/order-update/order-update.component';
import { OrderDeleteComponent } from './components/order/order-delete/order-delete.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

import { CpfPipe } from 'src/app/pipes/cpf.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    OrderComponent,
    ProductComponent,
    CustomerComponent,
    NavComponent,
    OrderReadComponent,
    CustomerReadComponent,
    ProductReadComponent,
    ProductCreateComponent,
    ProductUpdateComponent,
    ProductDeleteComponent,
    CustomerCreateComponent,
    CustomerUpdateComponent,
    CustomerDeleteComponent,
    OrderCreateComponent,
    OrderUpdateComponent,
    OrderDeleteComponent,
    CpfPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'pt-BR',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
