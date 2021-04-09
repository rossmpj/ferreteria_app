import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class VentasService {
    url = "https://localhost:44362/"
    api = "api/Ventas/"
    constructor(private http: HttpClient) { }

    getVentas(): Observable<any>{
        return this.http.get(this.url + this.api);
    }

    getTotalVentas(): Observable<any>{
        return this.http.get(this.url + this.api + "totalventas");
    }
}
