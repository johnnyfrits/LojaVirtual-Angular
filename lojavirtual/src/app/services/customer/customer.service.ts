import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrls } from 'src/app/common/api-urls'
import { EMPTY, Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Customer } from 'src/app/models/customer.model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  read(): Observable<Customer[]> {

    return this.http.get<Customer[]>(ApiUrls.customers).pipe(
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
