import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrls } from 'src/app/common/api-urls';
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
      catchError(e => ApiUrls.errorHandler(e))
    )
  }
}
