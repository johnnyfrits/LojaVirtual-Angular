import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { ApiUrls } from 'src/app/common/api-urls'
import { Order } from 'src/app/models/order.model';
import { catchError, map } from 'rxjs/operators';
import { CommonMethods } from 'src/app/common/common-methods';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  read(): Observable<Order[]> {

    return this.http.get<Order[]>(ApiUrls.orders).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<Order> {

    return this.http.get<Order>(`${ApiUrls.orders}/${id}`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  create(order: Order): Observable<Order> {

    return this.http.post<Order>(ApiUrls.orders, order).pipe(
      map(obj => obj),
      catchError(e => CommonMethods.errorHandler(e))
    );
  }

  update(order: Order): Observable<Order> {

    return this.http.put<Order>(`${ApiUrls.orders}/${order.id}`, order).pipe(
      map(obj => obj),
      catchError(e => CommonMethods.errorHandler(e))
    );
  }

  delete(id: number): Observable<Order> {

    return this.http.delete<Order>(`${ApiUrls.orders}/${id}`).pipe(
      map(obj => obj),
      catchError(e => CommonMethods.errorHandler(e))
    );
  }

  errorHandler(err: any): Observable<any> {

    console.log(err);

    alert("Ocorreu um erro!");

    return EMPTY;
  }
}
