import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  url = "https://localhost:44362/"
  api = "api/Cliente"
  constructor(private http: HttpClient) { }

  getClientes(): Observable<any>{
    return this.http.get(this.url+this.api);
  }
}
