import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  url = "https://localhost:44362/"
  api = "api/Producto"
  constructor(private http: HttpClient) { }

  getProductos(): Observable<any>{
    return this.http.get(this.url+this.api);
  }

  getTotalProductos(): Observable<any>{
    return this.http.get(this.url+this.api+'/totalproductos');
  }
}
