import { EMPTY, Observable } from "rxjs";

export class CommonMethods {

    public static errorHandler(err: any): Observable<any> {

        console.log(err);

        alert("Ocorreu um erro!");

        return EMPTY;
    }

    public static showMessage(message: string): void {

        alert(message);
    }
}