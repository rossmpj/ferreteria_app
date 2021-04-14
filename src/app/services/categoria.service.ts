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

    getCategoriaById(id: number): Observable<any>{
        return this.http.get(this.url + this.api + id);
    }

    postCategoria(categoria: any): Observable<any>{
        return this.http.post(this.url + this.api, categoria);
    }

    updateCategoria(id: number, categoria: any): Observable<any>{
        return this.http.put(this.url + this.api + id, categoria);
    }
    
    deleteCategoria(id: number): Observable<any>{
        return this.http.delete(this.url + this.api + id);
    }
}
