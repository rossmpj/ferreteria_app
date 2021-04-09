import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ColorService {
    url = "https://localhost:44362/"
    api = "api/Color/"
    constructor(private http: HttpClient) { }

    getColores(): Observable<any>{
        return this.http.get(this.url + this.api);
    }

    deleteColor(id: number): Observable<any>{
        return this.http.delete(this.url + this.api + id);
    }

    getColorById(id: number): Observable<any>{
        return this.http.get(this.url + this.api + id);
    }
}
