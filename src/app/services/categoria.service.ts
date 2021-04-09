import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {
    url = "https://localhost:44362/"
    api = "api/Categoria/"
    constructor(private http: HttpClient) { }

    getCategorias(): Observable<any>{
        return this.http.get(this.url + this.api);
    }

    deleteCategoria(id: number): Observable<any>{
        return this.http.delete(this.url + this.api + id);
    }

    getCategoriaById(id: number): Observable<any>{
        return this.http.get(this.url + this.api + id);
    }
}
