import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductoService {
    url = "https://localhost:44362/"
    api = "api/Producto/"
    constructor(private http: HttpClient) { }

    getProductos(): Observable<any>{
        return this.http.get(this.url + this.api);
    }

    getTotalProductos(): Observable<any>{
        return this.http.get(this.url + this.api + 'totalproductos');
    }

    getProductoById(id: number): Observable<any>{
        return this.http.get(this.url + this.api + id);
    }
    
    postProducto(producto: any): Observable<any>{
        return this.http.post(this.url + this.api, producto);
    }

    updateProducto(id: number, producto: any): Observable<any>{
        return this.http.put(this.url + this.api + id, producto);
    }

    deleteProducto(id: number): Observable<any>{
        return this.http.delete(this.url + this.api + id);
    }
}
