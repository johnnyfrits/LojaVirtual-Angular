import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrls } from 'src/app/common/api-urls';
import { CommonMethods } from 'src/app/common/common-methods';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  read(): Observable<Product[]> {

    return this.http.get<Product[]>(ApiUrls.products).pipe(

      map(obj => obj),
      catchError(e => CommonMethods.errorHandler(e))
    )
  }

  readById(id: number): Observable<Product> {

    return this.http.get<Product>(`${ApiUrls.products}/${id}`).pipe(

      map(obj => obj),
      catchError(e => CommonMethods.errorHandler(e))
    )
  }

  create(product: Product): Observable<Product> {

    return this.http.post<Product>(ApiUrls.products, product).pipe(
      map(obj => obj),
      catchError(e => CommonMethods.errorHandler(e))
    );
  }

  update(product: Product): Observable<Product> {

    return this.http.put<Product>(`${ApiUrls.products}/${product.id}`, product).pipe(
      map(obj => obj),
      catchError(e => CommonMethods.errorHandler(e))
    );
  }

  delete(id: number): Observable<Product> {

    return this.http.delete<Product>(`${ApiUrls.products}/${id}`).pipe(
      map(obj => obj),
      catchError(e => CommonMethods.errorHandler(e))
    );
  }
}
