import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { ApiUrls } from 'src/app/common/api-urls'
import { Order } from 'src/app/models/order.model';
import { catchError, map } from 'rxjs/operators';

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

  errorHandler(err: any): Observable<any> {

    console.log(err);

    alert("Ocorreu um erro!");

    return EMPTY;
  }
}
