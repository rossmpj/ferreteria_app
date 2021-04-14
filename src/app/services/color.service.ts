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

    getColorById(id: number): Observable<any>{
        return this.http.get(this.url + this.api + id);
    }

    postColor(color: any): Observable<any>{
        return this.http.post(this.url + this.api, color);
    }

    updateColor(id: number, color: any): Observable<any>{
        return this.http.put(this.url + this.api + id, color);
    }

    deleteColor(id: number): Observable<any>{
        return this.http.delete(this.url + this.api + id);
    }
}
