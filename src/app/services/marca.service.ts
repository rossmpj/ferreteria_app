import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MarcaService {
    url = "https://localhost:44362/"
    api = "api/Marca/"
    constructor(private http: HttpClient) { }

    getMarcas(): Observable<any>{
        return this.http.get(this.url + this.api);
    }

    getMarcaById(id: number): Observable<any>{
        return this.http.get(this.url + this.api + id);
    }

    postMarca(marca: any): Observable<any>{
        return this.http.post(this.url + this.api, marca);
    }

    updateMarca(id: number, marca: any): Observable<any>{
        return this.http.put(this.url + this.api + id, marca);
    }

    deleteMarca(id: number): Observable<any>{
        return this.http.delete(this.url + this.api + id);
    }
}