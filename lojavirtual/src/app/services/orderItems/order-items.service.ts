import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { ApiUrls } from 'src/app/common/api-urls'
import { OrderItems } from 'src/app/models/orderItems.model';
import { catchError, map } from 'rxjs/operators';
import { CommonMethods } from 'src/app/common/common-methods';

@Injectable({
  providedIn: 'root'
})
export class OrderItemsService {

  constructor(private http: HttpClient) { }

  read(): Observable<OrderItems[]> {

    return this.http.get<OrderItems[]>(ApiUrls.orderItems).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  readById(id: number): Observable<OrderItems> {

    return this.http.get<OrderItems>(`${ApiUrls.orderItems}/${id}`).pipe(
      map(obj => obj),
      catchError(e => this.errorHandler(e))
    );
  }

  create(order: OrderItems): Observable<OrderItems> {

    return this.http.post<OrderItems>(ApiUrls.orderItems, order).pipe(
      map(obj => obj),
      catchError(e => CommonMethods.errorHandler(e))
    );
  }

  update(orderItems: OrderItems): Observable<OrderItems> {

    return this.http.put<OrderItems>(`${ApiUrls.orderItems}/${orderItems.id}`, orderItems).pipe(
      map(obj => obj),
      catchError(e => CommonMethods.errorHandler(e))
    );
  }

  delete(id: number): Observable<OrderItems> {

    return this.http.delete<OrderItems>(`${ApiUrls.orderItems}/${id}`).pipe(
      map(obj => obj),
      catchError(e => CommonMethods.errorHandler(e))
    );
  }

  getTotal(quantity?: number, price?: number): number {

    return quantity && price ? quantity * price : 0;
  }

  errorHandler(err: any): Observable<any> {

    console.log(err);

    alert("Ocorreu um erro!");

    return EMPTY;
  }
}
