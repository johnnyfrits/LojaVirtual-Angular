import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrls } from 'src/app/common/api-urls'
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Customer } from 'src/app/models/customer.model';
import { CommonMethods } from 'src/app/common/common-methods';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  read(): Observable<Customer[]> {

    return this.http.get<Customer[]>(ApiUrls.customers).pipe(
      map(obj => obj),
      catchError(e => CommonMethods.errorHandler(e))
    );
  }

  readById(id: number): Observable<Customer> {

    return this.http.get<Customer>(`${ApiUrls.customers}/${id}`).pipe(

      map(obj => obj),
      catchError(e => CommonMethods.errorHandler(e))
    )
  }

  create(customer: Customer): Observable<Customer> {

    return this.http.post<Customer>(ApiUrls.customers, customer).pipe(
      map(obj => obj),
      catchError(e => CommonMethods.errorHandler(e))
    );
  }

  update(customer: Customer): Observable<Customer> {

    return this.http.put<Customer>(`${ApiUrls.customers}/${customer.id}`, customer).pipe(
      map(obj => obj),
      catchError(e => CommonMethods.errorHandler(e))
    );
  }

  delete(id: number): Observable<Customer> {

    return this.http.delete<Customer>(`${ApiUrls.customers}/${id}`).pipe(
      map(obj => obj),
      catchError(e => CommonMethods.errorHandler(e))
    );
  }
}
