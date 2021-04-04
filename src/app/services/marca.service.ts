import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  url = "https://localhost:44362/"
  api = "api/Marca"
  constructor(private http: HttpClient) { }

  getMarcas(): Observable<any>{
    return this.http.get(this.url+this.api);
  }
}