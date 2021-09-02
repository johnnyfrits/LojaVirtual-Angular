import { EMPTY, Observable } from "rxjs";

export class ApiUrls {

    public static baseUrl: string = 'https://localhost:5001/api/';
    public static orders: string = ApiUrls.baseUrl + 'orders';
    public static customers: string = ApiUrls.baseUrl + 'customers';
    public static products: string = ApiUrls.baseUrl + 'products';

    public static errorHandler(err: any): Observable<any> {

        console.log(err);

        alert("Ocorreu um erro!");

        return EMPTY;
    }
}